import { css, LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  HomeAssistant,
  LovelaceCard,
  LovelaceCardEditor,
} from "custom-card-helpers";

import type { MediaTrackerCalendar, MediaTrackerCalendarEvent, MediaTrackerCardConfig } from "./types";
import pjson from "../package.json";

import dayjs from "dayjs";
import "dayjs/locale/nb";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

import { fetchCalendarEvents, groupEventsByDay, getColorByIndex } from "./utils";
import "./templates/events";


/* eslint-disable @typescript-eslint/no-explicit-any */
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "mediatracker-card",
  name: "Media Tracker Card",
  description:
    "This card is made to work with the Media Tracker custom component.",
});
/* eslint-enable @typescript-eslint/no-explicit-any */

@customElement("mediatracker-card")
export class MediaTrackerCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @property({ attribute: false }) public _events: MediaTrackerCalendarEvent[] = [];
  @property({ attribute: false }) public _config!: MediaTrackerCardConfig;

  private _calendars: MediaTrackerCalendar[] = [];
  private _error?: string = undefined;
  private _startDate?;
  private _endDate?;

  _isUpdating;
  _lastEventsUpdateTime!: dayjs.Dayjs;

  public static getStubConfig() {
    return {
      entities: [],
    };
  }

  static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import("./mediatracker-card-editor");
    return document.createElement(
      "mediatracker-card-editor"
    ) as LovelaceCardEditor;
  }

  getCardSize(): number | Promise<number> {
    return 1;
  }

  setConfig(config: MediaTrackerCardConfig): void {
    this._config?.refresh_interval || 60;
    this._config?.number_of_days || 10

    this._config = config;

    this._calendars = config.entities.map((entity, idx) => ({
      entity_id: entity.entity,
      backgroundColor: getColorByIndex(idx),
    }));

    const dateFormat = "YYYY-MM-DDTHH:mm:ss";
    this._startDate = dayjs()
      .startOf("day")
      .format(dateFormat);

    this._endDate = dayjs()
      .add(this._config.number_of_days, "day")
      .endOf("day")
      .format(dateFormat);
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    const lang = this.hass?.locale.language ?? "en";
    dayjs.locale(lang);

    this._fetchCalendarEvents();
    const days = groupEventsByDay(this._events);

    return html`
    <ha-card>
      <div class="mt-card">
        <div class="mt-header">
          ${this._config.name}
        </div>

        <div class="mt-calendar${this._config.constrict_height?' constrict':''}">
          ${days ? html`
            ${days.map(
              (events) => html`
                <div class="mt-day">
                  <mediatracker-card-events
                    .hass=${this.hass}
                    .date=${events[0].start}
                    .events="${events}"
                    .config="${this._config}"
                  ></mediatracker-card-events>
                </div>
              `
            )}
          ` : html``}
        </div>
      </div>
    </ha-card>
    `;
  }

  private async _fetchCalendarEvents(): Promise<void> {
    if (!this._startDate || !this._endDate) {
      return;
    }
    if (!this._isUpdating) {
      if (
        !this._lastEventsUpdateTime ||
        dayjs().diff(this._lastEventsUpdateTime, "seconds") >
          this._config.refresh_interval
      ) {
        this._isUpdating = true;
        this._error = undefined;
        const result = await fetchCalendarEvents(
          this.hass!,
          this._startDate,
          this._endDate,
          this._calendars
        );
        this._events = result.events;

        if (result.errors.length > 0) {
          const nameList = result.errors.join(", ");
          this._error = `${this.hass!.localize(
            "ui.components.calendar.event_retrieval_error"
          )} ${nameList}`;
        }

        this._isUpdating = false;
        this._lastEventsUpdateTime = dayjs();
      }
    }
  }

  static get styles(): CSSResultGroup {
    return css`
      .mt-card {
        display: flex;
        flex-direction: column;
        padding: 1rem;
      }

      .mt-header {
        color: var(--ha-card-header-color,--primary-text-color);
        font-size: var(--ha-card-header-font-size,24px);
        padding-block: .5rem;
        margin-bottom: 1rem;
      }

      .mt-calendar.constrict {
        overflow-y: scroll;
        max-height: 450px;
        padding-right: 1rem;
      }

      .mt-day {
        margin-bottom: 1.6rem;
      }
    `;
  }
}

if (!customElements.get("mediatracker-card")) {
  customElements.define("mediatracker-card", MediaTrackerCard);
  console.info(
    `%c  MEDIATRACKER-CARD \n%c ${pjson.version}    `,
    "color: orange; font-weight: bold; background: black",
    "color: white; font-weight: bold; background: dimgray"
  );
}
