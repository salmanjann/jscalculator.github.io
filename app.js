var inputText = "";
var outputText = "0";
var inputTextDom = document.querySelector('.inputText');
var outputTextDom = document.querySelector('.result');
var result = "";
inputTextDom.textContent = "_";

// to toggle dark and light themes
document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
// to toggle buttons active state
const toggleButton = document.querySelector('.theme-toggle-button');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
});

function concatInput(value) {
    if (outputText != "0" && inputText == "") {
        if (value == "+" || value == "-" || value == "/" || value == "*") {
            inputText = result;
            outputText = "0";
        }
    }
    inputText += value;
    inputTextDom.textContent = "";
    for (let i = 0; i < inputText.length; i++) {
        var newSpan = document.createElement("span");
        var newIcon = document.createElement("i");

        if (inputText[i] == "*") {
            newIcon.setAttribute("class", "fa-solid fa-xmark");
        }
        else if (inputText[i] == "/") {
            console.log("heeee");
            newIcon.setAttribute("class", "fa-solid fa-divide");
        }
        else if (inputText[i] == "-") {
            newIcon.setAttribute("class", "fa-solid fa-minus");
        }
        else if (inputText[i] == "+") {
            newIcon.setAttribute("class", "fa-solid fa-plus");
        }
        else
            newSpan.textContent = inputText[i];
        if (inputText[i] == "+" || inputText[i] == "-" || inputText[i] == "/" || inputText[i] == "*") {
            newSpan.setAttribute("class", "blueChar");
            inputTextDom.appendChild(newSpan);
            newSpan.appendChild(newIcon);
        }
        else
            inputTextDom.appendChild(newSpan);
    }
}
function calcResult() {
    if (inputText == "")
        return;
    try {
        result = eval(inputText);
    }
    catch (err) {
        result = "0"
        outputText = result;
        outputTextDom.innerHTML = "Invalid Input";
        inputText = "";
        return;
    }
    outputText = result;
    outputTextDom.innerHTML = result;
    inputText = "";
}

function printSalman() {
    outputTextDom.innerHTML = "Salman Jan"
}
function clearAll() {
    outputTextDom.innerHTML = "0";
    outputText = "0"
    inputTextDom.innerHTML = "_";
    inputText = "";
}
function clearSingleChar() {
    if (inputText == "") {
        // <i class="fa-solid fa-xmark"></i>
        inputTextDom.innerHTML = "_";
        return;
    }
    inputText = inputText.substring(0, inputText.length - 1);
    inputTextDom.textContent = "";
    for (let i = 0; i < inputText.length; i++) {
        var newSpan = document.createElement("span");
        var newIcon = document.createElement("i");
        if (inputText[i] == "*") {
            newIcon.setAttribute("class", "fa-solid fa-xmark");
        }
        else if (inputText[i] == "/") {
            console.log("heeee");
            newIcon.setAttribute("class", "fa-solid fa-divide");
        }
        else if (inputText[i] == "-") {
            newIcon.setAttribute("class", "fa-solid fa-minus");
        }
        else if (inputText[i] == "+") {
            newIcon.setAttribute("class", "fa-solid fa-plus");
        }
        else
            newSpan.textContent = inputText[i];
        if (inputText[i] == "+" || inputText[i] == "-" || inputText[i] == "/" || inputText[i] == "*") {
            newSpan.setAttribute("class", "blueChar");
            inputTextDom.appendChild(newSpan);
            newSpan.appendChild(newIcon);
            return;
        }
        inputTextDom.appendChild(newSpan);
    }
}
