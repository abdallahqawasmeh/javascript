let username = prompt("Enter your username:");
let attempts = 0;
const maxAttempts = 5;
let correctPassword = "123";

while (attempts < maxAttempts) {
    let password = prompt("Enter your password:");
    if (password === correctPassword) {
        alert("Welcome,"+ username+"!");
        break;
    } else {
        attempts++;
        if (attempts === maxAttempts) {
            alert("Please try again later.");
        } else {
            alert("Incorrect password. You have " + (maxAttempts - attempts) + " attempts left.");

        }
    }
}
