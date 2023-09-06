const initValInput = document.querySelector('.initValue');
const initValSetBtn = document.querySelector('.setValBtn');
const body = document.querySelector('body');
const addBtn = document.querySelector('.btninc');


export const addHandlerSet = function(handler) {
    initValSetBtn.addEventListener('click' , function(e) {
        e.preventDefault();
        const userInitVal = +initValInput.value;
        handler(userInitVal);
    })
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



