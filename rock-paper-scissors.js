// Check that DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    let rock = document.querySelector('#rock')
    rock.addEventListener('click', function() {
        playRound(rock.dataset.choice, getComputerChoice())
    })

    let paper = document.querySelector('#paper')
    paper.addEventListener('click', function() {
        playRound(paper.dataset.choice, getComputerChoice())
    })

    let scissors = document.querySelector('#scissors')
    scissors.addEventListener('click', function() {
        playRound(scissors.dataset.choice, getComputerChoice())
    })
});


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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Tie!")
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.")
            return "loss"
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.")
            return "win"
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.")
            return "win"
        } else if (computerChoice === "paper") {
            console.log("Tie!")
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.")
            return "loss"
        }
    } else if (humanChoice === "scissors") {
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