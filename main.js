class Keyboard {constructor() {const _ = this;
        _.body = document.querySelector('.keyboard');
        _.area = document.querySelector('#input');
        _.lang = 'en';
        _.shift = false;
        _.caps = false;
        _.buttons = {'Backquote': {key: "`", 'shift': '~'},
            'Digit1': {key: "1", 'shift': '!'},
            'Digit2': {key: "2", 'shift': '@', 'ruShift': '"'},
            'Digit3': {key: "3", 'shift': '#', 'ruShift': '№'},
            'Digit4': {key: "4", 'shift': '$', 'ruShift': ';'},
            'Digit5': {key: "5", 'shift': '%'},
            'Digit6': {key: "6", 'shift': '^', 'ruShift': ':'},
            'Digit7': {key: "7", 'shift': '&', 'ruShift': '?'},
            'Digit8': {key: "8", 'shift': '*'},
            'Digit9': {key: "9", 'shift': '('},
            'Digit0': {key: "0", 'shift': ')'},
            'Minus': {key: "-", 'shift': '_'},
            'Equal': {key: "=", 'shift': '+'},
            'KeyQ': {key: "q", ruKey: 'й'},
            'KeyW': {key: "w", ruKey: 'ц'},
            'KeyE': {key: "e", ruKey: 'у'},
            'KeyR': {key: "r", ruKey: 'к'},
            'KeyT': {key: "t", ruKey: 'е'},
            'KeyY': {key: "y", ruKey: 'н'},
            'KeyU': {key: "u", ruKey: 'г'},
            'KeyI': {key: "i", ruKey: 'ш'},
            'KeyO': {key: "o", ruKey: 'щ'},
            'KeyP': {key: "p", ruKey: 'з'},
            'BracketLeft': {key: "[", 'shift': ': {', ruKey: 'х'},
            'BracketRight': {key: "]", 'shift': '}', ruKey: 'ъ'},
            'Backspace': {key: "Bsp"},
            'CapsLock': {key: "Caps"},
            'KeyA': {key: "a", ruKey: 'ф'},
            'KeyS': {key: "s", ruKey: 'ы'},
            'KeyD': {key: "d", ruKey: 'в'},
            'KeyF': {key: "f", ruKey: 'а'},
            'KeyG': {key: "g", ruKey: 'п'},
            'KeyH': {key: "h", ruKey: 'р'},
            'KeyJ': {key: "j", ruKey: 'о'},
            'KeyK': {key: "k", ruKey: 'л'},
            'KeyL': {key: "l", ruKey: 'д'},
            'Semicolon': {key: ";", 'shift': ':', ruKey: 'ж'},
            'Quote': {key: "'", 'shift': '"', ruKey: 'э'},
            'Enter': {key: "Enter"},
            'ShiftLeft': {key: "Shift"},
            'KeyZ': {key: "z", ruKey: 'я'},
            'KeyX': {key: "x", ruKey: 'ч'},
            'KeyC': {key: "c", ruKey: 'с'},
            'KeyV': {key: "v", ruKey: 'м'},
            'KeyB': {key: "b", ruKey: 'и'},
            'KeyN': {key: "n", ruKey: 'т'},
            'KeyM': {key: "m", ruKey: 'ь'},
            'Comma': {key: ",", 'shift': '<', ruKey: 'б'},
            'Period': {key: ".", 'shift': '>', ruKey: 'ю'},
            'Slash': {key: "/", 'shift': '?', ruKey: '.', 'ruShift': ','},
            'Lang': {key: "Ru", ruKey: 'En'},
            'Space': {key: " "},
            'ArrowLeft': {key: "<"},
            'ArrowRight': {key: ">"}
    };
        _.init();
    }

    k_key_light(code){
        let btn = document.querySelector(`.${code}`);
        if (btn && !btn.classList.contains('ShiftLeft') && !btn.classList.contains('CapsLock') && !btn.classList.contains('Lang')){
            if (!btn.classList.contains('active')) btn.classList.add('active');
            setTimeout(function () {
                btn.classList.remove('active')
            },250)
        }
    }
    buttonAction(code) {
        const _ = this;
        let button = _.buttons[code];
        if (!button) return;
        let key = button.key;

        if (code === 'ArrowLeft') {

        } else if (code === 'ArrowRight') {

        } else if (key === 'Bsp'){
            _.area.value = _.area.value.substring(0,_.area.value.length - 1);
        } else if (key === 'Ru') {
            _.lang === 'en' ? _.lang = 'ru' : _.lang = 'en';
            document.querySelector(`.Lang`).classList.toggle('active');
        } else if (key === 'Shift'){
            _.shift = !_.shift;
            document.querySelector(`.${code}`).classList.toggle('active');
        } else if (key === 'Caps'){
            _.caps = !_.caps;
            document.querySelector(`.${code}`).classList.toggle('active');
        } else if (key === 'Enter') {
            let symbol = `\n`;
            _.area.value += symbol;
        } else if (_.lang === 'ru') {
            let symbol = button.ruKey ? button.ruKey : button.key;
            if (_.shift && button.ruShift) symbol = button.ruShift;
            else if (_.shift && button.shift) symbol = button.shift;
            _.area.value += symbol;
        } else {
            let symbol = (_.shift && button.shift) ? button.shift : key;
            symbol = (_.shift || _.caps) ? symbol.toUpperCase() : symbol;
            _.area.value += symbol;
        }
        _.area.focus();
        _.k_key_light(code);
    }
    keyBoardHandlers(){
        const _ = this;
        document.querySelectorAll('.keyboard button').forEach(function (button) {
            button.addEventListener('click',function (e) {
                let code = button.className;
                code = code.split(' ')[0];
                _.buttonAction(code);
            });
        });
        _.area.addEventListener('keydown',function (e) {
            if (_.buttons[e.code]) e.preventDefault();
            _.buttonAction(e.code);
        });
    }



    createButtons(){
        const _ = this;
        let i = 0;
        for (let code in _.buttons){
            let button = document.createElement('BUTTON');
            button.className = code;
            button.textContent = _.buttons[code]['key'];
            let rows = document.querySelectorAll('.row');
            if(i < 13) rows[0].append(button);
            if(i >= 13 && i < 26) rows[1].append(button);
            if(i >= 26 && i < 39) rows[2].append(button);
            if(i >= 39 && i < 50) rows[3].append(button);
            if(i >= 50) rows[4].append(button);
            i++;
        }
    }
    createKeyboardTemp(){
        const _ = this;
        for (let i = 0; i < 5; i++){let row = document.createElement('DIV');
            row.className = 'row';
            _.body.append(row);
        }
    }

    init(){
        const _ = this;
        _.createKeyboardTemp();
        _.createButtons();
        _.keyBoardHandlers();
    }
}

let keyboard = new Keyboard();
