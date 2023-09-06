// VIEWS HELPER
const numberPlaceHolder = document.querySelector('.numberPlaceHolder');

export const setNumberPlaceHolder = function(userVal) {
    numberPlaceHolder.innerHTML = userVal;
};