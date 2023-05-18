import { ActionConfig, LovelaceCardConfig } from "custom-card-helpers";

export interface MediaTrackerCardEntityConfig {
  entity?: string;
  name?: string;
}

export interface MediaTrackerCardConfig extends LovelaceCardConfig {
  entity?: string;
  events: object;
  state: object;
  name?: string;
  style: string;
  refresh_interval: number;
  number_of_days: number;
  description: string;
  source_links: string;
  show_rating: boolean;
  constrict_height: boolean;
  human_readable_countdown: boolean;
  show_warning?: boolean;
  show_error?: boolean;
}

export interface SubElementEditorConfig {
  index?: number;
  elementConfig?: MediaTrackerCardEntityConfig;
  entity?: string;
}

export interface EditSubElementEvent {
  subElementConfig: SubElementEditorConfig;
}

export interface EditorTarget extends EventTarget {
  value?: string;
  index?: number;
  checked?: boolean;
  configValue?: string;
  type?: HTMLInputElement["type"];
  config: ActionConfig;
}

export interface MediaTrackerCalendar {
  entity_id: string;
  name?: string;
  backgroundColor?: string;
}

export interface MediaTrackerCalendarEvent {
  title: string;
  start: string;
  end?: string;
  backgroundColor?: string;
  calendar: string;
  description: string;
  location: string;
  [key: string]: any;
}