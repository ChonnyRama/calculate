const firstOperand = 0;
const operator = '';
const secondOperand = 0;
const calcContainer = document.querySelector(".calc-container");
const calcScreen = document.querySelector(".calc-screen")
const clearButton = document.querySelector(".reset-button");
const equalsButton = document.querySelector(".borg14");
let validButtons = '789÷456x123-0.=+'

function add(...args) {
    return args.reduce((acc,curr) => acc + curr)
}
function subtract (...args) {
    return args.reduce((acc,curr) => acc - curr)
}

function multiply (...args) {
    return args.reduce((acc,curr) => acc * curr)
}

function divide (...args) {
    return args.reduce((acc,curr) => acc/curr)
}

function operate(firstOperand, operator ,secondOperand) {
    switch(operator) {
        case '+':
            return add(firstOperand,secondOperand);
        case '-':
            return subtract(firstOperand,secondOperand);
        case 'x':
            return multiply(firstOperand,secondOperand);
        case '÷':
            return divide(firstOperand,secondOperand);
    }
}

function computeInputs(string) {
    const parts = string.split(/([+÷\-x=/])/).map(item => {
        return isNaN(item) ? item : parseFloat(item);
    })
    parts.pop()
    return operate(...parts)
}

// for (const button of validButtons.split('')) {
//     const newButton = document.createElement("div");
//     const buttonContent = document.createElement("button");
//     newButton.setAttribute("class",`calc-button`);
//     newButton.style.cssText = `flex: 1 0 calc(${percentOfRow}% - 5px);`
//     buttonContent.setAttribute("class",`${button}`);
//     buttonContent.textContent = `${button}`;
//     newButton.appendChild(buttonContent)
//     calcContainer.appendChild(newButton)
// }

function populateCalc(num) {
    const percentOfRow = 100 / num;
    let i = 0;
    for (const button of validButtons.split('')) {
        const newButton = document.createElement("div");
        const buttonContent = document.createElement("button");
        newButton.setAttribute("class",`calc-button`);
        newButton.style.cssText = `flex: 1 0 calc(${percentOfRow}% - 5px);`
        buttonContent.setAttribute("class",`borg${i}`);
        buttonContent.textContent = `${button}`;
        buttonContent.addEventListener('click',(event) => {
            if (event.target.className != 'borg14') {
                // const content = document.createTextNode(`${button}`);
                // calcScreen.appendChild(content);
                calcScreen.textContent += `${button}`
            }else {
                calcScreen.textContent += '='
                calcScreen.textContent += computeInputs(calcScreen.textContent)
            }
        });
        newButton.appendChild(buttonContent)
        calcContainer.appendChild(newButton)
        i++;
    }
    return null;
}

clearButton.addEventListener("click",event => {
    while (calcScreen.firstChild) {
        calcScreen.removeChild(calcScreen.lastChild);
    }
})

populateCalc(4)

