let history = [];

function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    // Показуємо історію в багаторядковому текстовому полі
    if (history.length > 0) {
        document.getElementById("history").value = history.join('\n');
    }
    document.getElementById("result").value = "";
}

function deleteLastChar() {
    const resultField = document.getElementById("result");
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(document.getElementById("result").value);
        // Додаємо новий рядок в історію
        history.push(document.getElementById("result").value + ' = ' + result);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}