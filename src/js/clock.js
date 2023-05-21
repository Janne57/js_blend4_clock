import {onChangeBthClick} from './helpers/btnFunctions.js'
import {onHideBtnClick} from './helpers/btnFunctions.js'
import {showBtnClic} from './helpers/btnFunctions.js'
import {refs} from './refs.js'

refs.buttons.addEventListener('click', onBtnsClick);

function onBtnsClick (evt) {
    
    if (evt.target.matches('.js-change')) {
        onChangeBthClick();
        return;
    }

    if (evt.target.matches('.js-hide')) {
        onHideBtnClick();
        return;
    }

    showBtnClic();
};
