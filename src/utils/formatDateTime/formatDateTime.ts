export function formatDateTime(date: string, dateOnly = false) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: dateOnly ? "UTC" : "EST",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = new Date(date);

  let formattedDateString = formattedDate.toLocaleDateString(
    "en-US",
    dateOptions
  );

  if (!dateOnly) {
    const formattedTimeString = formattedDate.toLocaleTimeString(
      "en-US",
      timeOptions
    );
    formattedDateString += `, ${formattedTimeString}`;
  }

  return formattedDateString;
}
