function appendToDisplay(input) {
    const display = document.getElementById("display");
    display.value += input;
}

let phrases = [
    "ছি",
    "আস্তাগফিরুল্লাহ",
    "গে নাকি?",
    "ভাই তুই এটাতে শোর.."
];



function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } 
    catch(error) {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        display.value = phrases[randomIndex];
    }
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}