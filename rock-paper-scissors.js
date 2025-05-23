// Check that DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    let rock = document.querySelector('#rock')
    rock.onclick = function() {
            playRound(rock.dataset.choice, getComputerChoice())
        }
    let paper = document.querySelector('#paper')
    paper.onclick = function() {
            playRound(paper.dataset.choice, getComputerChoice())
        }
    let scissors = document.querySelector('#scissors')
    scissors.onclick = function() {
            playRound(scissors.dataset.choice, getComputerChoice())
        }
    document.addEventListener('click', (event) => {
    if (event.target.matches('#reset')) {
        window.location.reload();
    }
});
});

let humanScore = 0;
let computerScore = 0;


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
    let result = document.querySelector('#result')
    let humanScoreDisplay = document.querySelector('#humanScore')
    let computerScoreDisplay = document.querySelector('#computerScore')
    let buttons = document.querySelector('#buttons')

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            result.textContent = "Tie!"
        } else if (computerChoice === "paper") {
            result.textContent = "You lose! Paper beats Rock."
            computerScore += 1
            computerScoreDisplay.textContent = computerScore
        } else if (computerChoice === "scissors") {
            result.textContent = "You win! Rock beats Scissors."
            humanScore += 1
            humanScoreDisplay.textContent = humanScore
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            result.textContent = "You win! Paper beats Rock."
            humanScore += 1
            humanScoreDisplay.textContent = humanScore
        } else if (computerChoice === "paper") {
            result.textContent = "Tie!"
        } else if (computerChoice === "scissors") {
            result.textContent = "You lose! Scissors beats Paper."
            computerScore += 1
            computerScoreDisplay.textContent = computerScore
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            result.textContent = "You lose! Rock beats Scissors."
            computerScore += 1
            computerScoreDisplay.textContent = computerScore
        } else if (computerChoice === "paper") {
            result.textContent = "You win! Scissors beats paper."
            humanScore += 1
            humanScoreDisplay.textContent = humanScore
        } else if (computerChoice === "scissors") {
            result.textContent = "Tie!"
        }
    }
    if (humanScore === 5) {
        result.textContent = `You won ${humanScore} to ${computerScore}!`
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        buttons.innerHTML += "<button id=\"reset\">Reset</button>"
    } else if (computerScore === 5) {
        result.textContent = `You lost ${computerScore} to ${humanScore}!`
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        buttons.innerHTML += "<button id=\"reset\">Reset</button>"
    }

}