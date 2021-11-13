const qwerty = document.querySelectorAll('#qwerty button');
const phrase = document.getElementById('phrase');
const heart = document.querySelectorAll('li > img');
const title = document.querySelector('.title');
const start = document.querySelector('.btn__reset');
const character = document.querySelector('#phrase ul');
const overlay = document.getElementById('overlay');
let missed = 0;


start.addEventListener('click', () => {
    overlay.style.display = 'none';
});

const phrases = 
[
    'Family Guy',
    'Crazy people',
    'American Dad',
    'Off we go',
    'Hey there'
];

function getRandomPhraseAsArray(arr) {
    const randomPhrase = Math.floor(Math.random() * arr.length);
    const characterArray = arr[randomPhrase].split('');
    return characterArray;
}

const randPhrase = getRandomPhraseAsArray(phrases);

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

addPhraseToDisplay(randPhrase);

function checkLetter(button) {
    let letter = document.querySelectorAll('li.letter') && document.querySelectorAll('li:not(.show)');
    let match = null;
    
    for(let i = 0; i < letter.length; i++) {
        if(letter[i].textContent.toUpperCase() === button.textContent.toUpperCase()) {
            letter[i].classList.add('show');
            match = letter[i];
        }
    }
    return match;
}

qwerty.forEach(key => key.addEventListener('click', () => {
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
    let show = document.querySelectorAll('li.show');
    let letters = document.querySelectorAll('li.letter');

    if(show.length === letters.length) {
        overlay.classList.add('win');
        overlay.style.display = 'flex';
        title.textContent = 'Great Job!';
        start.textContent = 'Another Phrase?';
        resetGame();
    } else if(missed == 5) {
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
        title.textContent = 'Better luck next time.';
        start.textContent = 'Try Again?'
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
