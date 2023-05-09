export function rps(shot) {
    const moves = ["rock", "paper", "scissors"]
    let player1 = moves[Math.floor(Math.random() * moves.length)]
    let answer = ""

    if (shot === undefined) {
        return {player: player1};
    }
    
    let play = shot.toLowerCase();

    if (!moves.includes(play)) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    if (player1 === play) {
        answer = "tie"
    }
    else if (play === "rock" && player1 === "scissors" || play === "scissors" && player1 === "paper" || play === "paper" && player1 === "rock") {
        answer = "win"
    }
    else {
        answer = "lose"
    }

    return { player: play,
            player1: player1,
            answer: answer };
}

export function rpsls(shot) {
    const moves = ["rock", "paper", "scissors", "lizard", "spock"]
    let player1 = moves[Math.floor(Math.random() * moves.length)]
    let answer = ""

    if (shot === undefined) {
        return {player: player1};
    }
    
    let play = shot.toLowerCase();

    if (!moves.includes(play)) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    if (player1 === play) {
        answer = "tie"
    }
    else if (play === "rock" && player1 === "scissors" || play === "scissors" && player1 === "paper" || play === "paper" && player1 === "rock") {
        answer = "win"
    }
    else if (play === "rock" && player1 === "lizard" || play === "lizard" && player1 === "spock" || play === "spock" && player1 === "scissors" || play === "scissors" && player1 === "lizard" || play === "lizard" && player1 === "paper" || play === "paper" && player1 === "spock" || play === "spock" && player1 === "rock") {
        answer = "win"
    }
    else {
        answer = "lose"
    }

    return { player: play,
            player1: player1,
            answer: answer };
}