import * as model from './model.js';
import * as view from './view.js';
import * as helper from './helper.js';

// console.log(model);

const controlSet = function(input) {
    model.setVal(input);
    view.triggerSetAlert(input);
    helper.setNumberPlaceHolder(input);
};

const controlAdd = function(){
    model.addVal();
    // console.log(model.state.currentVal);
    helper.setNumberPlaceHolder(model.state.currentVal);
};

const controlMin = function(){
    model.minVal();
    helper.setNumberPlaceHolder(model.state.currentVal);
};

const controlReset = function() {
    model.reset();
    helper.setNumberPlaceHolder(model.state.currentVal);
};

const init = function() {
    view.addHandlerSet(controlSet);
    view.addHandlerAdd(controlAdd);
    view.addHandlerMin(controlMin);
    view.addHandlerReset(controlReset);
};

init();