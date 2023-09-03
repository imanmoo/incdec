const initValInput = document.querySelector('.initValue');
const initValSetBtn = document.querySelector('.setValBtn');
const body = document.querySelector('body');
const numberPlaceHolder = document.querySelector('.numberPlaceHolder');


export const addHandlerSet = function(handler) {
    initValSetBtn.addEventListener('click' , function(e) {
        e.preventDefault();
        const userInitVal = +initValInput.value;
        handler(userInitVal);
    })
};

export const setNumberPlaceHolder = function(userVal) {
    numberPlaceHolder.innerHTML = userVal;
}

export const triggerSetAlert = function(userVal) {
    const markup = `
    <div class="topalert">
        <p>You set the init number to ${userVal}</p>
    </div>
    `
    
    body.insertAdjacentHTML('afterend' , markup);
    const topAlert = document.querySelector('.topalert');
    setTimeout( function() {
        topAlert.style.display = 'none'
    }
    , 2000)
};




