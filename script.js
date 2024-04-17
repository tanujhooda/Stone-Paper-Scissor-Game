let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const choices = ["stone", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return choices[randomIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw, Play Again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        msg.innerText = `You Win!  Your ${userChoice} beats Computers ${compChoice}`;
        msg.style.backgroundColor = "Green"
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = `You Lose!  Computer ${compChoice} beats Yours ${userChoice}`;
        msg.style.backgroundColor = "Red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    // console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        // game draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "stone") {
            // paper, scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // stone , scissor
            userWin = compChoice === "scissor" ? false : true;
        } else {
            // stone , paper
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});