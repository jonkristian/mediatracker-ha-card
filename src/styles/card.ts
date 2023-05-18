import { css } from "lit";

export const cardStyle = css`
  // Card
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

  // Events
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 1fr;
    gap: 1rem;
  }

  // Event
  .mt-event {
    position: relative;
    border-radius: 10px;
    height: 100%;
    overflow: hidden;
    /* white-space: nowrap; */
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
    height: 100%;
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
    max-width: 600px;
  }
`;
