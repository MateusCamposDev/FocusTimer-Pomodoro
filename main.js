const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;

function resetControls () {
  buttonStop.classList.add('hide');
  buttonSet.classList.remove('hide');

  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function resetTimer() {
  updateTimerDisplay(minutes, 0);
  clearTimeout(timerTimeOut);
}

function countdown () {
  timerTimeOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateTimerDisplay(minutes, 0)

    if(minutes <= 0) {

      resetControls(0);

      return;
    };

    if(seconds <= 0) {
      seconds = 60;

      minutes--; 
    }
    
      updateTimerDisplay(minutes, String(seconds -1));


    countdown();
 }, 1000);
}

buttonPlay.addEventListener('click', () => {
     buttonPlay.classList.add('hide');
     buttonPause.classList.remove('hide');

     buttonSet.classList.add('hide');
     buttonStop.classList.remove('hide');

     countdown();
});

buttonPause.addEventListener('click', () => {
     buttonPlay.classList.remove('hide');
     buttonPause.classList.add('hide');
     clearTimeout(timerTimeOut);
});

buttonStop.addEventListener('click', () => {
    resetControls();
    resetTimer();
});

buttonSoundOff.addEventListener('click', () => {
     buttonSoundOn.classList.remove('hide');
     buttonSoundOff.classList.add('hide');
});

buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
});

buttonSet.addEventListener('click', () => {
    let newMinutes = prompt('Quantos minutos?');
    if(!newMinutes) {
       resetTimer();
       return;
    }

    minutes = newMinutes;
    updateTimerDisplay(minutes, 0);
});