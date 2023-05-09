export {rps,rpsls};

function rps(shot) {
	// assign opponent shot
	let ans = Math.floor(Math.random(3));
	if (ans == 0) {
		ans = "rock"
	} else if (ans == 1) {
		ans = "paper"
	} else {
		ans = "scissors"
	}
	
	// if called without argument, return only the shot for one player
	if (shot == undefined) {
		return {
			player: ans
		}
	}
	
	// match play argument to ans formatting for comparisons
	let play = shot.toLowerCase();
	
	// make sure it's not lizard or spock
	if (play == "lizard" || play == "spock") {
		console.error("Range error: wrong game, use rock, paper, or scissors!");
	}
	
	// make sure it's rock, paper, or scissors
	if (play != "rock" && play != "paper" && play != "scissors") {
		console.error("Range error: use rock, paper, or scissors!");
		throw new RangeError();
	}
	
	let result;
	if ((play == "rock" && ans == "scissors") || (play == "paper" && ans == "rock") ||(play == "scissors" && ans == "paper")) {
		result = "win";
	} else if (play == ans) {
		result = "tie";
	} else {
		result = "lose";
	}
	
	return {
		player: play,
		opponent: ans,
		result: result
	}
}

function rpsls(shot) {
	// assign ans
	let ans = Math.floor(Math.random(5));
	if (ans == 0) {
		ans = "rock";
	} else if (ans == 1) {
		ans = "paper";
	}else if (ans == 2) {
		ans = "scissors";
	}else if (ans == 3) {
		ans = "lizard";
	}else {
		ans = "spock";
	}
	
	// return oppshot if no argument
	if (shot == undefined) {
		return {
			player: ans
		}
	}
	
	let play = shot.toLowerCase();
	
	if (play != "rock" && play != "paper" && play != "scissors" && play != "lizard" && play != "spock") {
		console.error("Range error: use rock, paper, scissors, lizard, or spock!");
		throw new RangeError();
	}
	
	let result;
	if ((play == "scissors" && ans == "paper") || (play == "paper" && ans == "rock") || (play == "rock" && ans == "lizard") ||
		(play == "lizard" && ans == "spock") || (play == "spock" && ans == "scissors") || (play == "scissors" && ans == "lizard") ||
		(play == "lizard" && ans == "paper") || (play == "paper" && ans == "spock") || (play == "spock" && ans == "rock") ||
		(play == "rock" && ans == "scissors")) {
		result = "win";
	} else if (play == ans) {
		result = "tie";
	} else {
		result = "lose";
	}
	
	return {
		player: play,
		opponent: ans,
		result: result
	}
}