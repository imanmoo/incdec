import * as model from './model.js';
import * as view from './view.js';

// console.log(model);

const controlSet = function(input) {
    model.setVal(input);
    view.triggerSetAlert(input);
    view.setNumberPlaceHolder(input);
}

const init = function() {
    view.addHandlerSet(controlSet);
}

init();