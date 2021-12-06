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
const p2score = document.getElementById('p2score');
const p3score = document.getElementById('p3score');
const p4score = document.getElementById('p4score');

p1score.textContent = currentScoreP1;
p2score.textContent = currentScoreP2;
p3score.textContent = currentScoreP3;
p4score.textContent = currentScoreP4;

console.log(p1score);

scorePlus1.onclick = function(event) {
    currentScoreP1 = currentScoreP1 +1;
    // console.log(currentScore);
    p1score.textContent = currentScoreP1;
};

scoreMinus1.onclick = function(event) {
    currentScoreP1 = currentScoreP1 -1;
    // console.log(currentScore);
    p1score.textContent = currentScoreP1;
};

scorePlus2.onclick = function(event) {
    currentScoreP2 = currentScoreP2 + 1;

    p2score.textContent = currentScoreP2;
}

scoreMinus2.onclick = function(event) {
    currentScoreP2 = currentScoreP2 - 1;

    p2score.textContent = currentScoreP2;
}

scorePlus3.onclick = function(event) {
    currentScoreP3 = currentScoreP3 + 1;

    p3score.textContent = currentScoreP3;
}

scoreMinus3.onclick = function(event) {
    currentScoreP3 = currentScoreP3 - 1;

    p3score.textContent = currentScoreP3;
}

scorePlus4.onclick = function(event) {
    currentScoreP4 = currentScoreP4 + 1;

    p4score.textContent = currentScoreP4;
}

scoreMinus4.onclick = function(event) {
    currentScoreP4 = currentScoreP4 - 1;

    p4score.textContent = currentScoreP4;
}







