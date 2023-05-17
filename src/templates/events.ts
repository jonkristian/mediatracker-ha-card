import { css, LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./event";
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
          ${this.config.show_human_readable
          ? html`
            <h3 class="mt-events-header__day">${dayjs(this.date).fromNow()}</h3>
          `
          : html`
            <h3 class="mt-events-header__day">${dayjs(this.date).format('dddd')}</h3>
          `
          }
          <h3 class="mt-events-header__date">${dayjs(this.date).format('DD/MM')}</h3>
        `}
      </header>

      ${this.events
        ? html`
          <div class="mt-events">
            ${this.events.map(
              (event) => html`
                <mediatracker-card-event
                  .hass=${this.hass}
                  .event="${event}"
                  .show_backdrop="${this.config.show_backdrop}"
                  .show_description="${this.config.show_description}"
                ></mediatracker-card-event>
              `
            )}
          </div>
          `
        : html``}
    `;
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
        display: flex;
        flex-direction: column;
        gap: .5rem;
      }
    `;
  }
}
