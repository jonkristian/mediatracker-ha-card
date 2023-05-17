import { css } from "lit";

export const cardStyle = css`

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

  // Events
  .mt-events {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .mt-events-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid var(--divider-color);
  }

  .mt-events-header__day,
  .mt-events-header__date {
    font-weight: 400;
    padding: 0;
    margin: 0;
  }

  // Event
  .mt-event {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: .5rem;
  }

  .mt-event-header {
    position: relative;
    margin-left: 5px;
    color: var(--primary-text-color);
    font-size: 16px;
    font-weight: 300;

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

  .mt-event-header__description {}

  .mt-event-cover {
    width: 100px;
    height: 100%:
    object-fit: cover;
  }
`;
