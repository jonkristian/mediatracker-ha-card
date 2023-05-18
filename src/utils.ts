import { HomeAssistant } from "custom-card-helpers";

import type { MediaTrackerCalendar, MediaTrackerCalendarEvent } from "./types";

import dayjs from "dayjs";
import "dayjs/locale/nb";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

export const fetchCalendarEvents = async (
  hass: HomeAssistant,
  start: dayjs.Dayjs,
  end: dayjs.Dayjs,
  calendars: MediaTrackerCalendar[]
): Promise<{ events: MediaTrackerCalendarEvent[]; errors: string[] }> => {
  const params = encodeURI(`?start=${start}Z&end=${end}Z`);

  const calEvents: MediaTrackerCalendarEvent[] = [];
  const errors: string[] = [];
  const promises: Promise<MediaTrackerCalendarEvent[]>[] = [];

  calendars.forEach((cal) => {
    promises.push(
      hass.callApi<MediaTrackerCalendarEvent[]>(
        "GET",
        `calendars/${cal.entity_id}${params}`
      )
    );
  });

  for (const [idx, promise] of promises.entries()) {
    let result: MediaTrackerCalendarEvent[];
    try {
      // eslint-disable-next-line no-await-in-loop
      result = await promise;
    } catch (err) {
      errors.push(calendars[idx].entity_id);
      continue;
    }
    const cal = calendars[idx];
    result.forEach((ev) => {
      const eventStart = getCalendarDate(ev.start);
      const eventEnd = getCalendarDate(ev.end);
      if (!eventStart || !eventEnd) {
        return;
      }
      const event: MediaTrackerCalendarEvent = {
        start: eventStart,
        end: eventEnd,
        title: ev.summary,
        backgroundColor: cal.backgroundColor,
        calendar: cal.entity_id,
        description: ev.description,
        location: ev.location,
      };

      calEvents.push(event);
    });
  }

  return { events: calEvents, errors };
};

const getCalendarDate = (dateObj: any): string | undefined => {
  if (typeof dateObj === "string") {
    return dateObj;
  }

  if (dateObj.dateTime) {
    return dateObj.dateTime;
  }

  if (dateObj.date) {
    return dateObj.date;
  }

  return undefined;
};

export const getCalendars = (hass): MediaTrackerCalendar[] =>
  Object.keys(hass.states)
    .sort()
    .map((eid) => ({
      entity_id: eid,
      name: hass.states[eid],
    }));


export function groupEventsByDay(events) {
  // grouping events by days, returns object with days and events
  const ev: any[] = [].concat(...events);
  const groupsOfEvents = ev.reduce(function (r, a: { start: number }) {
    r[a.start] = r[a.start] || [];
    r[a.start].push(a);
    return r;
  }, {});

  let groupedEvents = Object.keys(groupsOfEvents).map(function (k) {
    return groupsOfEvents[k];
  });

  groupedEvents = groupedEvents;

  return groupedEvents;
}

export const COLORS = [
  "#44739e",
  "#984ea3",
  "#00d2d5",
  "#ff7f00",
  "#af8d00",
  "#7f80cd",
  "#b3e900",
  "#c42e60",
  "#a65628",
  "#f781bf",
  "#8dd3c7",
  "#bebada",
  "#fb8072",
  "#80b1d3",
  "#fdb462",
  "#fccde5",
  "#bc80bd",
  "#ffed6f",
  "#c4eaff",
  "#cf8c00",
  "#1b9e77",
  "#d95f02",
  "#e7298a",
  "#e6ab02",
  "#a6761d",
  "#0097ff",
  "#00d067",
  "#f43600",
  "#4ba93b",
  "#5779bb",
  "#927acc",
  "#97ee3f",
  "#bf3947",
  "#9f5b00",
  "#f48758",
  "#8caed6",
  "#f2b94f",
  "#eff26e",
  "#e43872",
  "#d9b100",
  "#9d7a00",
  "#698cff",
  "#d9d9d9",
  "#00d27e",
  "#d06800",
  "#009f82",
  "#c49200",
  "#cbe8ff",
  "#fecddf",
  "#c27eb6",
  "#8cd2ce",
  "#c4b8d9",
  "#f883b0",
  "#a49100",
  "#f48800",
  "#27d0df",
  "#a04a9b",
];

export function getColorByIndex(index: number) {
  return COLORS[index % COLORS.length];
}

export function getGraphColorByIndex(
  index: number,
  style: CSSStyleDeclaration
) {
  // The CSS vars for the colors use range 1..n, so we need to adjust the index from the internal 0..n color index range.
  return (
    style.getPropertyValue(`--graph-color-${index + 1}`) ||
    getColorByIndex(index)
  );
}

export function getMediaUrl(mediaItem) {
  const audibleDomain = 'com';
  mediaItem.imdb = `https://www.imdb.com/title/${mediaItem.imdbId}`
  mediaItem.tmdb = `https://www.themoviedb.org/${mediaItem.mediaType}/${mediaItem.tmdbId}`
  mediaItem.igdb = `https://www.igdb.com/games/${mediaItem.title.toLowerCase().replaceAll(' ', '-')}`
  mediaItem.openlibrary = `https://openlibrary.org${mediaItem.openlibraryId}`
  mediaItem.audible = `https://audible.${audibleDomain}/pd/${mediaItem.audibleId}?overrideBaseCountry=true&ipRedirectOverride=true`
}