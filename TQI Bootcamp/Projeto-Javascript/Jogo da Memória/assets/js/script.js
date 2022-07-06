const CARDS = document.querySelectorAll('.card');
let firstCard, secondCard;
let flippedCard = false;
let lockBoard = false;
// let gameOver = false;

window.addEventListener('DOMContentLoaded', ()=>{
    startGame();
})

function startGame(){
    shuffleCards();
    CARDS.forEach((card) => {
        card.addEventListener('click', flipCard); 
     });
     
}

function shuffleCards(){
    CARDS.forEach((card) => {
        let randomPosition = Math.floor(Math.random()*12);
        card.classList.remove('flip')
        card.style.order = randomPosition;
    })
}


function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!flippedCard){
        flippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    flippedCard = false;
    cardMatch();
}

function cardMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        checkGameOver();
        return;
    }
    unflippedCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflippedCards(){
    lockBoard = true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000)
}

function resetBoard(){
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

}

function checkGameOver(){
    let i = 0;
    CARDS.forEach((card)=>{
        if(card.classList.contains('flip')){
            i++;
        }
    })
    if(i==12){
        setTimeout(()=>{
            gameOver();
        }, 2000)
    }
}

function gameOver(){
    document.querySelector('.game-over').style.visibility = "visible";
}

function restartGame(){
    document.querySelector('.game-over').style.visibility = "hidden";
    startGame();
}

