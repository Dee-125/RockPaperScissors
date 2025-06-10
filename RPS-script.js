let score = JSON.parse(localStorage.getItem('score')) || {wins: 0,losses: 0,ties: 0};
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses},  Ties: ${score.ties}`;
function pickComputerMove(){
const randomNumber = Math.floor(Math.random()*3);

if (randomNumber === 0){
    computerMove = 'rock';
}else if (randomNumber === 1){
    computerMove = 'paper';
}else{
    computerMove = 'scissors';
}
return computerMove;
}

function playGame(playerMove){
let computerMove = pickComputerMove();
let gameResult = '';

if (playerMove === 'rock'){
        if (computerMove === 'rock'){
        gameResult = 'Tie';
    }else if (computerMove === 'paper'){
        gameResult = 'You Lose!';
    }else if(computerMove === 'scissors'){
        gameResult = 'You Win!'
    }
        console.log(gameResult);
}else if (playerMove === 'paper'){
    if (computerMove === 'paper'){
        gameResult = 'Tie';
    }else if (computerMove === 'scissors'){
        gameResult = 'You Lose!';
    }else if(computerMove === 'rock'){
        gameResult = 'You Win!'
    }
        console.log(gameResult);
}else if (playerMove === 'scissors'){
    if (computerMove === 'scissors'){
        gameResult = 'Tie';
    }else if (computerMove === 'rock'){
        gameResult = 'You Lose!';
    }else if(computerMove === 'paper'){
        gameResult = 'You Win!'
    }
        console.log(gameResult);
    }

if (gameResult === 'You Win!'){
    score.wins += 1;
}else if (gameResult === 'You Lose!'){
    score.losses += 1;
}else if(gameResult === 'Tie'){
    score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));
document.querySelector('.playerMove').innerHTML = `You choose: ${playerMove}`;
document.querySelector('.computerMove').innerHTML = `Computer choose: ${computerMove}`;
document.querySelector('.result').innerHTML = gameResult;
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties}`;
    }
function resetScore(){
    score = { wins: 0,losses: 0,ties: 0 };
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.playerMove').innerHTML = ``;
    document.querySelector('.computerMove').innerHTML = ``;
    document.querySelector('.result').innerHTML = ``;
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses},  Ties: ${score.ties}`;
}