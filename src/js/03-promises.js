import Notiflix from 'notiflix';

const formEl = document.querySelector('.form')
const buttonSubmitEl = document.querySelector('button');
const inputDelayEl = document.querySelector('[name="delay"]');
const inputStepEl = document.querySelector('[name="step"]');
const inputAmountEl = document.querySelector('[name="amount"]');

formEl.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
     const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
  if (shouldResolve) {
   resolve({position, delay});
  } 
    reject({position, delay});
  }, delay)}) 
  
}
function onFormSubmit(event) {
  event.preventDefault();
  let intervall = Number(inputDelayEl.value);
  const step =Number(inputStepEl.value)
  for (let i = 1; i <= inputAmountEl.value; i += 1) {
  createPromise([i], intervall).then(onSuccess).catch(onError);
    
   intervall += step;
  }
}

function onSuccess(result) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
}
function onError(error) {
  Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
}
