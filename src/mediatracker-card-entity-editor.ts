import { css, LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

import {
  fireEvent,
  HomeAssistant,
  LovelaceCardEditor,
} from "custom-card-helpers";
import buildElementDefinitions from "./buildElementDefinitions";
import globalElementLoader from "./globalElementLoader";
import MwcListItem from "./mwc/list-item";
import MwcSelect from "./mwc/select";
import type { SubElementEditorConfig } from "./types";
import { ScopedRegistryHost } from "@lit-labs/scoped-registry-mixin";

import setupCustomlocalize from "./localize/localize";

declare global {
  interface HASSDomEvents {
    "go-back": undefined;
  }
}

@customElement("mediatracker-card-entity-editor")
export class MediaTrackerCardEntityEditor
  extends ScopedRegistryHost(LitElement)
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass?: HomeAssistant;
  @property({ attribute: false }) public config!: SubElementEditorConfig;

  static get elementDefinitions() {
    return buildElementDefinitions(
      [
        globalElementLoader("ha-checkbox"),
        globalElementLoader("ha-textfield"),
        globalElementLoader("ha-formfield"),
        globalElementLoader("ha-icon-button"),
        globalElementLoader("ha-icon"),
        MwcListItem,
        MwcSelect,
      ],
      MediaTrackerCardEntityEditor
    );
  }

  public setConfig(config: SubElementEditorConfig): void {
    this.config = {
      elementConfig: {
        name: "",
      },
      ...config,
    };
  }

  protected render(): TemplateResult {
    const customLocalize = setupCustomlocalize(this.hass);

    const refresh_interval = 10;

    return html`
      <div class="header">
        <div class="back-title">
          <ha-icon-button
            .label=${this.hass!.localize("ui.common.back")}
            @click=${this._goBack}
          >
            <ha-icon icon="mdi:arrow-left"></ha-icon>
          </ha-icon-button>
          <span slot="title">${customLocalize(`editor.title`)}</span>
        </div>
      </div>

      <div class="entity-editor">
        <ha-textfield
          class="entity-title"
          .label=${customLocalize("editor.name")}
          .value="${this.config.elementConfig?.name ?? ""}"
          .configValue="${"name"}"
          @change="${this._valueChanged}"
        ></ha-textfield>
      </div>
    `;
  }

  private _goBack(): void {
    fireEvent(this, "go-back");
  }

  private _valueChanged(ev): void {
    if (!this.config || !this.hass) {
      return;
    }

    const target = ev.target;
    if (target.configValue) {
      if (target.value === "") {
        const tmpConfig = { ...this.config.elementConfig };
        delete tmpConfig[target.configValue];
        this.config.elementConfig = tmpConfig;
      } else {
        const elementConfig = {
          ...this.config.elementConfig,
          [target.configValue]:
            target.checked !== undefined ? target.checked : target.value,
        };
        this.config.elementConfig = { ...elementConfig };
      }
    }

    fireEvent(this, "config-changed", { config: this.config.elementConfig });
  }

  static get styles() {
    return css`
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }

      .entity-editor {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      mwc-select {
        width: 100%;
      }

      ha-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mediatracker-card-entity-editor": MediaTrackerCardEntityEditor;
  }
}
