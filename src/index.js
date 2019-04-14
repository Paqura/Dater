const currentDate = new Date();

const DAY = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const MONTH = [
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
  "December"
];

const getCurrentDay = date => DAY[(date.getDay() + 6) % 7];
const getCurrentMonth = date => MONTH[date.getMonth()];
const getCurrentYear = (date, isFull = true) =>
  isFull ? date.getFullYear() : date.getYear();

const getCurrentDate = date =>
  getCurrentYear(date, true) +
  " " +
  getCurrentMonth(date) +
  " " +
  getCurrentDay(date);

console.log(getCurrentDate(currentDate));
