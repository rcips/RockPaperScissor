/** @format */

// app.js

// Complete logic of game inside this function
const game = () => {
    let playerScore = 0
    let computerScore = 0
    let moves = 0

    // Function to
    const playGame = () => {
        const rockBtn = document.querySelector(".rock")
        const paperBtn = document.querySelector(".paper")
        const scissorBtn = document.querySelector(".scissor")
        const playerOptions = [rockBtn, paperBtn, scissorBtn]
        const computerOptions = ["rock", "paper", "scissors"]

        // Function to start playing game
        playerOptions.forEach((option) => {
            option.addEventListener("click", function () {
                const movesLeft = document.querySelector(".movesleft")
                moves++
                movesLeft.innerText = `Moves Left: ${5 - moves}`

                const choiceNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[choiceNumber]

                // Function to check who wins
                winner(this.innerText, computerChoice)

                // Calling gameOver function after 5 moves
                if (moves == 5) {
                    gameOver(playerOptions, movesLeft)
                }
            })
        })
    }

    // Function to decide winner
    const winner = (player, computer) => {
        const result = document.querySelector(".result")
        const playerText = document.querySelector("#playerText")
        const computerText = document.querySelector("#computerText")
        const playerScoreBoard = document.querySelector(".p-count")
        const computerScoreBoard = document.querySelector(".c-count")
        const menu = document.querySelector("#menu")
        let list = document.createElement("p")
        player = player.toUpperCase()
        computer = computer.toUpperCase()
        if (player === computer) {
            playerText.textContent = `Player : ${player}`
            computerText.textContent = `Computer : ${computer}`
            list.innerHTML = ` ${player} vs. ${computer}`
            result.textContent = "Tie"
        } else if (player == "ROCK") {
            if (computer == "PAPER") {
                playerText.textContent = `Player : ${player}`
                computerText.textContent = `Computer : ${computer}`
                list.innerHTML = ` ${player} vs. ${computer}`
                result.textContent = "Computer Won"
                computerScore++
                computerScoreBoard.textContent = computerScore
            } else {
                playerText.textContent = `Player : ${player}`
                computerText.textContent = `Computer : ${computer}`
                list.innerHTML = ` ${player} vs. ${computer}`
                result.textContent = "Player Won"
                playerScore++
                playerScoreBoard.textContent = playerScore
            }
        } else if (player == "SCISSORS") {
            if (computer == "ROCK") {
                playerText.textContent = `Player : ${player}`
                computerText.textContent = `Computer : ${computer}`
                list.innerHTML = ` ${player} vs. ${computer}`
                result.textContent = "Computer Won"
                computerScore++
                computerScoreBoard.textContent = computerScore
            } else {
                playerText.textContent = `Player : ${player}`
                computerText.textContent = `Computer : ${computer}`
                list.innerHTML = ` ${player} vs. ${computer}`
                result.textContent = "Player Won"
                playerScore++
                playerScoreBoard.textContent = playerScore
            }
        } else if (player == "PAPER") {
            if (computer == "SCISSORS") {
                playerText.textContent = `Player : ${player}`
                computerText.textContent = `Computer : ${computer}`
                list.innerHTML = ` ${player} vs. ${computer}`
                result.textContent = "Computer Won"
                computerScore++
                computerScoreBoard.textContent = computerScore
            } else {
                playerText.textContent = `Player : ${player}`
                computerText.textContent = `Computer : ${computer}`
                list.innerHTML = ` ${player} vs. ${computer}`
                result.textContent = "Player Won"
                playerScore++
                playerScoreBoard.textContent = playerScore
            }
        }
        menu.appendChild(list)
    }

    // Function to run when game is over
    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector(".move")
        const result = document.querySelector(".result")
        const reloadBtn = document.querySelector(".restart")

        playerOptions.forEach((option) => {
            option.style.display = "none"
        })

        chooseMove.innerText = "👋Game Over!!"
        movesLeft.style.display = "none"

        if (playerScore > computerScore) {
            result.style.fontSize = "2rem"
            result.innerText = "You Won The Game 😍"
            result.style.color = "blue"
        } else if (playerScore < computerScore) {
            result.style.fontSize = "2rem"
            result.innerText = "You Lost The Game😞"
            result.style.color = "red"
        } else {
            result.style.fontSize = "2rem"
            result.innerText = "Tie"
            result.style.color = "black"
        }
        reloadBtn.innerText = "Restart"
        reloadBtn.style.display = "flex"
        reloadBtn.addEventListener("click", () => {
            window.location.reload()
        })
    }

    //Match History

    // Calling playGame function inside game
    playGame()
}

// Calling the game function
game()
