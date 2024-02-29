const display = document.getElementById("display");
function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}