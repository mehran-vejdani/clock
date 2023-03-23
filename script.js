const DAY = document.querySelector("#day");
const HOUR = document.querySelector("#hour");
const MINUTE = document.querySelector("#minute");
const SECOND = document.querySelector("#second");
const AMPM = document.querySelector("#ampm");
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

setInterval(() => {
  let date = new Date();
  let d = date.getDay();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let ampm = h >= 12 ? "pm" : "am";

  h = h % 12;
  h = h ? h : "12";
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  DAY.innerHTML = dayNames[d];
  HOUR.innerHTML = h;
  MINUTE.innerHTML = m;
  SECOND.innerHTML = s;
  AMPM.innerHTML = ampm;
}, 1000);
