let userscore = 0;
let compscore = 0;
const userscorepar = document.querySelector("#user-score");
const compscorepar = document.querySelector("#Comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const resetButton = document.querySelector("#reset-button");

const genComchoice = () => {
    const option = ["Rock", "Paper", "Scissors"];
    const randNum = Math.floor(Math.random() * 3);
    return option[randNum];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

resetButton.addEventListener("click", () => {
    resetGame();
});

const checkGameOver = () => {
    if (userscore === 10) {
        msg.innerText = "Congratulations! You won the game!";
        msg.style.backgroundColor = "Green";
        wrapUpGame();
    } else if (compscore === 10) {
        msg.innerText = "Oh no! The computer won the game!";
        msg.style.backgroundColor = "Red";
        wrapUpGame();
    }
};

const wrapUpGame = () => {
    choices.forEach((choice) => {
        choice.style.pointerEvents = 'none';
    });
    resetButton.style.display = "block";
};

const resetGame = () => {
    userscore = 0;
    compscore = 0;
    userscorepar.innerText = userscore;
    compscorepar.innerText = compscore;
    msg.innerText = "Play Your Move!";
    msg.style.backgroundColor = "";
    choices.forEach((choice) => {
        choice.style.pointerEvents = 'auto';
    });
    resetButton.style.display = "none";
};

const showWinner = (boo, userch, compch1) => {
    if (boo) {
        userscore++;
        userscorepar.innerText = userscore;
        msg.innerText = `Congratulations! You win. Your ${userch} beats ${compch1}!`;
        msg.style.backgroundColor = "Green";
    } else {
        compscore++;
        compscorepar.innerText = compscore;
        msg.innerText = `Oh no! You lose. ${compch1} beats your ${userch}!`;
        msg.style.backgroundColor = "Red";
    }
    checkGameOver();
};

const playgame = (userchoice) => {
    const compch = genComchoice();

    if (userchoice == compch) {
        msg.innerText = "Match is a draw";
        msg.style.backgroundColor = "#081b3c";
    } else {
        let userWin = true;

        if (userchoice === "Rock") {
            userWin = compch === "Paper" ? false : true;
        } else if (userchoice == "Paper") {
            userWin = compch === "Scissors" ? false : true;
        } else {
            userWin = compch === "Rock" ? false : true;
        }
        showWinner(userWin, userchoice, compch);
    }
};
