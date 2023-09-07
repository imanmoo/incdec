const initValInput = document.querySelector('.initValue');
const initValSetBtn = document.querySelector('.setValBtn');
const body = document.querySelector('body');
const addBtn = document.querySelector('.btninc');
const minBtn = document.querySelector('.btndec');
const resetBtn = document.querySelector('.btnreset');


export const addHandlerSet = function(handler) {
    initValSetBtn.addEventListener('click' , function(e) {
        e.preventDefault();
        const userInitVal = +initValInput.value;
        handler(userInitVal);
        initValInput.value = '';
    });
};

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

// Increment BTN

export const addHandlerAdd = function(handler) {
    addBtn.addEventListener('click' , function(e) {
        e.preventDefault();
        handler();
    });
};


// Decrement BTN


export const addHandlerMin = function(handler) {
    minBtn.addEventListener('click' , function(e) {
        e.preventDefault();
        handler();
    });
};

// Reset BTN

export const addHandlerReset = function(handler) {
    resetBtn.addEventListener('click' , function(e) {
        e.preventDefault();
        handler();
    });
};

