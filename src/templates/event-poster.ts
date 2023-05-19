import { css, LitElement, html, TemplateResult, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import dayjs from "dayjs";
import "dayjs/locale/nb";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
import setupCustomlocalize from "../localize/localize";
import { getSourceLinks } from "../utils";

@customElement("mediatracker-event-poster")
export class MediaTrackerCardEvent extends LitElement {
  @property() hass;
  @property() event;
  @property() rating;
  @property() description;
  @property() source_links;

  protected render(): TemplateResult {
    if (!this.event) {
      return html``;
    }
    const data = JSON.parse(this.event.location);
    const customLocalize = setupCustomlocalize(this.hass!);

    let showDescription = false;
    if(this.description == 'week' && dayjs(this.event.start) <= dayjs().add(7, 'day')) {
      showDescription = true;
    }

    if(this.description == 'today' && dayjs(this.event.start).isToday()) {
      showDescription = true;
    }

    return html`
      <div class="mt-event" style="--event-color: ${this.event.backgroundColor};">
        <figure class="mt-event-poster">
          <img src="http://${data.host}${data.poster}?size=small&token=${data.token}">
        </figure>

        <div class="mt-event-content">
          <header class="mt-event-header">
            <h3 class="mt-event-header__title">${this.event.title}</h3>
            ${data.url ? html`<a class="mt-event-studio" href="${data.url}" title="${customLocalize("card.studio_link")}" target="_new"><ha-icon class="mt-event-icon" icon="mdi:link"></ha-icon></a>`:''}
          </header>
          <div class="mt-event-details">
            ${this.rating && data.tmdb_rating ? html`<span>${customLocalize("card.rating")}: ${data.tmdb_rating.toFixed(1)}</span>`:''}
            ${getSourceLinks(this.source_links, data.sources)}
          </div>
          ${showDescription == true || this.description == 'all'
            ? html`
              <div class="mt-event-description">${this.event.description}</div>
            `
            :html``
          }
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      .mt-event {
        background-color: var(--event-color);
        display: grid;
        grid-template-columns: 100px 1fr;
        border-radius: 10px;
        height: 100%;
        overflow: hidden;
      }

      .mt-event-icon {
        --mdc-icon-size: 20px;
      }

      .mt-event-poster {
        position: relative;
        line-height: 0;
        margin: 0;
      }

      .mt-event-poster img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .mt-event-content {
        color: var(--primary-text-color);
        padding-left: 1rem;
        font-weight: 400;
        display: flex;
        flex-direction: column;
        gap: .3rem;
        background-color: rgba(0,0,0,.6);
        padding: 1rem;
        height: 100%;
      }

      .mt-event-header {
        margin: 0;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
      }

      .mt-event-header__title {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .mt-event-details {
        margin: 0;
        font-size: 12px;
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      .mt-event-description {
        margin: 0;
        font-size: 13px;
        padding-block: .5rem;
        color: var(--primary-text-color);
        max-width: 600px;
      }
    `;
  }
}
