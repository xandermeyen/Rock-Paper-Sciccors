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

        const computerOptions = ['rock', 'paper', 'sciccors'];

        options.forEach(options=>{
                options.addEventListener('click', function(){
                    const computerNumber = Math.floor(Math.random() * 3);
                    const computerChoise =  computerOptions[computerNumber];
                    
                    compareHands(this.textContent, computerChoise);

                   playerHand.src = `./assets/${this.textContent}.png`; 
                   compareHands.src = `./assets/${computerChoise}.png`;
            });
        });
    };

const compareHands = (playerChoice, computerChoice) =>{
    const winner = document.querySelector('.winner');
    if(playerChoice === computerChoice){
        winner.textContent = 'It is a tie :(';
        return;
    }

    
    if(playerChoice === 'rock'){
        if(computerChoice === 'sciccors' ){
            winner.textContent = 'Player wins';
            return;
        }else{
            winner.textContent = 'AI wins';
            return;
        }
    }

    if(playerChoice === 'paper'){
        if(computerChoice === 'sciccors' ){
            winner.textContent = 'AI wins';
            return;
        }else{
            winner.textContent = 'Player wins';
            return;
        }
    }

    if(playerChoice === 'sciccors'){
        if(computerChoice === 'rock' ){
            winner.textContent = 'AI wins';
            return;
        }else{
            winner.textContent = 'Player wins';
            return;
        }
    }
};

startGame();
playMatch();

};

game();