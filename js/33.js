function $() {
    return document.getElementById('print-box');
}

function show(value) {
    const printValue = $();
    printValue.value = printValue.value + value;
}

function calc() {
    const printValue = $();
    printValue.value = eval(printValue.value);
}

function clean() {
    const printValue = $();
    printValue.value = '';
}

function backspace() {
    const printValue = $();
    printValue.value = printValue.value.slice(0, -1);
}