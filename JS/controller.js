import * as model from './model.js';
import newView from './viewObj.js';
import * as helper from './helper.js';

console.log(newView)

const controlSet = function(input) {
    model.setVal(input);
    newView.triggerSetAlert(input);
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
    newView.addHandlerSet(controlSet);
    newView.addHandlerAdd(controlAdd);
    newView.addHandlerMin(controlMin);
    newView.addHandlerReset(controlReset);
};

init();