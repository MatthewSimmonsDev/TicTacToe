
// Main Game Logic Section

const globalVariables = {
    turn : 1,
    prompt : "",
    piece : ""
}

// Create game board
const gameBoard = (function () {
    const createGameBoard = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    return createGameBoard;
})()

// Create player factory
const player = (function (player, piece) {
    return {player, piece};
})

// Create players one and two
const createPlayers = (function () {
    const playerOne = player("Player One", "X");
    const playerTwo = player("Player Two", "O");
    return {playerOne, playerTwo};
})()

// Game logic
const gameController = (function () {
    console.log(gameBoard)
    while (globalVariables.turn < 10){
        instructPlayerToPlacePiece();
        
    }
    console.log(gameBoard)
    
})()

function instructPlayerToPlacePiece(){
    if (globalVariables.turn % 2 === 1){
        globalVariables.prompt = window.prompt("X piece select an available location.");
        globalVariables.turn ++;
        globalVariables.piece = "X"
        1
    }
    else if (globalVariables.turn % 2 !== 1){
        globalVariables.prompt = window.prompt("O piece select an available location.");
        globalVariables.turn++
        globalVariables.piece = "O"
        
    }
    
}

function displayGameBoard(){
    let arrIncrementer = 1;
    for (let i = 0; i <= 2; i++){
        for (let j = 0; j <= 2; j++){
            
            if([i][j] != " X " && [i][j] != " O "){
                
                if (i == 0){
                    gameBoard[i][j] = ` ${arrIncrementer} `
                    arrIncrementer++;
                }
                if (i == 1){
                    gameBoard[i][j] = ` ${arrIncrementer} `
                    arrIncrementer++;
                }
                if (i == 2){
                    gameBoard[i][j] = ` ${arrIncrementer} `
                    arrIncrementer++;
                }
            }
            
        }
    }
    console.log(gameBoard);
    
}

function changePromptToPiece(prompt){
    if (prompt === "1"){
        gameBoard[0][0] = ` ${globalVariables.piece} `
    }else
    if (prompt === "2"){
        gameBoard[0][1] = ` ${globalVariables.piece} `
    }else
    if (prompt === "3"){
        gameBoard[0][2] = ` ${globalVariables.piece} `
    }else
    if (prompt === "4"){
        gameBoard[1][0] = ` ${globalVariables.piece} `
    }else
    if (prompt === "5"){
        gameBoard[1][1] = ` ${globalVariables.piece} `
    }else
    if (prompt === "6"){
        gameBoard[1][2] = ` ${globalVariables.piece} `
    }else
    if (prompt === "7"){
        gameBoard[2][0] = ` ${globalVariables.piece} `
    }else
    if (prompt === "8"){
        gameBoard[2][1] = ` ${globalVariables.piece} `
    }else
    if (prompt === "9"){
        gameBoard[2][2] = ` ${globalVariables.piece} `
    }

}

function checkForEndgame(){
    if (globalVariables.turn > 9) {
        //trigger game over
        console.log("Game Over");
        
    }
}

