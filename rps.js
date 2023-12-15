let userMove = "";
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorBtn = document.getElementById('scissor');
let resetBtn = document.getElementById('reset');

let userWins = 0;
let computerWins = 0;
let ties = 0;
let gamesPlayed = 0;

function getComputerMove() {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
}

function getWinner(userMove, computerMove) {
    if (userMove === computerMove) {
        return "Tie";
    } else if (
        (userMove === "rock" && computerMove === "scissors") ||
        (userMove === "paper" && computerMove === "rock") ||
        (userMove === "scissors" && computerMove === "paper")
    ) {
        return "Win";
    } else {
        return "Loss";
    }
}

function updateGameSummary(result) {
    if (result === "Win") {
        userWins++;
    } else if (result === "Loss") {
        computerWins++;
    } else {
        ties++;
    }

    gamesPlayed++;
    updateSummaryTable();
}

function updateSummaryTable() {
    const winsElement = document.querySelector("table tr:nth-child(2) td:nth-child(1)");
    const lossesElement = document.querySelector("table tr:nth-child(2) td:nth-child(2)");
    const tiesElement = document.querySelector("table tr:nth-child(2) td:nth-child(3)");
    const gamesPlayedElement = document.querySelector("table tr:nth-child(2) td:nth-child(4)");

    winsElement.textContent = userWins;
    lossesElement.textContent = computerWins;
    tiesElement.textContent = ties;
    gamesPlayedElement.textContent = gamesPlayed;
}

function updateGameHistoryTable(userMove, computerMove, result) {
    const historyTable = document.querySelector("table:last-of-type");
    const newRow = historyTable.insertRow(1);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = gamesPlayed;
    cell2.textContent = userMove;
    cell3.textContent = computerMove;
    cell4.textContent = result;
}

rockBtn.addEventListener("click", function () {
    userMove = "rock";
    playGame();
});

paperBtn.addEventListener("click", function () {
    userMove = "paper";
    playGame();
});

scissorBtn.addEventListener("click", function () {
    userMove = "scissors";
    playGame();
});

resetBtn.addEventListener("click", function () {
    // Reset the game state
    userWins = 0;
    computerWins = 0;
    ties = 0;
    gamesPlayed = 0;

    // Clear the tables
    document.querySelectorAll("table td").forEach(function (cell) {
        cell.textContent = 0;
    });

    const historyTable = document.querySelector("table:last-of-type");
    while (historyTable.rows.length > 1) {
        historyTable.deleteRow(1);
    }
});

function playGame() {
    const computerMove = getComputerMove();
    const result = getWinner(userMove, computerMove);

    updateGameSummary(result);
    updateGameHistoryTable(userMove, computerMove, result);
}
