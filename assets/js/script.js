//Set variables
/* var start = document.querySelector("#startBtn") */
let i = 0;
let incorrect = 0;
let correct = 0;

//html sections
let header = document.querySelector("header");
let footer = document.createElement("footer");
let body = document.querySelector("body");
let result = document.createElement("p");
let div = document.querySelector("div");

let bold = document.querySelector("#bold");
let content = document.querySelector("#content");

let highScoresBtn = document.querySelector("#highscores");

//button
let button = document.querySelector(".button");
let submit = document.createElement("button");
let back = document.createElement("button");
let clear = document.createElement("button");
//let startButton = document.querySelector("#startBtn");
let input = document.createElement("input");
let scores = document.querySelector("#score");


let questions = [
    ["The best tool to use for debugging in development is:", "1. terminal", "2. consol.log", "3. variables"],
    ["When a string value is assigned to a veriable it is enclosed with __.", "1. quotes", "2. brackets", "3. curly brackets", "4. parentheses"],
    ["Which is not a JavaScript data type?", "1. number ", "2. object", "3. css ", "4. string "],
    ["The if / else statement is inclosed with _", "1. quotes", "2. brackets", "3. curly brackets", "4. parentheses"],
    ["Which one is not a HTML element", "1. head ", "2. div ", "3. body ", "4. req "],
];

//Set imput box for usser name
playerName = document.getElementById("#initals")
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
// unhide with .querySelectorAll()
//set loop for quesitons with correct answer, store score for correct
function startQuiz() {
    console.log("hi")
    let answers = ["2", "1", "3", "2", "4"];
    if (this.innerHTML !== "Start Quiz") {
        for (i = 0; i < questions.length; i++) {
            console.log(typeof bold);
            console.log(bold);
            //.innerHTML = "";
            let question = document.createElement("h1");
            question.innerHTML = questions[i][0];
            content.appendChild(question);
            content.innerHTML = "";

            for (j = 1; j <= questions.length - 1; j++) {
                let one = document.createElement("button");
                one.classList.add("button");
                one.innerHTML = questions[i][j];
                content.appendChild(one);
                one.addEventListener("click", playerSelect(i, questions[i][j]));

                function playerSelect(i, selection) {
                    if (answers[i].includes(selection)) {
                        correct++;
                        result.innerHTML = "Correct!";
                    }
                    else {
                        incorrect++;
                        result.innerHTML = "Incorrect";
                        if (timeLeft > 10) {
                            timeLeft = timeLeft - 10;
                        }
                        else {
                            timeLeft = 0;
                        }
                    }
                };



                footer.innerHTML = "";
                footer.appendChild(result);
                body.appendChild(footer);



            }
        }

    }
    finished();
    //set if statement for complted quiz with

    function finished() {
        clearInterval(timeInterval);
        timer.innerHTML = "Time: " + timeLeft;
        //bold.innerHTML = "";
        let finish = document.createElement("h1");
        finish.innerHTML = "All done!";
        content.appendChild(finish);

        content.innerHTML = "";
        let score = document.createElement("h2");
        score.innerHTML = "Your final score is " + timeLeft + ".";
        content.appendChild(score);

        div.innerHTML = "";

        let initials = document.createElement("p");
        initials.innerHTML = "Enter initials:";
        div.appendChild(initials);

        div.appendChild(input);

        submit.classList.add("submit");
        submit.innerHTML = "Submit";
        div.appendChild(submit);

        content.appendChild(div);
    }
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

        for (j in scores) {
            let hs = document.createElement("p");
            hs.innerHTML = scores[j][0] + " - " + scores[j][1];
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
        timeLeft = 0;
        timer.innerHTML = "Time: " + timeLeft;

        bold.remove();
        let intro = document.createElement("h1");
        intro.innerHTML = "Coding Quiz Challenge";
        //bold.innerHTML = "";
        bold.appendChild(intro);
        body.appendChild(bold);

        content.remove();
        let directions = document.createElement("h2");
        directions.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoreTime by ten seconds!";
        content.innerHTML = "";
        content.appendChild(directions);

        div.innerHTML = "";
        div.appendChild(button);
        content.appendChild(div);

        body.appendChild(content);
    });
}
