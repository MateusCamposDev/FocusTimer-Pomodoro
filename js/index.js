import Controls from "./controls.js";
import Timer from "./timer.js";

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

const controls = Controls ({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,

});

const timer = Timer({
     minutesDisplay,
     secondsDisplay,
     resetControls: controls.reset,
});

buttonPlay.addEventListener('click', () => {
     controls.play();
     timer.countdown();
});

buttonPause.addEventListener('click', () => {
     controls.pause();
     timer.hold();
});

buttonStop.addEventListener('click', () => {
    controls.reset();
    timer.reset();
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
    let newMinutes = controls.getMinutes();

    if(!newMinutes) {
       timer.reset();
       return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
});