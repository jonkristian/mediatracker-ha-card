import { LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, eventOptions, property, query, state } from "lit/decorators.js";
import { guard } from "lit/directives/guard.js";
import type { SortableEvent } from "sortablejs";
import { ScopedRegistryHost } from "@lit-labs/scoped-registry-mixin";

import {
  fireEvent,
  HomeAssistant,
  LovelaceCardEditor,
  HASSDomEvent,
} from "custom-card-helpers";
import buildElementDefinitions from "./buildElementDefinitions";
import globalElementLoader from "./globalElementLoader";

import MwcListItem from "./mwc/list-item";
import MwcSelect from "./mwc/select";
import type {
  EditorTarget,
  MediaTrackerCardConfig,
  SubElementEditorConfig,
  EditSubElementEvent,
} from "./types";
import { styleEditor } from "./styles/editor";
import setupCustomlocalize from "./localize/localize";
import "./mediatracker-card-entity-editor";

let Sortable;

@customElement("mediatracker-card-editor")
export class MediaTrackerCardEditor
  extends ScopedRegistryHost(LitElement)
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config!: MediaTrackerCardConfig;
  @state() private _attached = false;
  @state() private _renderEmptySortable = false;
  @state() private _subElementEditorConfig?: SubElementEditorConfig;

  private _entities?;
  private _sortable?;

  static get elementDefinitions() {
    return buildElementDefinitions(
      [
        globalElementLoader("ha-checkbox"),
        globalElementLoader("ha-textfield"),
        globalElementLoader("ha-formfield"),
        globalElementLoader("ha-icon-button"),
        globalElementLoader("ha-icon"),
        globalElementLoader("mediatracker-card-entity-editor"),
        MwcListItem,
        MwcSelect,
      ],
      MediaTrackerCardEditor
    );
  }

  static get styles(): CSSResultGroup {
    return [styleEditor];
  }

  public setConfig(config: MediaTrackerCardConfig): void {
    this._config = {
      name: "",
      ...config,
    };
    this._entities = config.entities;
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._entities) {
      return html``;
    }

    const customLocalize = setupCustomlocalize(this.hass);

    const eventStyleChoices = ["backdrop", "poster", "plain"];
    const sourceLinkChoices = ["primary", "all"];
    const descriptionChoices = ["today", "week", "all"];

    if (this._subElementEditorConfig) {
      return html`
        <mediatracker-card-entity-editor
          .hass=${this.hass}
          .config=${this._subElementEditorConfig}
          @go-back=${this._goBack}
          @config-changed=${this._handleSubElementChanged}
          @edit-detail-element=${this._editDetailElement}
        >
        </mediatracker-card-entity-editor>
      `;
    }

    // Filter states to only include calendar entitie.
    const calendarEntities = Object.values(this.hass!.states)
      .filter((entity) => entity.entity_id.startsWith("calendar."))
      .map((sensor) => sensor.entity_id);

    return html`
      <div class="card-config">
        <div style="margin-top: 1rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
          <ha-textfield
            class="card-title"
            .label=${customLocalize("editor.name")}
            .value="${this._config.name}"
            .configValue="${"name"}"
            @change="${this._valueChanged}"
          ></ha-textfield>

          <mwc-select
            .label=${customLocalize("editor.style.title")}
            .configValue=${"style"}
            .value=${this._config.style}
            @selected="${this._valueChanged}"
            @closed="${(e) => e.stopPropagation()}"
            fixedMenuPosition
          >
            <mwc-list-item></mwc-list-item>
            ${eventStyleChoices.map(
              (value) => html`
                <mwc-list-item .value=${value}
                  >${customLocalize(
                    `editor.style.${value}`
                  )}</mwc-list-item
                >
              `
            )}
          </mwc-select>

          <ha-textfield
            class="refresh-interval"
            .label=${customLocalize("editor.refresh_interval")}
            .value="${this._config.refresh_interval}"
            .configValue="${"refresh_interval"}"
            @change="${this._valueChanged}"
          ></ha-textfield>

          <ha-textfield
            class="refresh-interval"
            .label=${customLocalize("editor.number_of_days")}
            .value="${this._config.number_of_days}"
            .configValue="${"number_of_days"}"
            @change="${this._valueChanged}"
          ></ha-textfield>

          <mwc-select
            .label=${customLocalize("editor.description.title")}
            .configValue=${"description"}
            .value=${this._config.description}
            @selected="${this._valueChanged}"
            @closed="${(e) => e.stopPropagation()}"
            fixedMenuPosition
          >
            <mwc-list-item></mwc-list-item>
            ${descriptionChoices.map(
              (value) => html`
                <mwc-list-item .value=${value}
                  >${customLocalize(
                    `editor.description.${value}`
                  )}</mwc-list-item
                >
              `
            )}
          </mwc-select>

          <mwc-select
            .label=${customLocalize("editor.source_links.title")}
            .configValue=${"source_links"}
            .value=${this._config.source_links}
            @selected="${this._valueChanged}"
            @closed="${(e) => e.stopPropagation()}"
            fixedMenuPosition
          >
            <mwc-list-item></mwc-list-item>
            ${sourceLinkChoices.map(
              (value) => html`
                <mwc-list-item .value=${value}
                  >${customLocalize(
                    `editor.source_links.${value}`
                  )}</mwc-list-item
                >
              `
            )}
          </mwc-select>

          <ha-formfield .label=${customLocalize("editor.show_rating")}>
            <ha-checkbox
              @change="${this._valueChanged}"
              .checked=${this._config.show_rating}
              .configValue="${"show_rating"}"
            ></ha-checkbox>
          </ha-formfield>

          <ha-formfield .label=${customLocalize("editor.human_readable_countdown")}>
            <ha-checkbox
              @change="${this._valueChanged}"
              .checked=${this._config.human_readable_countdown}
              .configValue="${"human_readable_countdown"}"
            ></ha-checkbox>
          </ha-formfield>

          <ha-formfield .label=${customLocalize("editor.constrict_height")}>
            <ha-checkbox
              @change="${this._valueChanged}"
              .checked=${this._config.constrict_height}
              .configValue="${"constrict_height"}"
            ></ha-checkbox>
          </ha-formfield>
        </div>

        <div class="entities">
          ${guard([this._entities, this._renderEmptySortable], () =>
            this._renderEmptySortable
              ? ""
              : this._entities?.map(
                  (calendar, index) => html`
                    <div class="entity">
                      <div class="handle">
                        <ha-icon icon="mdi:drag"></ha-icon>
                      </div>
                      ${html`
                        <div class="special-row">
                          <div>
                            <span
                              >${calendar.name ? calendar.name : calendar.entity}</span
                            >
                            <span class="secondary">${calendar.entity}</span>
                          </div>
                        </div>
                      `}
                      <ha-icon-button
                        label="Remove"
                        class="remove-icon"
                        .index=${index}
                        @click=${this._removeRow}
                      >
                        <ha-icon icon="mdi:close"></ha-icon>
                      </ha-icon-button>

                      <ha-icon-button
                        label="Edit"
                        class="edit-icon"
                        .index=${index}
                        @click=${this._editRow}
                      >
                        <ha-icon icon="mdi:pencil"></ha-icon>
                      </ha-icon-button>
                    </div>
                  `
                )
          )}
        </div>

        <mwc-select
          label="Entity"
          @selected="${this._addEntity}"
          @closed="${(e) => e.stopPropagation()}"
          fixedMenuPosition
          naturalMenuWidth
        >
          ${calendarEntities.map(
            (entity) => html`
              <mwc-list-item .value=${entity}> ${entity} </mwc-list-item>
            `
          )}
        </mwc-select>
      </div>
    `;
  }

  private _valueChanged(ev): void {
    if (!this._config || !this.hass) {
      return;
    }

    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }

    if (target.configValue) {
      if (target.value === "") {
        delete this._config[target.configValue];
      } else {
        this._config = {
          ...this._config,
          [target.configValue]:
            target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    fireEvent(this, "config-changed", { config: this._config });
  }

  private _handleSubElementChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config || !this.hass) {
      return;
    }

    const value = ev.detail.config;
    const newConfigEntities = this._config!.entities!.concat();

    if (!value) {
      newConfigEntities.splice(this._subElementEditorConfig!.index!, 1);
      this._goBack();
    } else {
      newConfigEntities[this._subElementEditorConfig!.index!] = value;
    }
    this._config = { ...this._config!, entities: newConfigEntities };

    this._subElementEditorConfig = {
      ...this._subElementEditorConfig!,
      elementConfig: value,
    };

    fireEvent(this, "config-changed", { config: this._config });
  }

  public connectedCallback(): void {
    super.connectedCallback();
    this._attached = true;
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    this._attached = false;
  }

  protected updated(changedProps): void {
    super.updated(changedProps);
    const attachedChanged = changedProps.has("_attached");
    const entitiesChanged = changedProps.has("entities");

    if (!entitiesChanged && !attachedChanged) {
      return;
    }

    if (attachedChanged && !this._attached) {
      // Tear down sortable, if available
      this._sortable?.destroy();
      this._sortable = undefined;
      return;
    }

    if (!this._sortable && this._entities) {
      this._createSortable();
      return;
    }

    if (entitiesChanged) {
      this._handleEntitiesChanged();
    }
  }

  private async _handleEntitiesChanged(): Promise<void> {
    this._renderEmptySortable = true;
    await this.updateComplete;
    const container = this.shadowRoot?.querySelector(
      ".entities"
    ) as HTMLElement;
    while (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
    this._renderEmptySortable = false;
  }

  private async _createSortable() {
    if (!Sortable) {
      const sortableImport = await import(
        "sortablejs/modular/sortable.core.esm"
      );

      Sortable = sortableImport.Sortable;
      Sortable.mount(sortableImport.OnSpill);
      Sortable.mount(sortableImport.AutoScroll());
    }

    const element = this.shadowRoot?.querySelector(".entities");
    if (!element) return;
    this._sortable = new Sortable(element, {
      animation: 150,
      fallbackClass: "sortable-fallback",
      handle: ".handle",
      onEnd: async (evt) => this._rowMoved(evt),
    });
  }

  private _rowMoved(ev: SortableEvent): void {
    if (ev.oldIndex === ev.newIndex) return;

    const newEntities = this._entities!.concat();
    newEntities.splice(ev.newIndex, 0, newEntities.splice(ev.oldIndex, 1)[0]);

    this._valueChanged({
      target: { configValue: "entities", value: newEntities },
    });
  }

  private _removeRow(ev): void {
    const index = ev.currentTarget?.index || 0;
    const newEntities = this._entities?.concat();
    newEntities?.splice(index, 1);

    this._valueChanged({
      target: { configValue: "entities", value: newEntities },
    });
  }

  private async _addEntity(ev): Promise<void> {
    const target = ev.target! as EditorTarget;
    const value = target.value as string;

    if (value === "") {
      return;
    }

    const newEntities = this._entities.concat({
      entity: value,
    });
    (ev.target as any).value = "";
    this._valueChanged({
      target: { configValue: "entities", value: newEntities },
    });
  }

  private _editRow(ev) {
    const index = ev.currentTarget.index;

    this._subElementEditorConfig = {
      index,
      elementConfig: this._entities[index],
    };
  }

  private _goBack(): void {
    this._subElementEditorConfig = undefined;
  }

  private _editDetailElement(ev: HASSDomEvent<EditSubElementEvent>): void {
    this._subElementEditorConfig = ev.detail.subElementConfig;
  }
}
