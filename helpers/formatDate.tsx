export function formatDate(date: string, withTime: boolean = true) {
  const event = new Date(date);
  const timeOpts = withTime
    ? {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
        timeZoneName: "short",
      }
    : {};

  return event.toLocaleString("en-GB", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    ...(timeOpts as Intl.DateTimeFormatOptions),
  });
}

export const getMonthName = (monthNumber, lang: string = "en-GB") => {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString(lang, {
    month: "long",
    year: "numeric",
  });
};

export const getMonthFromIsoString = (isoString: string) => {
  return new Date(isoString).getMonth();
};

export const nowIsoString = new Date().toISOString();
