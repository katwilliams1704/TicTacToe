//================================================================================================

// TIC-TAC-TOE		BY KATRINA WILLIAMS

//================================================================================================
// GAME VARIABLES AND ELEMENTS
//============================================

// Key Variables
let currentPlayer = 'X'
let astronaut = 'X'
let alien = 'O'
let playSounds = true
let astronautScore = 0
let alienScore = 0
let board = [
	['', '', ''],
	['', '', ''],
	['', '', ''],
]

// Key Elements
const clickedCells = document.querySelector('.cell')
const playersTurn = document.querySelector('.playersTurn')
const winMessage = document.querySelector('.winningMessage')
const hiddenResultPage = document.getElementById('resultpage') // create before using
const abortMission = document.querySelector('.abortMission')
const musicButton = document.querySelector('.audio-control')
const addPlayerXScore = document.getElementById('playerXScore')
const addPlayerOScore = document.getElementById('playerOScore')
const planetsButton = document.getElementById('.planets') // create before using

// Audio Files
const rocketSound = new Audio('Audio/rocket.wav')
const alienSound = new Audio('Audio/alien.wav')
const buttonSound = new Audio('Audio/low-beep.wav')
const winSound = new Audio('Audio/winner.wav')
const gameMusic = new Audio('Audio/Pleasure.wav')


//==============================================
// STRUCTURE OF THE GAME
//==============================================

// Adds currentPlayers token('X') to clicked cell
let cells = document.querySelectorAll('.cell')
cells.forEach(function(cell){
	cell.addEventListener('click', function(event){
		console.log(typeof event.target.dataset.cellIndex)
		cell.textContent = currentPlayer
		switchPlayer()
		checkForWinner()
		// tokenSound()
		
	})
})
const checkForWinner = () => { // Still need to add draw conditions

	// To check 'X'
	if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {
		alert(messages.playerMode.astronautWin.join(' '))
	} else if
		(cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {
		alert(messages.playerMode.astronautWin.join(' '))
	} else if 
		(cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {
		alert(messages.playerMode.astronautWin.join(' '))
	} else if
		(cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
		alert(messages.playerMode.astronautWin.join(' '))
	} else if 
		(cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
		alert(messages.playerMode.astronautWin.join(' '))
	} else if
		(cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
		alert(messages.playerMode.astronautWin.join(' '))
	} else if 
		(cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
		alert(messages.playerMode.astronautWin.join(' '))
	} else if
		(cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X') {
		alert(messages.playerMode.astronautWin.join(' '))
	// To check 'O'
	} else if 
		(cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') {
		alert(messages.playerMode.alienWin.join(' '))
	} else if
		(cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
		alert(messages.playerMode.alienWin.join(' '))
	} else if 
		(cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
		alert(messages.playerMode.alienWin.join(' '))
	} else if
		(cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
		alert(messages.playerMode.alienWin.join(' '))
	} else if 
		(cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
		alert(messages.playerMode.alienWin.join(' '))
	} else if
		(cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
		alert(messages.playerMode.alienWin.join(' '))
	} else if 
		(cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
		alert(messages.playerMode.alienWin.join(' '))
	} else if
		(cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O') {
		alert(messages.playerMode.alienWin.join(' '))
}}


// Places a player's token and the player's audio when a cell is clicked
// const tokenSound = (player, clickedCell) => {
//     if (currentPlayer === 'X') {
//         clickedCell.classList.add('astronaut')
// 		// player 'X' click sound
//         if (!isPlaying) {
//             rocketSound.play('Audio/rocket.wav') // TEST 
//         } 
//     } else if (currentPlayer === 'O') {
//         clickedBlock.classList.add('alien')
// 		// player 'O' click sound
//         if (!isPlaying) {
//             alienSound.play('Audio/alien.wav') // TEST
//         }
//     } 
// }

// Function for blocking placing of token, over existing token in cell
const handleClick = () => { 
    // check if the block is filled
    if (clickedCells.innerHTML === '') {     
        // check if there is a winner/a tie
        if (checkForWinner(clickedCellIndex)) {
            showResult()
            if (playSounds) {
                winSound.play()
            }
        } else {
            switchPlayer()
        }
    }
}

// Alternating players token after each click ========= FIX OVERLAP
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


// End game and show result ========== TO BE ADDED TO HTML AND CSS
const showResult = () => {
	hiddenResultPage.style.display = 'block';
}

// Abort mission / restart 
const restart = () => {
	for (let cell of cells) {
		cell.innerHTML = ''
		cell.classList.remove('astronaut', 'alien')
	}
	indexFilled = {}
}



//======================================================
// Music play and pause controls ======= WONT PAUSE
function audioControl(gameMusic){
	var gameMusic=document.getElementById(gameMusic);
	var isPlaying = true;
	if (!isPlaying){
		isPlaying = true;
		gameMusic.play();
	} 
	else{
		isPlaying = false;
		gameMusic.pause();
	}
}
