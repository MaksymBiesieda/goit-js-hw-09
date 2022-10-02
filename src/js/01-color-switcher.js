const buttonStartEl = document.querySelector('button[data-start]');
const buttonStopEl = document.querySelector('button[data-stop]');
const TIME_INTERVAL = 1000;
let timerId = null;

buttonStartEl.addEventListener('click', onButtonStart);
buttonStopEl.addEventListener('click', onButtonStop);

function onButtonStart() {
 timerId = setInterval(changingColor, TIME_INTERVAL);
    buttonStartEl.setAttribute('disabled', 'true');
    buttonStopEl.removeAttribute('disabled', 'true');
    
}
function onButtonStop() {
clearInterval(timerId);
    buttonStopEl.setAttribute('disabled', 'true');
    buttonStartEl.removeAttribute('disabled', 'true');
}
function changingColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

