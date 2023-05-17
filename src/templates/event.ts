import { css, LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import dayjs from "dayjs";
import "dayjs/locale/nb";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
dayjs.extend(updateLocale);
dayjs.extend(relativeTime);

@customElement("mediatracker-card-event")
export class MediaTrackerCardEvent extends LitElement {
  @property() hass;
  @property() event;
  @property() show_backdrop;
  @property() show_description;

  protected render(): TemplateResult {
    if (!this.event) {
      return html``;
    }
    const data = JSON.parse(this.event.location);

    return html`
      <div class="mt-event${this.show_backdrop?' has-backdrop':''}">
        ${this.show_backdrop && data.backdrop
          ? html`
            <img class="mt-event-backdrop" src="http://${data.host}${data.backdrop}?token=${data.token}&size=small">
          `
          : html``
        }
        <div class="mt-event-content">
          <h3 class="mt-event-title" style="--event-bg: ${this.event.backgroundColor};">
            ${this.event.title}
          </h3>
          ${this.show_description && this.event.description
            ? html`
              <div class="mt-event-description">${this.event.description}</div>
            `
            :html``
          }
        </header>
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      .mt-event {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
      }

      .mt-event-backdrop {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        object-position: center;
      }

      .mt-event-content {
        position: relative;
        z-index: 2;
        color: var(--primary-text-color);
        font-weight: 400;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .has-backdrop .mt-event-content {
        background-color: rgba(0,0,0,.75);
        padding: 1rem;
      }

      .mt-event-title {
        font-size: 14px;
        font-weight: 400;
        position: relative;
        color: var(--primary-text-color);
        margin: 0;
        margin-left: 5px;

        &:before {
          content: "";
          display: inline-block;
          background-color: var(--event-bg);
          width: 10px;
          height: 10px;
          border-radius: 100%;
          transform: translateX(-5px);
        }
      }

      .has-backdrop .mt-event-title {
        font-weight: 500;
      }

      .mt-event-description {
        color: var(--secondary-text-color);
        font-size: 13px;
        margin-bottom: 1rem;
      }

      .has-backdrop .mt-event-description {
        color: var(--primary-text-color);
        margin-bottom: 0;
      }
    `;
  }
}
