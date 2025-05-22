playGame()

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock"
    } else if (choice === 1) {
        return "paper"
    } else if (choice === 2) {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors.")
    return choice
}

function playRound(humanChoice, computerChoice) {
    let choice = humanChoice.toLowerCase();

    if (choice === "rock") {
        if (computerChoice === "rock") {
            console.log("Tie!")
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.")
            return "loss"
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.")
            return "win"
        }
    } else if (choice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.")
            return "win"
        } else if (computerChoice === "paper") {
            console.log("Tie!")
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.")
            return "loss"
        }
    } else if (choice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.")
            return "loss"
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats paper.")
            return "win"
        } else if (computerChoice === "scissors") {
            console.log("Tie!")
        }
    }
    
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let outcome = playRound(humanChoice, computerChoice)

        if (outcome === "win") {
            humanScore += 1
        } else if (outcome === "loss") {
            computerScore +=1
        }
        console.log(`You: ${humanScore} Computer: ${computerScore}`)
    }

    if (humanScore > computerScore) {
        console.log(`You won ${humanScore} to ${computerScore}!`)
    } else if (humanScore < computerScore) {
        console.log(`You lost ${humanScore} to ${computerScore}!`)
    } else {
        console.log(`You tied ${humanScore} to ${computerScore}!`)
    }
    
}