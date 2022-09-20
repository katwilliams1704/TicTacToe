//================================================================================================

//								TIC-TAC-TOE		BY KATRINA WILLIAMS

//================================================================================================
// GAME VARIABLES, FUNCTIONS & STRUCTURE
//============================================

// Variables
let currentPlayer = 'X'
let astronaut = 'X'
let alien = 'O'
let playSounds = true
let astronautScore = 0
let alienScore = 0
// let firstMove = wins[0]
// let secondMove = wins[1]
// let thirdMove = wins[2]
let board = [
	['', '', ''],
	['', '', ''],
	['', '', ''],
]

// Elements
const blocks = document.querySelectorAll('.block')
const playersTurn = document.querySelector('.playersTurn')
const winMessage = document.querySelector('.winningMessage')
const hiddenResultPage = document.getElementById('resultpage') // remove later?
const abortMission = document.querySelector('.abortMission')
const musicButton = document.querySelector('.audio-control')
const addPlayerXScore = document.getElementById('playerXScore')
const addPlayerOScore = document.getElementById('playerOScore')
const planetsButton = document.getElementById('.planets') // create before using


// Adds currentPlayers token('X') to clicked cell
let cells = document.querySelectorAll('.cell')
cells.forEach(function(cell){
	cell.addEventListener('click', function(event){
		console.log(typeof event.target.dataset.cellIndex)
		cell.textContent = currentPlayer
		switchPlayer()
	})
})

// Places a player's token and the player's audio when a cell is clicked
const placeToken = (player, clickedCell) => {
    if (player === 'astronaut') {
        clickedCell.innerHTML = 'X'
        clickedCell.classList.add('astronaut')
		// Individual player's click sound
        if (playSounds) {
            rocketSound.play('Audio/rocket.wav')
        } 
    } else if (player === 'alien') {
        clickedBlock.innerHTML = 'O'
        clickedBlock.classList.add('alien')
		// Individual player's click sound
        if (playSounds) {
            alienSound.play('Audio/alien.wav')
        }
    }
}

// Alternating players token after each click ========= FIX BUG 
const switchPlayer = () => {
    if (currentPlayer === astronaut) {
        currentPlayer = alien
        playersTurn.innerHTML = 'alien'
    } else {
        currentPlayer = astronaut
        playersTurn.innerHTML = 'astronaut'
    }
}

// Array of boxes that need to be clicked by a player in order to win 
const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

// Result Messages 
const messages = {
	playerMode: {
		astronautWin: [
			'Astronaut wins!',
			'One small step for man, one giant leap for mankind!',
		],
		alienWin: [
			'Alien Wins!',
			'Its an alien invasion!',
		],
		draw: [
			'Its a draw! Begin a new mission?'
		]
	}
}

// check win and return a boolean
function checkForWinner(){
	winningCombinations.forEach(function(combination){
		let check = combination.every(index => cells[index].innertext.trim() === currentPlayer)
		if(check){
			alert(currentPlayer = messages.astronautWin[0, 1])
		}
	})
}


//==========================================
// AUDIO CONTROL
//==========================================
const rocketSound = new Audio('Audio/rocket.wav')
const alienSound = new Audio('Audio/alien.wav')
const buttonSound = new Audio('Audio/low-beep.wav')
const winSound = new Audio('Audio/winner.wav')
const gameMusic = new Audio()





