import { DateTime } from './luxon.js';

const setTime = () => {
  console.log(DateTime.now());
  const time = document.querySelector('#date');
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  time.innerHTML = date;
  setInterval(setTime, 1000);
};

export default setTime;
