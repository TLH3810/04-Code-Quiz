//Set variables
/* var start = document.querySelector("#startBtn") */
let i = 0;
let incorrect = 0;
let correct = 0;
let questionNum = 0;
//html sections
let header = document.querySelector("header");
let footer = document.createElement("footer");
let body = document.querySelector("body");
let result = document.createElement("p");
let div = document.querySelector("div");

let bold = document.querySelector("#bold");
let content = document.querySelector("#content");

let highScoresBtn = document.querySelector("#highscores");
let question = document.querySelector("#question");
let ans1Btn = document.querySelector("#ans1Btn");
let ans2Btn = document.querySelector("#ans2Btn");
let ans3Btn = document.querySelector("#ans3Btn");
let ans4Btn = document.querySelector("#ans4Btn");
let ansBtn = document.querySelectorAll("button.ansBtn");
let submit = document.querySelector("#submit");


//button
let button = document.querySelector(".button");
let submitBtn = document.querySelector("#submitBtn");
let back = document.createElement("button");
let clear = document.createElement("button");
//let startButton = document.querySelector("#startBtn");
let input = document.createElement("input");
let scores = document.querySelector("#score");
let highScoresList = [];
let initals = document.querySelector("#initals");
let finishTime = 0;
let gameOver = document.querySelector("#gameOver");


let questions = [
    ["The best tool to use for debugging in development is:", "1. terminal", "2. consol.log", "3. variables","4. debugger"],
    ["When a string value is assigned to a veriable it is enclosed with __.", "1. quotes", "2. brackets", "3. curly brackets", "4. parentheses"],
    ["Which is not a JavaScript data type?", "1. number ", "2. object", "3. css ", "4. string "],
    ["The if / else statement is inclosed with _", "1. quotes", "2. brackets", "3. curly brackets", "4. parentheses"],
    ["Which one is not a HTML element", "1. head ", "2. div ", "3. body ", "4. req "],
];

//Set imput box for usser name
playerName = document.getElementById("#initals");
//Set timer id time
let timer = document.querySelector("#time");
let timeLeft = 100;
let timeInterval;

button.addEventListener("click", startQuiz);
button.addEventListener("click", function () {
    timeLeft = 100;
    timer.innerHTML = "Time: " + timeLeft;
})
button.addEventListener("click", function () {
    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timer.innerHTML = "Time: " + timeLeft;
        } if (timeLeft === 0) {
            finished();
        }
    }, 1000);
});
ansBtn.forEach(but =>{but.addEventListener("click", checkAnswer)});
// unhide with .querySelectorAll()
//set loop for quesitons with correct answer, store score for correct
async function startQuiz() {
    console.log("hi")
    setQuestion(questionNum);
}

//set if statement for complted quiz with
function setQuestion(num) {
    if (num < questions.length) {
        question.textContent = questions[num][0];
        ans1Btn.textContent = questions[num][1];
        ans2Btn.textContent = questions[num][2];
        ans3Btn.textContent = questions[num][3];
        ans4Btn.textContent = questions[num][4];
    } else{
    finished();
}
};
function checkAnswer(event){
    let answers = ["2", "1", "3", "2", "4"];
    if (answers[questionNum] === event.target.value){
        correct++;
        result.innerHTML = "Correct!";
    }
    //(answers[i].includes(selection)) {
    else {
        console.log("mohini");
        incorrect++;
        result.innerHTML = "Incorrect";
        if (timeLeft > 10) {
            timeLeft = timeLeft - 10;
        }
        else {
            timeLeft = 0;
        }
    }
    questionNum = questionNum + 1;
    setQuestion(questionNum);
}

function finished() {
    finishTime = timeLeft;
    content.innerHTML = "";
    scores.innerHTML = "Your final score is " + finishTime + ".";
    content.appendChild(scores);

    
    submitBtn.innerHTML = "Submit";
    content.appendChild(submitBtn);
    gameOver.classList.remove("hide")
}

submitBtn.addEventListener("click", function(event){
    var playerTotal = "name:" + initals.value + " score:" + finishTime;
    console.log(playerTotal);
    highScoresList.push(playerTotal);

});

//funciton for highscores
function highScores() {
    header.remove();
    footer.remove();
    clearInterval(timeInterval);
    timeLeft = 0;
    i = 0;
    correct = 0;
    incorrect = 0;

    content.innerHTML = "";
    div.innerHTML = "";
    ///bold.innerHTML = "";

    let intro = document.createElement("h1");
    intro.innerHTML = "Highscores";
    content.appendChild(intro);
    console.log(highScoresList);
    for (var j = 0; j <highScoresList.length; j++) {
        let hs = document.createElement("p");
        console.log(highScoresList[j])
        hs.innerHTML = highScoresList[j];
        content.appendChild(hs);
    }
    content.appendChild(div);

    back.innerHTML = "Go Back";
    div.appendChild(back);

    clear.innerHTML = "Clear the Highscores";
    div.appendChild(clear);
}

highScoresBtn.addEventListener("click", highScores);
//for all answers answered correctly - display
input.addEventListener("click", function () {
    result.innerHTML = "Correct: " + correct + " Incorrect: " + incorrect;
})
//clear high score
clear.addEventListener("click", function () {
    scores = [];
    content.innerHTML = "";

    let div = document.createElement("div");
    content.appendChild(div);

    back.innerHTML = "Go Back";
    div.appendChild(back);

    clear.innerHTML = "Clear Highscores";
    div.appendChild(clear);
})

//
//Button function that takes the user back to play again
back.addEventListener("click", function () {
    body.appendChild(header);
    timeLeft = 100;
    timer.innerHTML = "Time: " + timeLeft;

    questionNum = 0;
    startQuiz(questionNum);

   /* remove();
    let intro = document.createElement("h1");
    intro.innerHTML = "Coding Quiz Challenge";
    //bold.innerHTML = "";
    appendChild(intro);
    appendChild(bold);

    content.remove();
    let directions = document.createElement("h2");
    directions.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoreTime by ten seconds!";
    content.innerHTML = "";
    content.appendChild(directions);

    div.innerHTML = "";
    div.appendChild(button);
    content.appendChild(div);

    body.appendChild(content); */
});
//}
