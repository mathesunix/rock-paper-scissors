let humanScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber > 0 && randomNumber <= 0.3) {
        return "rock";
    } else if (randomNumber <= 0.6) {
        return "paper"
    } else {
        return "scissor"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter either rock, paper, or scissor");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}