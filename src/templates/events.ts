import { css, LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./event";
import "./event-backdrop";
import "./event-poster";
import setupCustomlocalize from "../localize/localize";
import dayjs from "dayjs";
import "dayjs/locale/nb";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import isToday from "dayjs/plugin/isToday";
dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
dayjs.extend(isToday);

@customElement("mediatracker-card-events")
export class MediaTrackerCardEvents extends LitElement {
  @property() hass;
  @property() date;
  @property() events;
  @property() config;

  protected render(): TemplateResult {
    if (!this.events) {
      return html``;
    }

    const customLocalize = setupCustomlocalize(this.hass!);

    return html`
      <header class="mt-events-header">
        ${dayjs(this.date).isToday()
        ? html`
          <h3 class="mt-events-header__day">${customLocalize("card.today")}</h3>
        `
        : html`
          <h3 class="mt-events-header__day">
            ${dayjs(this.date).format('dddd')}
            ${this.config.human_readable_countdown ? html`<small class="mt-events-header__hrc"> • ${dayjs(this.date).fromNow()}</small>`:''}
          </h3>
        `}
        <p class="mt-events-header__date">${dayjs(this.date).format('DD/MM')}</p>
      </header>

      ${this.config.style == 'backdrop' ? html`
          <div class="mt-events style-backdrop">
            ${this.events.map((event) => html`
              <mediatracker-event-backdrop
                .hass=${this.hass}
                .event="${event}"
                .rating="${this.config.show_rating}"
                .description="${this.config.description}"
                .source_links="${this.config.source_links}"
              ></mediatracker-event-backdrop>
            `)}
          </div>
        `
      : this.config.style == 'poster' ? html`
          <div class="mt-events style-poster">
            ${this.events.map((event) => html`
              <mediatracker-event-poster
                .hass=${this.hass}
                .event="${event}"
                .rating="${this.config.show_rating}"
                .description="${this.config.description}"
                .source_links="${this.config.source_links}"
              ></mediatracker-event-poster>
            `)}
          </div>
      `
      : html`
        <div class="mt-events">
          ${this.events.map((event) => html`
            <mediatracker-event
              .hass=${this.hass}
              .event="${event}"
              .rating="${this.config.show_rating}"
              .description="${this.config.description}"
              .source_links="${this.config.source_links}"
            ></mediatracker-event>
          `)}
        </div>
      `}

    `
  }

  static get styles(): CSSResultGroup {
    return css`
      .mt-events-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid var(--divider-color);
        margin-bottom: 1rem;
        padding-bottom: .5rem;
      }

      .mt-events-header__day,
      .mt-events-header__date {
        font-size: 18px;
        font-weight: 400;
        padding: 0;
        margin: 0;
      }

      .mt-events {
        display: grid;
        gap: 1.6rem;
      }

      .mt-events.style-backdrop,
      .mt-events.style-poster {
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 1fr;
      }
    `;
  }
}
