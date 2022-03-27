const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelectorAll('.player-hand');
        const computerHand = document.querySelectorAll('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

hands.forEach(hand =>{
    hand.addEventListener('animationend', function(){
        this.style.animation = "";
    });
})

        const computerOptions = ['Rock', 'Paper', 'Sciccors'];

        options.forEach(options=>{
                options.addEventListener('click', function(){
                    const computerNumber = Math.floor(Math.random() * 3);
                    const computerChoice =  computerOptions[computerNumber];
                    
                    compareHands(this.textContent, computerChoise);

                   playerHand.src = `./assets/${this.textContent}.png`; 
                   computerHand.src = `./assets/${computerChoice}.png`;

                   playerHand.style.animation = "shakePlayer 2s ease";
                   computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

const computerHand = (playerChoice, computerChoice) =>{
    const winner = document.querySelector('.winner');
    if(playerChoice === computerChoice){
        winner.textContent = 'It is a tie :(';
        return;
    }

    
    if(playerChoice === 'Rock'){
        if(computerChoice === 'Sciccors' ){
            winner.textContent = 'Player wins';
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'AI wins';
            cScore++;
            updateScore();
            return;
        }
    }

    if(playerChoice === 'Paper'){
        if(computerChoice === 'Sciccors' ){
            winner.textContent = 'AI wins';
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'Player wins';
            pScore++;
            updateScore();
            return;
        }
    }

    if(playerChoice === 'Sciccors'){
        if(computerChoice === 'Rock' ){
            winner.textContent = 'AI wins';
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'Player wins';
            pScore++;
            updateScore();
            return;
        }
    }
};

startGame();
playMatch();

};

game();