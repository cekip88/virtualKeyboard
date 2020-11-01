class Keyboard {constructor() {const _ = this;
        _.body = document.querySelector('.keyboard');
        _.area = document.querySelector('#input');
        _.position = [];
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
            'BracketLeft': {key: "[", 'shift': '{', ruKey: 'х'},
            'BracketRight': {key: "]", 'shift': '}', ruKey: 'ъ'},
            'Backspace': {key: "Bsp", appointment: 'function'},
            'CapsLock': {key: "Caps", appointment: 'function'},
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
            'Enter': {key: "Enter", appointment: 'function'},
            'ShiftLeft': {key: "Shift", appointment: 'function'},
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
            'Lang': {key: "En", ruKey: 'Ру', appointment: 'function'},
            'Space': {key: " "},
            'ArrowLeft': {key: "<"},
            'ArrowRight': {key: ">"}
    };
        document.querySelector('.hide').addEventListener('click',function (e) {
            _.keyboardHide()
        });
        _.init();
    }

    k_key_light(code){
        let btn = document.querySelector(`.${code}`);
        if (btn && !btn.classList.contains('ShiftLeft') && !btn.classList.contains('CapsLock')){
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

        let strArr = [
            _.area.value.substring(0,_.position[0]),
            _.area.value.substring(_.position[0],_.position[1]),
            _.area.value.substring(_.position[1],_.area.value.length),
        ];

        if (code === 'ArrowLeft') {

            _.position[0]--;
            _.area.setSelectionRange(_.position[0],_.position[0])

        } else if (code === 'ArrowRight') {

            _.position[0]++;
            _.area.setSelectionRange(_.position[0],_.position[0])

        } else if (key === 'Bsp'){

            if (strArr[1].length > 0){
                _.area.value = strArr[0] + strArr[2];
            } else {
                _.area.value = strArr[0].substr(0,strArr[0].length - 1) + strArr[2];
                _.position[0] > 0 ? _.position[0]-- : '';
            }
            _.area.setSelectionRange(_.position[0],_.position[0]);

        } else if (key === 'En') {

            _.lang === 'en' ? _.lang = 'ru' : _.lang = 'en';
            _.k_key_light('Lang')

        } else if (key === 'Shift'){

            _.shift = !_.shift;
            document.querySelector(`.${code}`).classList.toggle('active');

        } else if (key === 'Caps'){

            _.caps = !_.caps;
            document.querySelector(`.${code}`).classList.toggle('active');

        } else if (key === 'Enter') {

            let symbol = `\n`;
            _.area.value = strArr[0] + symbol + strArr[2];
            _.position[0]++; _.position[1]++;
            _.area.setSelectionRange(_.position[0],_.position[0]);

        } else if (_.lang === 'ru') {

            let symbol = button.ruKey ? button.ruKey : button.key;
            if (_.shift && button.ruShift) symbol = button.ruShift;
            else if (_.shift && button.shift) symbol = button.shift;
            _.area.value += symbol;

        } else {

            let symbol = (_.shift && button.shift) ? button.shift : key;
            symbol = (_.shift || _.caps) ? symbol.toUpperCase() : symbol;
            _.area.value = strArr[0] + symbol + strArr[2];
            _.position[0]++; _.position[1]++;
            _.area.setSelectionRange(_.position[0],_.position[0]);

        }

        _.area.focus();
        _.k_key_light(code);
        _.keyBoardButtonsRename(key);

    }
    keyBoardButtonsRename(key){
        const _ = this;
        document.querySelectorAll('.keyboard button').forEach(function (el) {
            let name = el.className.split(' ')[0];

            if (key === 'En'){
                if (_.lang === 'ru'){
                    _.buttons[name].ruKey ? el.textContent = _.buttons[name].ruKey : '';
                    if (_.caps || _.shift){
                        if (!_.buttons[name].appointment) el.textContent = el.textContent.toUpperCase();
                    }
                    if (_.shift && _.buttons[name].ruShift) el.textContent = _.buttons[name].ruShift
                } else {
                    el.textContent = _.buttons[name].key;
                    if (_.caps || _.shift){
                        if (!_.buttons[name].appointment) el.textContent = el.textContent.toUpperCase();
                    }
                    if (_.shift && _.buttons[name].shift) el.textContent = _.buttons[name].shift
                }
            }

            if (key === 'Shift'){
                if (_.shift){
                    if (_.lang === 'en'){
                        _.buttons[name].shift ? el.textContent = _.buttons[name].shift : '';
                    } else if (_.lang === 'ru'){
                        if (_.buttons[name].ruShift) el.textContent = _.buttons[name].ruShift;
                        else if (!_.buttons[name].ruShift && _.buttons[name].shift) el.textContent = _.buttons[name].shift
                    }
                } else {
                    if (_.lang === 'en'){
                        el.textContent = _.buttons[name].key;
                    } else if (_.lang === 'ru'){
                        el.textContent = _.buttons[name].ruKey ? _.buttons[name].ruKey : _.buttons[name].key;
                    }
                }
            }

            if (key === 'Caps' || key === 'Shift'){
                if (_.caps || _.shift){
                    if (!_.buttons[name].appointment) el.textContent = el.textContent.toUpperCase();
                } else {
                    if (!_.buttons[name].appointment) el.textContent = el.textContent.toLowerCase();
                }
            }
        })
    }
    keyBoardHandlers(){
        const _ = this;
        document.addEventListener('mouseup',function (e) {
            _.getPosition();
        });
        document.querySelectorAll('.keyboard button').forEach(function (button) {
            button.addEventListener('click',function (e) {
                let code = button.className;
                code = code.split(' ')[0];
                _.buttonAction(code);
                _.getPosition();
            });
        });
        _.area.addEventListener('keydown',function (e) {
            if (_.buttons[e.code]){
                e.preventDefault();
            }
            _.buttonAction(e.code);
            _.getPosition();
        });
    }

    getPosition() {
        const _ = this;
        let input = document.getElementById('input');
        _.position[0] = input.selectionStart;
        _.position[1] = input.selectionEnd;
    }
    keyboardHide(){
        const _ = this;
        if (!_.body.classList.contains('hidden')){
            _.body.classList.add('hidden');
            document.querySelector('.hide').textContent = 'Show keyboard';
            setTimeout(function (e) {
                _.body.setAttribute('style','display:none');
            },350)
        } else {
            _.body.setAttribute('style','');
            setTimeout(function () {
                _.body.classList.remove('hidden');
            },10);
            document.querySelector('.hide').textContent = 'Hide keyboard';
        }
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
        setInterval(function (e) {
            _.getPosition();
        },100);
    }
}

let keyboard = new Keyboard();




