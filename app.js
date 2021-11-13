const qwerty = document.querySelectorAll('#qwerty button');
const phrase = document.getElementById('phrase');
const heart = document.querySelectorAll('li > img');
const title = document.querySelector('.title');
const startButton = document.querySelector('.btn__reset');
const character = document.querySelector('#phrase ul');
const start = document.getElementById('overlay');
let missed = 0;


startButton.addEventListener('click', () => {
    start.style.display = 'none';
});

const phrases = [
    'Family guy',
    'Crazy people',
    'American dad',
    'Off we go',
    'Hey there'
];

function getRandomPhraseAsArray(arr) {
    const randomPhrase = Math.floor(Math.random() * arr.length);
    let characterArray = arr[randomPhrase].split('');
    return characterArray;
}



function addPhraseToDisplay(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== ' ') {
            let classLetter = document.createElement('li');
            classLetter.className = 'letter';
            character.appendChild(classLetter);
            classLetter.innerHTML = arr[i];
        } else {
            let classSpace = document.createElement('li');
            classSpace.className = 'space';
            character.appendChild(classSpace);
            classSpace.innerHTML = arr[i];
        }       
    }
}

const randPhrase = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(randPhrase);

function checkLetter(button) {
    let letter = document.querySelectorAll('li.letter');
    let notShow = document.querySelectorAll('li:not(.show)');
    let combined = letter && notShow;
    let match = null;
    
    for(let i = 0; i < letter.length; i++) {
        if(letter[i].textContent.toLowerCase() === button.textContent.toLowerCase()) {
            letter[i].classList.add('show');
            match = letter[i];
        }
    }
    return match;
}

qwerty.forEach( key => key.addEventListener('click', function () {
    key.className += "chosen";
    let letterFound = checkLetter(key);
    key.setAttribute('disabled', true);
    
    if(letterFound == null){
        heart[missed].src = 'images/lostHeart.png';
        missed += 1;
    }
    checkWin();
}));

function checkWin() {
    let show = document.getElementsByClassName('show');
    let letters = document.getElementsByClassName('letters');

    if(show.length === letters.length) {
        start.classList.add('win');
        start.style.display = 'flex';
        title.textContent = 'Great Job!'
        startButton.textContent = 'Another Phrase?'
        resetGame();
    } else if(missed === 5) {
        start.classList.add('lose');
        start.style.display = 'flex';
        title.textContent = 'Better luck next time.';
        startButton.textContent = 'Try Again?'
        resetGame();
    }
}

function resetGame() {
    missed = 0;

    for(let i = 0; i < qwerty.length; i++) {
        qwerty[i].disabled = false;
        qwerty[i].classList.remove('chosen');
    }

    character.innerHTML = '';
    const newPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(newPhrase);

    for(let i = 0; i < heart.length; i++) {
        heart[i].src = "images/liveHeart.png";
    }
}
