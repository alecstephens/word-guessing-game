const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const heart = document.querySelectorAll('li > img');
let missed = 0;

const start = document.getElementById('overlay');
start.addEventListener('click', () => {
    start.style.display = 'none';
});

const phrases = 
[
    'awkward',
    'numbskull',
    'bagpipes',
    'bikini',
    'jackpot'
];

function getRandomPhraseAsArray(arr) {
    const randomPhrase = Math.floor(Math.random() * arr.length);
    return arr[randomPhrase].split("");
}

const randPhrase = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
    for(let i = 0; i < arr.length; i++) {
        const character = document.querySelector('#phrase ul');
        const li = document.createElement('li');

        if(arr[i] !== '') {
            li.classList.add('letter');
            li.textContent = arr[i];
        } else {
            li.classList.add('space');
        }
        character.appendChild(li);
    }
}

addPhraseToDisplay(randPhrase);

function checkLetter(button) {
    const letter = document.getElementsByClassName('letter');
    let match = null;
    
    for(let i = 0; i < letter.length; i++) {
        if(letter[i].textContent.toUpperCase() === button.textContent.toUpperCase()) {
            letter[i].classList.add += 'show';
            match = letter[i];
        }
    }
    return match;
}

    qwerty.addEventListener('click', (e) => {
        qwerty.classList.add = 'chosen';
        let found = checkLetter(qwerty);

        if(found === null) {
            heart[missed].src = 'images/lostHeart.png';
            missed += 1;
        }
        
    });
