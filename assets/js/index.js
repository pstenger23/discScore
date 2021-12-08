
let updateScore1 = localStorage.getItem("p1Score");
let updateScore2 = localStorage.getItem("p2Score");
let updateScore3 = localStorage.getItem("p3Score");
let updateScore4 = localStorage.getItem("p4Score");



let currentScoreP1 = updateScore1;
let currentScoreP2 = updateScore2;
let currentScoreP3 = updateScore3;
let currentScoreP4 = updateScore4;

if(updateScore1 === null) {
    currentScoreP1 = 0
}
if(updateScore2 === null) {
    currentScoreP2 = 0
}
if(updateScore3 === null) {
    currentScoreP3 = 0
}
if(updateScore4 === null) {
    currentScoreP4 = 0
}

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

const resetButton = document.getElementById('resetButton');
const addScoreBtn = document.getElementById('addScore');

const scoreList = document.getElementById('scoreList');

p1score.textContent = currentScoreP1;
p2score.textContent = currentScoreP2;
p3score.textContent = currentScoreP3;
p4score.textContent = currentScoreP4;

// console.log(p1score);

addScoreBtn.onclick = function() {
    // console.log('clicking')
    const newScore = document.createElement('li');
    newScore.textContent = currentScoreP1;
    scoreList.appendChild(newScore);
    // console.log(newScore);
    localStorage.setItem('p1Score', 0);
    p1score.textContent = localStorage.getItem('p1Score');
}

scorePlus1.onclick = function(event) {
    currentScoreP1++;
    p1score.textContent = currentScoreP1;
    saveScores();
    // console.log(localStorage.getItem("p1Score"));
};

scoreMinus1.onclick = function(event) {
    currentScoreP1 = currentScoreP1 - 1;
    p1score.textContent = currentScoreP1;
    saveScores();
    // console.log(localStorage.getItem("p1Score"));
};

scorePlus2.onclick = function(event) {
    currentScoreP2++;
    
    p2score.textContent = currentScoreP2;
    saveScores();
}

scoreMinus2.onclick = function(event) {
    currentScoreP2--;
    
    p2score.textContent = currentScoreP2;
    saveScores();
}

scorePlus3.onclick = function(event) {
    currentScoreP3++;
    
    p3score.textContent = currentScoreP3;
    saveScores();
}

scoreMinus3.onclick = function(event) {
    currentScoreP3--;
    
    p3score.textContent = currentScoreP3;
    saveScores();
}

scorePlus4.onclick = function(event) {
    currentScoreP4++;
    
    p4score.textContent = currentScoreP4;
    saveScores();
}

scoreMinus4.onclick = function(event) {
    currentScoreP4--;
    
    p4score.textContent = currentScoreP4;
    saveScores();
}

const saveScores = function() {
    localStorage.setItem("p1Score", currentScoreP1);
    localStorage.setItem("p2Score", currentScoreP2);
    localStorage.setItem("p3Score", currentScoreP3);
    localStorage.setItem("p4Score", currentScoreP4);
}

resetButton.onclick = function(event) {
    console.log('clicking');
    localStorage.setItem("p1Score", 0);
    localStorage.setItem("p2Score", 0);
    localStorage.setItem("p3Score", 0);
    localStorage.setItem("p4Score", 0);
    
    window.location.reload();
    
}







