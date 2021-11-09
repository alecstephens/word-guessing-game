const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
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
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    return randomPhrase;
}

function addPhraseToDisplay(arr) {
    
}