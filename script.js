import * as textFile from './textfile.js';

let userInput = document.getElementById('userinput');
const startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let mistakes = document.getElementById('mistakes');
let timer = document.getElementById('timer');
const result = document.getElementById('result');
let speed = document.getElementById('speed');
let accuracy = document.getElementById('accuracy');
const stat = document.querySelector('.statistics');
let timerInterval;
let mistake = 0;
let time = 60;


// Typing
userInput.addEventListener('input', ()=>{
  let quoteChars = document.querySelectorAll('.quote-chars');
  quoteChars = Array.from(quoteChars);

  let userInputChars = userInput.value.split('');

  quoteChars.forEach((char, index) => {
    if(char.textContent == userInputChars[index]){
      char.classList.add('success');
    }
    else if (userInputChars[index] == null){
      char.classList.remove('success');
      char.classList.remove('fail');
    }
    else{
      if(!char.classList.contains('fail')){
        mistake++;
        mistakes.textContent = mistake;
      }
      char.classList.add('fail');
    }
  });
});


// start test

const startTest = () => {
  textFile.generateTxt();

  mistake = 0;
  time = 60;
  mistakes.textContent = 0;

  userInput.disabled = false;
  userInput.value='';
  userInput.focus();

  timeReduce();
  
  stopBtn.style.display = 'block';
  startBtn.style.display = 'none';

  stat.style.display = 'block';
  
};

// start timer
const timeReduce = () => {
  timerInterval = setInterval(updateTimer, 1000);
};

// update timer

const updateTimer = () => {
  if (time == 0) {
    displayResult();
  }
  else{
    timer.textContent = --time;
  }
}

// result
const displayResult = () => {
  clearInterval(timerInterval);
  userInput.disabled = true;

  startBtn.style.display = 'block';
  stopBtn.style.display = 'none';

  let timeTaken = (60-time)/60;

  let totalChars = userInput.value.length;

  speed.textContent = (totalChars/5/timeTaken).toFixed(2);
  accuracy.textContent = Math.round(((totalChars-mistake)/totalChars)*100);

  result.style.display = 'block';

}

stopBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    displayResult();
});

startBtn.addEventListener('click', startTest);
