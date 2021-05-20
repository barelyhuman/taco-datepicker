export function isDateOfISODay(year, month, date, expectedISODay) {
  const toCheck = new Date(year, month, date);
  const iSODayOfDate = toCheck.getDay();
  return iSODayOfDate === expectedISODay;
}

export function getNumberOfDays(year, month) {
  if (typeof year != "number" || typeof month != "number") {
    return 0;
  }
  return 50 - new Date(new Date(year, month, 50).getDate());
}

export function createDateObject(date) {
  if (!date) {
    return;
  }
  const dateRef = new Date(date);
  return {
    date: dateRef.getDate(),
    isoDay: dateRef.getDay(),
    month: dateRef.getMonth(),
    year: dateRef.getFullYear(),
    hours: dateRef.getHours(),
    minutes: dateRef.getMinutes(),
    seconds: dateRef.getSeconds(),
    timeOfDay: getTimeOfDay(dateRef.getHours()),
  };
}

export function getTimeOfDay(hours) {
  return hours >= 12 ? "pm" : "am";
}

export function isDateSelected(selected, year, month, date) {
  const comparable = createDateObject(new Date(selected));
  return (
    comparable.year === year &&
    comparable.month === month &&
    comparable.date === date
  );
}
