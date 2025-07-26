let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats rock");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissor") {
            console.log("You win! Rock beats scissor")
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock")
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissor") {
            console.log("You lose! Scissor beats paper");
            computerScore++;
        } else if (humanChoice == "scissor" && computerChoice == "rock") {
            console.log("You lose! Rock beats scissor");
            computerScore++;
        } else if (humanChoice == "scissor" && computerChoice == "paper") {
            console.log("You win! Scissor beats paper");
            humanScore++;
        } else {
            console.log("It's a tie!")
        }
    }

    playRound(humanSelection, computerSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("You lose the game!");
    }
}

playGame();