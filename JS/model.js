export const state = {
    initVal: 0,
};


export const setVal = function (val) {
    if(!val || typeof val === 'string') {
        state.currentVal = state.initVal;
        return;
    }

    state.currentVal = val;
    console.log(state.currentVal)
};

export const addVal = function() {
    state.currentVal = ++state.currentVal;
};

export const minVal = function() {
    state.currentVal = --state.currentVal;
};





