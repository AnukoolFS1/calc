let expression = '';
let expression1 = null;
let typehistory = '';
let totalHis = '';
let operator = '';

const operatorAction = () => {
    if (expression1 === null) {
        expression1 = parseFloat(expression);
    } else {
        expression = parseFloat(expression)
        switch (operator) {
            case '+':
                expression1 += expression;
                break;
            case '-':
                expression1 -= expression;
                break;
            case 'x':
                expression1 *= expression;
                break;
            case '/':
                expression1 /= expression;
                break;
            case '^':
                expression1 **= expression;
                break;
        }
    }
}

function shownum() {
    document.getElementById('type').innerHTML = expression;
}
function updatehistory() {
    document.getElementById('typehistory').innerHTML = typehistory
}
// function clearhistory() {
//     typehistory = '';
//     expression = '';
//     expression1 = '';
//     document.getElementById('type').innerHTML = expression;
//     document.getElementById('typehistory').innerHTML = typehistory;
// }
const equalHistory = () => {
    totalHis = typehistory;
    document.getElementById()
}
const nine = () => {
    expression += '9';
    shownum();
    updatehistory();
}
const eight = () => {
    expression += '8';
    shownum();
    updatehistory();
}
const seven = () => {
    expression += '7';
    shownum();
    updatehistory();
}
const six = () => {
    expression += '6';
    shownum();
    updatehistory();
}
const five = () => {
    expression += '5';
    shownum();
    updatehistory();
}
const four = () => {
    expression += '4';
    shownum();
    updatehistory();
}
const three = () => {
    expression += '3';
    shownum();
    updatehistory();
}
const two = () => {
    expression += '2';
    shownum();
    updatehistory();
}
const one = () => {
    expression += '1';
    shownum();
    updatehistory();
}
const zero = () => {
    expression += '0';
    shownum();
    updatehistory();
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case '9':
        nine();
        break;
        case '8':
        eight();
        break;
        case '7':
        seven();
        break;
        case '6':
        six();
        break;
        case '5':
        five();
        break;
        case '4':
        four();
        break;
        case '3':
        three();
        break;
        case '2':
        two();
        break;
        case '1':
        one();
        break;
        case '0':
        zero();
        break;
        case '.':
        float();
        break;
        case '+':
        add();
        break;
        case '-':
        minus();
        break;
        case '*':
        into();
        break;
        case '/':
        divide();
        break;
        case '^':
        power();
        break;
        case 'Backspace':
        bkspc();
        break;
        case 'Escape':
        clearall();
        break;
        case 'Enter':
        equal();
        break;

    }
});


function bkspc() {
    expression = expression.slice(0, -1)
    shownum()
    updatehistory();
}

function clearall() {
    expression = '';
    expression1 = null;
    typehistory = '';
    totalHis = '';
    operator = '';
    shownum()
    updatehistory()
}
const add = () => {
    if (expression === '') {
        switch (typehistory.slice(typehistory.length - 1)) {
            case '+':
                break;
            case '-':
            case 'x':
            case '/':
            case '^':
                typehistory = typehistory.slice(0, -1);
                typehistory += '+';
                operator = '+';
                updatehistory();
                break;
            default:
        }
    } else {
        typehistory += expression;
        typehistory += '+';
        updatehistory();
        operatorAction();
        operator = '+'
        expression = '';
    }
    shownum()
}
const minus = () => {
    if (expression === '') {
        switch (typehistory.slice(typehistory.length - 1)) {
            case '-':
                break;
            case '+':
            case 'x':
            case '/':
            case '^':
                typehistory = typehistory.slice(0, -1);
                typehistory += '-';
                operator = '-';
                updatehistory();
                break;
            default:
        }
    } else {
        typehistory += expression;
        typehistory += '-';
        updatehistory();
        operatorAction();
        operator = '-'
        expression = '';
    }
    shownum()
}
const into = () => {
    if (expression === '') {
        switch (typehistory.slice(typehistory.length - 1)) {
            case 'x':
                break;
            case '-':
            case '+':
            case '/':
            case '^':
                typehistory = typehistory.slice(0, -1);
                typehistory += 'x';
                operator = 'x';
                updatehistory();
                break;
            default:
        }
    } else {
        typehistory += expression;
        typehistory += 'x';
        updatehistory();
        operatorAction();
        operator = 'x'
        expression = '';
    }
    shownum()
}
const divide = () => {
    if (expression === '') {
        switch (typehistory.slice(typehistory.length - 1)) {
            case '/':
                break;
            case '-':
            case 'x':
            case '+':
            case '^':
                typehistory = typehistory.slice(0, -1);
                typehistory += '/';
                operator = '/';
                updatehistory();
                break;
            default:
        }
    } else {
        typehistory += expression;
        typehistory += '/';
        updatehistory();
        operatorAction();
        operator = '/'
        expression = '';
    }
    shownum()
}

const power = () => {
    if (expression === '') {
        switch (typehistory.slice(typehistory.length - 1)) {
            case '^':
                break;
            case '-':
            case 'x':
            case '/':
            case '+':
                typehistory = typehistory.slice(0, -1);
                typehistory += '^';
                operator = '^';
                updatehistory();
                break;
            default:
        }
    } else {
        typehistory += expression;
        typehistory += '^';
        updatehistory();
        operatorAction();
        operator = '^'
        expression = '';
    }
    shownum()
}

const float = () => {
    if (!expression.includes('.')) {
        expression += '.';
        shownum();
    }
}

const equal = () => {
    typehistory += expression;
    updatehistory();
    operatorAction();
    document.getElementById('type').innerHTML = expression1;
    expression1 = null;
    expression = '';
    typehistory = '';
}