let awaitingSecretCode = false;

let phrases = [
    "ছি",
    "আস্তাগফিরুল্লাহ",
    "গে নাকি?",
    "ভাই তুই এটাতে শোর.."
];

function appendToDisplay(input) {
    const display = document.getElementById("display");
    display.value += input;
}

function calculate() {
    const display = document.getElementById("display");

    
    

    
    if (display.value === "3434") {
        display.value = "Enter the secret code:";
        
        awaitingSecretCode = true;
        return;
    }
    
    if (awaitingSecretCode) {
        
        
        if (display.value === "Enter the secret code:1") {
            display.value = "Hi! Indrani 💕";
        } else {
            display.value = "get out b!tch";
        }
        awaitingSecretCode = false;
        return;
    }
    
    try {
        display.value = eval(display.value);
    } catch (error) {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        display.value = phrases[randomIndex];
    }
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
    awaitingSecretCode = false; // reset if they clear mid-flow
}
