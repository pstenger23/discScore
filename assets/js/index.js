console.log('here');
currentScoreP1 = 0;
currentScoreP2 = 0;
currentScoreP3 = 0;
currentScoreP4 = 0;

const scorePlus1 = document.getElementById('p1plus');
const scoreMinus1 = document.getElementById('p1minus');

const scorePlus2 = document.getElementById('p2plus');
const scoreMinus2 = document.getElementById('p2minus');

const scorePlus3 = document.getElementById('p3plus');
const scoreMinus3 = document.getElementById('p3minus');

const scorePlus4 = document.getElementById('p4plus');
const scoreMinus4 = document.getElementById('p4minus');

const p1score = document.getElementById('p1score');

console.log(p1score);

scorePlus1.onclick = function(event) {
    currentScore = currentScoreP1 +1;
    console.log(currentScore);
    p1score.textContent = currentScore;
};

scoreMinus1.onclick = function(event) {
    currentScore = currentScoreP1 -1;
    console.log(currentScore);
    p1score.textContent = currentScore;
};

scorePlus2.onclick = function(event) {
    
}







