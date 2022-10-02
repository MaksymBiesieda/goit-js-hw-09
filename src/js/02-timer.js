import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
const inputEl = document.querySelector('#datetime-picker');
const startButtonEl = document.querySelector('button[data-start]');
const TIME_INTERVAL = 1000;

startButtonEl.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selectedTime = selectedDates[0].getTime();
      const currentTime = Date.now();
      const deltaTime = selectedTime - currentTime;

      if (deltaTime <= 0) {
          Notiflix.Notify.failure("Please choose a date in the future");
          return; 
      } else {
          startButtonEl.removeAttribute('disabled', 'true');
          startButtonEl.addEventListener('click', onButtonStart)

          function onButtonStart() {
              const timerId = setInterval(changingTime, TIME_INTERVAL);
              startButtonEl.setAttribute('disabled', 'true');

              function changingTime() {
                const deltaTime = selectedTime - Date.now(); 
                if (deltaTime <= 0) {
                    clearInterval(timerId);
                    startButtonEl.removeAttribute('disabled', 'true');
                 return;
                }
                 const {days, hours, minutes, seconds} = convertMs(deltaTime);
                 daysEl.textContent = `${days}`;
                 hoursEl.textContent = `${hours}`;
                 minutesEl.textContent = `${minutes}`;
                 secondsEl.textContent = `${seconds}`;
              }
          }       
      }      
  },
};

const fp = flatpickr(inputEl, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
