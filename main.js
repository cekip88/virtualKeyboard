class Keyboard {

    constructor() {
        const _ = this;
        _.body = document.querySelector('.keyboard');
        _.buttons = [
            {keyCode: 192, code: "Backquote", key: "`"},
            {keyCode: 49, code: "Digit1", key: "1"},
            {keyCode: 50, code: "Digit2", key: "2"},
            {keyCode: 51, code: "Digit3", key: "3"},
            {keyCode: 52, code: "Digit4", key: "4"},
            {keyCode: 53, code: "Digit5", key: "5"},
            {keyCode: 54, code: "Digit6", key: "6"},
            {keyCode: 55, code: "Digit7", key: "7"},
            {keyCode: 56, code: "Digit8", key: "8"},
            {keyCode: 57, code: "Digit9", key: "9"},
            {keyCode: 48, code: "Digit0", key: "0"},
            {keyCode: 189, code: "Minus", key: "-"},
            {keyCode: 187, code: "Equal", key: "="},
            {keyCode: 81, code: "KeyQ", key: "q"},
            {keyCode: 87, code: "KeyW", key: "w"},
            {keyCode: 69, code: "KeyE", key: "e"},
            {keyCode: 82, code: "KeyR", key: "r"},
            {keyCode: 84, code: "KeyT", key: "t"},
            {keyCode: 89, code: "KeyY", key: "y"},
            {keyCode: 85, code: "KeyU", key: "u"},
            {keyCode: 73, code: "KeyI", key: "i"},
            {keyCode: 79, code: "KeyO", key: "o"},
            {keyCode: 80, code: "KeyP", key: "p"},
            {keyCode: 219, code: "BracketLeft", key: "["},
            {keyCode: 221, code: "BracketRight", key: "]"},
            {keyCode: 8, code: "Backspace", key: "Bsp"},
            {keyCode: 20, code: "CapsLock", key: "Caps"},
            {keyCode: 65, code: "KeyA", key: "a"},
            {keyCode: 83, code: "KeyS", key: "s"},
            {keyCode: 68, code: "KeyD", key: "d"},
            {keyCode: 70, code: "KeyF", key: "f"},
            {keyCode: 71, code: "KeyG", key: "g"},
            {keyCode: 72, code: "KeyH", key: "h"},
            {keyCode: 74, code: "KeyJ", key: "j"},
            {keyCode: 75, code: "KeyK", key: "k"},
            {keyCode: 76, code: "KeyL", key: "l"},
            {keyCode: 186, code: "Semicolon", key: ";"},
            {keyCode: 222, code: "Quote", key: "'"},
            {keyCode: 13, code: "Enter", key: "Enter"},
            {keyCode: 16, code: "ShiftLeft", key: "Shift"},
            {keyCode: 90, code: "KeyZ", key: "z"},
            {keyCode: 88, code: "KeyX", key: "x"},
            {keyCode: 67, code: "KeyC", key: "c"},
            {keyCode: 86, code: "KeyV", key: "v"},
            {keyCode: 66, code: "KeyB", key: "b"},
            {keyCode: 78, code: "KeyN", key: "n"},
            {keyCode: 77, code: "KeyM", key: "m"},
            {keyCode: 188, code: "Comma", key: ","},
            {keyCode: 190, code: "Period", key: "."},
            {keyCode: 191, code: "Slash", key: "/"},
            {keyCode: 32, code: "Space", key: " "}
        ];
        _.init();
    }

    createButtons(){
        const _ = this;
        for (let i = 0; i < _.buttons.length; i++){
            let button = document.createElement('BUTTON');
            button.setAttribute('data-keyCode',_.buttons[i].keyCode);
            button.setAttribute('data-code',_.buttons[i].code);
            button.textContent = _.buttons[i].key;
            let rows = document.querySelectorAll('.row');
            if(i < 13) rows[0].append(button);
            if(i >= 13 && i < 26) rows[1].append(button);
            if(i >= 26 && i < 39) rows[2].append(button);
            if(i >= 39 && i < 50) rows[3].append(button);
            if(i >= 50) rows[4].append(button);
        }
    }

    createKeyboardTemp(){
        const _ = this;
        for (let i = 0; i < 5; i++){
            let row = document.createElement('DIV');
            row.className = 'row';
            _.body.append(row);
        }
    }

    init(){
        const _ = this;
        _.createKeyboardTemp();
        _.createButtons();
    }
}

let keyboard = new Keyboard();

document.addEventListener('keydown',function (e) {
    console.log(e);
})