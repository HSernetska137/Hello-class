const prompt = require("readline-sync");
const { startQuiz } = require("./quiz");
const emoji = require("node-emoji");

// Variables to store quiz state 
function displayWelcome() {
    console.log("=".repeat(50));
    console.log("🎬 WELCOME TO THE MOVIE TRIVIA QUIZ! 🎬");
    console.log("=".repeat(50));
    console.log("Test your knowledge of movies and pop culture!");
    console.log("");
}
function startQuizApp() {
    displayWelcome();
    getPlayerName();
    showMainMenu();
}
// Start the quiz application
startQuizApp();
