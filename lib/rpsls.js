export function rps(shot) {
    const moves = ["rock", "paper", "scissors"]
    let opp = moves[Math.floor(Math.random() * moves.length)]
    let result = ""

    if (shot === undefined) {
        return {player: opp};
    }
    
    let play = shot.toLowerCase();

    if (!moves.includes(play)) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    if (opp === play) {
        result = "tie"
    }
    else if (play === "rock" && opp === "scissors" || play === "scissors" && opp === "paper" || play === "paper" && opp === "rock") {
        result = "win"
    }
    else {
        result = "lose"
    }

    return { player: play,
            opponent: opp,
            result: result };
}

export function rpsls(shot) {
    const moves = ["rock", "paper", "scissors", "lizard", "spock"]
    let opp = moves[Math.floor(Math.random() * moves.length)]
    let result = ""

    if (shot === undefined) {
        return {player: opp};
    }
    
    let play = shot.toLowerCase();

    if (!moves.includes(play)) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    if (opp === play) {
        result = "tie"
    }
    else if (play === "rock" && opp === "scissors" || play === "scissors" && opp === "paper" || play === "paper" && opp === "rock") {
        result = "win"
    }
    else if (play === "rock" && opp === "lizard" || play === "lizard" && opp === "spock" || play === "spock" && opp === "scissors" || play === "scissors" && opp === "lizard" || play === "lizard" && opp === "paper" || play === "paper" && opp === "spock" || play === "spock" && opp === "rock") {
        result = "win"
    }
    else {
        result = "lose"
    }

    return { player: play,
            opponent: opp,
            result: result };
}