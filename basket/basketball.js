const homeScore = document.querySelector('#home_score')
const awayScore = document.querySelector('#away_score')
    // const btns = document.querySelector('button');
const away1 = document.querySelector('#away1')
const away2 = document.querySelector('#away2')
const away3 = document.querySelector('#away3')

const home1 = document.querySelector('#home1')
const home2 = document.querySelector('#home2')
const home3 = document.querySelector('#home3')
    // New and game game buttons.
const allbtns = document.querySelectorAll('.score-btn')
const declareWinner = document.querySelector('p')
const newEl = document.querySelector('#new_game')
const endEl = document.querySelector('#end_game')

let timeRemaining = 20;
let counter = 0;
let home = 0
let away = 0

// Add jQuery
var jQueryScript = document.createElement('script')
jQueryScript.setAttribute(
    'src',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
)
document.head.appendChild(jQueryScript)

const timeDisplay = document.querySelector('.message')

let isRunning = false;

const enabledButton = () => {
    allbtns.disabled = true
}

// const convertSeconds = (s) => {
//     let min = (s / 60).toFixed(2);
//     let sec = s % 60;
//     return `${min}:${sec}`
// }

// Declaring a winner
const winner = () => {
        if (homeScore.textContent < awayScore.textContent) {
            declareWinner.textContent = `Away team won by by ${awayScore.textContent}`
        } else {
            if (homeScore.textContent > awayScore.textContent) {
                declareWinner.textContent = `Home team won by ${homeScore.textContent}`
            } else {
                declareWinner.textContent = "It's a tie !"
            }
        }
    }
    //     // New game function:





const newGame = () => {
    $('.score-btn').prop('disabled', false)
        // document.querySelectorAll('.score-btn').disabled = false;
    homeScore.innerHTML = 0
    awayScore.innerHTML = 0
    isRunning = true;

    const timer = setInterval(() => {
        counter += 1;
        let t = (timeRemaining - counter);
        timeDisplay.innerHTML = `Remaining time:${(timeRemaining-counter)}`;
        if (t === 0) {
            timeDisplay.textContent = `Time up: ${t}`;
            winner();
            // endGame();
            clearInterval(timer);
        };

    }, 1000);

    home = 0
    away = 0
}

// if (timeRemaining - counter === 0) {
//     endGame();
// }

const endGame = () => {


    timeDisplay.textContent = 0;
    counter = 0;

    $('.score-btn').prop('disabled', true)
    winner();

    isRunning = false;
}

// }

const checkGameStatus = () => {
        if (isRunning = true) {

            runningTime();
            alert('Game on');
        } else {

            isRunning = false;

            alert('Game over');

        }

    }
    // End game button

// New game button

newEl.onclick = () => {
    newGame()


    home1.onclick = () => {
            home += 1
            homeScore.textContent = home
        }
        // home +2 score increment button
    home2.onclick = () => {
        home += 2
        homeScore.textContent = home
    }

    //  Home +3 score increment button
    home3.onclick = () => {
        home += 3
        homeScore.textContent = home
    }

    //  Away +1 score increment button
    away1.onclick = () => {
        away += 1
        awayScore.textContent = away
            // console.log(away);
    }

    // Away +2 score increment button
    away2.onclick = () => {
        away += 2
        awayScore.textContent = away
    }

    // Away +3 score increment button
    away3.onclick = () => {
        away += 3
        awayScore.textContent = away
    }
}

//  Home +1 score increment button

endEl.onclick = () => {
    endGame()

}