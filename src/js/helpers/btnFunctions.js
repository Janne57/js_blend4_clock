import {refs} from '../refs.js'
import {getTimeComponents} from './getTimeComponents.js'
import {declensionNum} from './declensionNum.js'
import {addPad} from './addPad.js'


let formatTime = false;
let showAmPm = false;
let intervalId = null;


function startClock(rootSelector) {

    intervalId = setInterval(() => {
        const currentTime = Date.now();
        let { hours, minutes, seconds } = getTimeComponents(currentTime);
        const timeZoneName = hours >= 12 ? "PM" : "AM";
    
        hours  = formatTime ? hours % 12 : hours % 24;
    
        rootSelector.querySelector('.js-clock__hours').textContent = addPad(hours);
        rootSelector.querySelector('.js-clock__minutes').textContent = addPad(minutes);
        rootSelector.querySelector('.js-clock__seconds').textContent = addPad(seconds);    
        rootSelector.querySelector('.js-clock__timezone').textContent = showAmPm ? timeZoneName : '';
    
        //
        rootSelector.querySelector('.js-clock__hours').dataset.title =
          declensionNum(hours, ['година', 'години', 'годин']);
        rootSelector.querySelector('.js-clock__minutes').dataset.title =
          declensionNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
        rootSelector.querySelector('.js-clock__seconds').dataset.title =
          declensionNum(seconds, ['секунда', 'секунди', 'секунд']);
    }, 1000);    
    
    };


function stopClock() {
        clearInterval(intervalId);
        };
        
export function onChangeBthClick () {
    if (refs.buttons.querySelector('.js-change').textContent.trim() === 'AM/PM') {
        refs.buttons.querySelector('.js-change').textContent = '24 hours' 
        formatTime = true;
        showAmPm = true;
    } else {
        refs.buttons.querySelector('.js-change').textContent = 'AM/PM' 
        formatTime = false;
        showAmPm = false;
    }
    
};

export function onHideBtnClick() {
    refs.clock.classList.add('is-hidden');
    refs.buttons.querySelector('.js-show').classList.remove('is-hidden');
    refs.buttons.querySelector('.js-hide').classList.add('is-hidden');
    refs.buttons.querySelector('.js-change').classList.add('is-hidden');
    stopClock(); 
};

export function showBtnClic() {
    startClock(refs.clockItem);
    setTimeout(() => {
    refs.clock.classList.remove('is-hidden');
    refs.buttons.querySelector('.js-show').classList.add('is-hidden');
    refs.buttons.querySelector('.js-hide').classList.remove('is-hidden');
    refs.buttons.querySelector('.js-change').classList.remove('is-hidden');
    }, 1000);
};
