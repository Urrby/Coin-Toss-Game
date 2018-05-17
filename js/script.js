let playerChoice, computerChoice, randomThrow;
let score = [0,0];
let throwBtn = document.querySelector(".throw");
let headsBtn = document.querySelector(".heads");
let tailsBtn = document.querySelector(".tails");
let randomBtn = document.querySelector(".rndBtn");
let coin = document.querySelector(".coin");
let scorePlayer = document.querySelector(".number_1");
let scoreComputer = document.querySelector(".number_2");
let playerChoiceLable = document.querySelector(".player_choice_label");
let computerChoiceLable = document.querySelector(".computer_choice_label");
let rightSide = document.querySelector(".right_side");
let winnerLable = document.querySelector(".winner");
let newGame = document.querySelector(".new_game");
let active = document.querySelector(".active");

function randomNumber (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function UIreset () {
	document.querySelector(".winner").style.display = "none";
	document.querySelector(".left_top").classList.add("active")
	document.querySelector(".left_top").classList.add("active")
	document.querySelector(".left_bottom").classList.remove("active")
	document.querySelector(".right_side").classList.remove("active")
}

function gameReset () {
	UIreset();
	score = [0, 0]
	scorePlayer.textContent = score[0];
	scoreComputer.textContent = score[1];
	throwBtn.disabled = false;
	headsBtn.disabled = false;
	tailsBtn.disabled = false;
	randomBtn.disabled = false;
	playerChoiceLable.textContent = "";
	computerChoiceLable.textContent = "";
}

function winner () {
	document.querySelector(".winner").style.display = "block";
	coin.style.display = "none";
}

function scoring () {
	if (playerChoice === randomThrow) {
		score[0]++;
		scorePlayer.textContent = score[0];
		console.log("Player won the round!")
	} else if (computerChoice === randomThrow) {
		score[1]++;
		scoreComputer.textContent = score[1];
		console.log("Computer won the round!")
	} else if (playerChoice === randomThrow && computerChoice === randomThrow) {
		console.log("Its a tie!")
	} else {
		score[0]--;
		score[1]--;
		scorePlayer.textContent = score[0];
		scoreComputer.textContent = score[1];
		console.log("You both suck!")
	}
	
	if (score[0] === 3) {
		throwBtn.disabled = true;
		headsBtn.disabled = true;
		tailsBtn.disabled = true;
		randomBtn.disabled = true;
		winnerLable.textContent = "Player is the WINNER!"
		winner();
		console.log("Player WON!")
	} else if(score[1] === 3) {
		console.log("Computer WON!");
		throwBtn.disabled = true;
		headsBtn.disabled = true;
		tailsBtn.disabled = true;
		randomBtn.disabled = true;
		winnerLable.textContent = "Computer is the WINNER!"
		winner();
	}
}


function headsButtonAction () {
	UIreset();
	playerChoice = 1;
	playerChoiceLable.textContent = "Heads";
	console.log(playerChoice);
	document.querySelector(".left_top").classList.remove("active")
	document.querySelector(".left_bottom").classList.add("active")
	document.querySelector(".right_side").classList.remove("active")
}

function tailsButtonAction () {
	UIreset();
	playerChoice = 2;
	playerChoiceLable.textContent = "Tails";
	console.log(playerChoice);
	document.querySelector(".left_top").classList.remove("active")
	document.querySelector(".left_bottom").classList.add("active")
	document.querySelector(".right_side").classList.remove("active")
}

function randomButtonAction () {
	computerChoice = randomNumber(1, 2);
	if (computerChoice === 1) {
		computerChoiceLable.textContent = "Heads"
	} else {
		computerChoiceLable.textContent = "Tails"
	}
	console.log(computerChoice);
	document.querySelector(".left_top").classList.remove("active")
	document.querySelector(".left_bottom").classList.remove("active")
	document.querySelector(".right_side").classList.add("active")
	
}

function throwButtonAction () {
	randomThrow = randomNumber(1,2);
	coin.src = "./img/" + randomThrow + ".png";
	console.log(randomThrow);
	console.log(coin.src);
	coin.style.display = "block";
	scoring();
	document.querySelector(".left_top").classList.add("active")
	document.querySelector(".left_bottom").classList.remove("active")
	document.querySelector(".right_side").classList.remove("active")
}


UIreset();
headsBtn.addEventListener("click", headsButtonAction);
tailsBtn.addEventListener("click", tailsButtonAction);
randomBtn.addEventListener("click", randomButtonAction);
throwBtn.addEventListener("click", throwButtonAction);
newGame.addEventListener("click", gameReset);


