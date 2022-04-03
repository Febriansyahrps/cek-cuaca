// get forescast handler
export const getForecastHandler = (day1, day2, currentTime) => {
  const timeMerge = [...day1, ...day2].slice(currentTime + 1, currentTime + 25);
  return timeMerge;
};
// get hour handler
export const getHourHandler = (hour) => {
  const getHour = parseInt(hour.slice(11, 13).split(":"));
  return getHour;
};
// get time handler
export const getTimesofDayHandler = (time) => {
  if (time.includes("day")) {
    return "day";
  } else {
    return "night";
  }
};
// get date
export const getDateHandler = (date) => {
  const getYear = date.slice(0, 4);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getMonth = month.slice(
    parseInt(date.slice(5, 7)) - 1,
    parseInt(date.slice(5, 7))
  )[0];
  const getDay = parseInt(date.slice(8, 10));

  return `${getDay} ${getMonth} ${getYear}`;
};
// get current time
export const getTimeHandler = (date) => {
  return date.slice(11);
};
