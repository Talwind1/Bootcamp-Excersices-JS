const currentDate = new Date(); //creates a new date of today!

const [month, date, day, year] = [
  currentDate.getMonth(),
  currentDate.getDate(),
  currentDate.getDay(),
  currentDate.getFullYear(),
];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfYear = [
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
let announceDate = function () {
  return `Today is ${daysOfWeek[day]} the ${date} of ${monthsOfYear[month]}, ${year}`;
};
