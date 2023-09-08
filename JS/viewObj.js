
class View {
    initValInput = document.querySelector('.initValue');
    initValSetBtn = document.querySelector('.setValBtn');
    body = document.querySelector('body');
    addBtn = document.querySelector('.btninc');
    minBtn = document.querySelector('.btndec');
    resetBtn = document.querySelector('.btnreset');

    
    addHandlerSet(handler) {
        this.initValSetBtn.addEventListener('click' , (e) => {
            e.preventDefault();
            const userInitVal = +this.initValInput.value;
            handler(userInitVal);
            this.initValInput.value = '';
        });
    };

    triggerSetAlert(userVal) {
        const markup = `
        <div class="topalert">
            <p>You set the init number to ${userVal}</p>
        </div>
        `
        
        this.body.insertAdjacentHTML('afterend' , markup);
        const topAlert = document.querySelector('.topalert');
        setTimeout( function() {
            topAlert.style.display = 'none';
        }
        , 2000)
    };

    addHandlerAdd(handler) {
        this.addBtn.addEventListener('click' , (e) => {
            e.preventDefault();
            handler();
        });
    };

    addHandlerMin(handler) {
        this.minBtn.addEventListener('click' , (e) => {
            e.preventDefault();
            handler();
        });
    };

    addHandlerReset(handler) {
        this.resetBtn.addEventListener('click' , (e) => {
            e.preventDefault();
            handler();
        });
    };

    print(text){
        console.log(text);
    }
};

export default new View();