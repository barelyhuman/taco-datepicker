export function isDateOfISODay(year, month, date, expectedISODay) {
  const toCheck = new Date(year, month, date);
  const iSODayOfDate = toCheck.getDay();
  return iSODayOfDate === expectedISODay;
}

export function getNumberOfDays(year, month) {
  if (
    typeof year === "undefined" ||
    typeof month === "undefined" ||
    year == null ||
    month == null
  ) {
    return 0;
  }
  return 50 - new Date(new Date(year, month, 50).getDate());
}

export function createDateObject(date) {
  if (!date) {
    return;
  }
  return {
    date: new Date(date).getDate(),
    isoDay: new Date(date).getDay(),
    month: new Date(date).getMonth(),
    year: new Date(date).getFullYear(),
    hours: new Date(date).getHours(),
    minutes: new Date(date).getMinutes(),
    seconds: new Date(date).getSeconds(),
    timeOfDay: getTimeOfDay(new Date(date).getHours()),
  };
}

export function getTimeOfDay(hours) {
  return hours >= 12 ? "pm" : "am";
}

export function isDateToday(year, month, date) {
  const today = new Date();
  return isDateSelected(today, year, month, date);
}

export function isDateSelected(selected, year, month, date) {
  const selectedDate = new Date(selected);
  const comparable = createDateObject(selectedDate);
  return (
    comparable.year === year &&
    comparable.month === month &&
    comparable.date === date
  );
}
