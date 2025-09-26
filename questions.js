// function to creat/reset a quiz
function createQuizState (){
    return {
        currentQuestion:[],
        userAnswer: [],
        score: 0,
        totalPossiblePoints: 0,
        playerName: " ",
        quizHistory: []
    };