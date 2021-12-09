
// let updateScore1 = localStorage.getItem("p1Score");
// let updateScore2 = localStorage.getItem("p2Score");
// let updateScore3 = localStorage.getItem("p3Score");
// let updateScore4 = localStorage.getItem("p4Score");
// let currentScoreP1 = updateScore1;
// let currentScoreP2 = updateScore2;
// let currentScoreP3 = updateScore3;
// let currentScoreP4 = updateScore4;


// SET SCORES
let currentScoreP1 = 0;
let currentScoreP2 = 0;
let currentScoreP3 = 0;
let currentScoreP4 = 0;

// if(updateScore1 === null) {
//     currentScoreP1 = 0
// }
// if(updateScore2 === null) {
//     currentScoreP2 = 0
// }
// if(updateScore3 === null) {
//     currentScoreP3 = 0
// }
// if(updateScore4 === null) {
//     currentScoreP4 = 0
// }


//GET P1 SCORE INCREASE/DECREASE
const scorePlus1 = document.getElementById('p1plus');
const scoreMinus1 = document.getElementById('p1minus');
//GET P2 SCORE INCREASE/DECREASE
const scorePlus2 = document.getElementById('p2plus');
const scoreMinus2 = document.getElementById('p2minus');
//GET P3 SCORE INCREASE/DECREASE
const scorePlus3 = document.getElementById('p3plus');
const scoreMinus3 = document.getElementById('p3minus');
//GET P4 SCORE INCREASE/DECREASE
const scorePlus4 = document.getElementById('p4plus');
const scoreMinus4 = document.getElementById('p4minus');
//GET SCORE NUMBER TO INCREASE/DECREASE
const p1score = document.getElementById('p1score');
const p2score = document.getElementById('p2score');
const p3score = document.getElementById('p3score');
const p4score = document.getElementById('p4score');
//GET RESET BUTTON
const resetButton = document.getElementById('resetButton');
//GET BUTTON TO ADD SCORE TO SCORE CARD
const addScoreBtn1 = document.getElementById('addScore1');
const addScoreBtn2 = document.getElementById('addScore2');
const addScoreBtn3 = document.getElementById('addScore3');
const addScoreBtn4 = document.getElementById('addScore4');
//GET SCORE CARD LIST
const scoreList1 = document.getElementById('scoreList1');
const scoreList2 = document.getElementById('scoreList2');
const scoreList3 = document.getElementById('scoreList3');
const scoreList4 = document.getElementById('scoreList4');
//SET TEXT CONTENT OF SCORES 
p1score.textContent = currentScoreP1;
p2score.textContent = currentScoreP2;
p3score.textContent = currentScoreP3;
p4score.textContent = currentScoreP4;

//UPDATE ARRAY1 WITH LOCALSTORAGE
let savedScore1 = [];
let split = []
const getScore1 = localStorage.getItem('p1score');



// if(getScore1 === null) {
//     savedScore1 = []
// }
// else {
    
//     // console.log(getScore1)
//     for(i =0; i < getScore1.length; i++) {

//         savedScore1.push(getScore1[i]);
//     }
// }

//UPDATE ARRAY2 WITH LOCALSTORAGE
let savedScore2 = [];

const getScore2 = localStorage.getItem('p2score');


if(getScore2 === null) {
    savedScore2 = []
}
else {
    getScore2.toString();
    // console.log(getScore2);
    for(i =0; i < getScore2.length; i++) {
        getScore2.split(',');
        // console.log(getScore2);
        savedScore1.push(getScore2[i]);
    }
}
//UPDATE ARRAY3 WITH LOCALSTORAGE
let savedScore3 = [];
const getScore3 = localStorage.getItem('p3score');
if(getScore3 === null) {
    savedScore3 = [];
}
else {
    for(i = 0; i <= getScore3.length; i += 2) {
        savedScore3.push(getScore3[i]);
    }
}
let savedScore4 = [];

//P1 ADD SCORE TO LIST
addScoreBtn1.onclick = function() {
    const newScore1 = document.createElement('li');

    newScore1.textContent = currentScoreP1;
    // console.log(newScore1);
    scoreList1.appendChild(newScore1);
    
    
    saveScoreStorage1(newScore1);
    
    currentScoreP1 = 0;
    p1score.textContent = currentScoreP1;
}
//P2 ADD SCORE TO LIST
addScoreBtn2.onclick = function() {
    const newScore2 = document.createElement('li');

    newScore2.textContent = currentScoreP2;

    scoreList2.appendChild(newScore2);

    saveScoreStorage2(newScore2);

    currentScoreP2 = 0;
    p1score.textContent = currentScoreP2;
}
//P3 ADD SCORE TO LIST
addScoreBtn3.onclick = function() {
    const newScore3 = document.createElement('li');

    newScore3.textContent = currentScoreP3;

    scoreList3.appendChild(newScore3);

    saveScoreStorage3(newScore3);

    currentScoreP3 = 0;
    p1score.textContent = currentScoreP3;
}
//P4 ADD SCORE TO LIST
addScoreBtn4.onclick = function() {
    const newScore4 = document.createElement('li');

    newScore4.textContent = currentScoreP4;

    scoreList4.appendChild(newScore4);

    saveScoreStorage(newScore4);

    currentScoreP4 = 0;
    p1score.textContent = currentScoreP4;
}
//P1 SCORE INCREASE
scorePlus1.onclick = function(event) {
    currentScoreP1++;
    p1score.textContent = currentScoreP1;

};
//P1 SCORE DECREASE
scoreMinus1.onclick = function(event) {
    currentScoreP1 = currentScoreP1 - 1;
    p1score.textContent = currentScoreP1;
    // saveScores();
    
};
//P2 SCORE INCREASE
scorePlus2.onclick = function(event) {
    currentScoreP2++;
    
    p2score.textContent = currentScoreP2;
    // saveScores();
}
//P2 SCORE DECREASE
scoreMinus2.onclick = function(event) {
    currentScoreP2--;
    
    p2score.textContent = currentScoreP2;
    // saveScores();
}
//P3 SCORE INCREASE
scorePlus3.onclick = function(event) {
    currentScoreP3++;
    
    p3score.textContent = currentScoreP3;
    // saveScores();
}
//P3 SCORE DECREASE
scoreMinus3.onclick = function(event) {
    currentScoreP3--;
    
    p3score.textContent = currentScoreP3;
    // saveScores();
}
//P4 SCORE INCREASE
scorePlus4.onclick = function(event) {
    currentScoreP4++;
    
    p4score.textContent = currentScoreP4;
    // saveScores();
}
//P4 SCORE DECREASE
scoreMinus4.onclick = function(event) {
    currentScoreP4--;
    
    p4score.textContent = currentScoreP4;
    // saveScores();
}

//RESET PAGE FUNCTION
// resetButton.onclick = function(event) {
//     // console.log('clicking');
//     // localStorage.setItem("p1Score", 0);
//     // localStorage.setItem("p2Score", 0);
//     // localStorage.setItem("p3Score", 0);
//     // localStorage.setItem("p4Score", 0);
    
//     window.location.reload();
    
// }
const saveScoreStorage1 = function(newScore1) {
    
    savedScore1.push(newScore1.textContent);
    // console.log(savedScore1);
    localStorage.setItem('p1score', savedScore1);
    
}
const saveScoreStorage2 = function(newScore2) {
    
    savedScore2.push(newScore2.textContent);
    localStorage.setItem('p2score', savedScore2);
    
}
const saveScoreStorage3 = function(newScore3) {
    savedScore3.push(newScore3.textContent);
    localStorage.setItem('p3score', savedScore3);

}
const loadScores = function() {
    console.log(getScore1);
    const loadScore3 = localStorage.getItem('p3score');
    const loadScore4 = localStorage.getItem('p4score');
    if(getScore1 != null) {
        
        savedScore1.push(getScore1.split(','));
        
        //console.log(savedScore1);
        // console.log(getScore1.split(','));
        
        for(i = 0; i<savedScore1[0].length; i++) {
            console.log(savedScore1[0][i]);
            const updateScoreItem1 = document.createElement('li');
            updateScoreItem1.textContent = savedScore1[0][i];
            scoreList1.appendChild(updateScoreItem1);
        }
        
    }

    // if(loadScore2 != null) {

    //     for(i = 0; i < loadScore2.length; i++) {
    //         const reLoadScoresP2 = document.createElement('li');
    //         reLoadScoresP2.textContent = loadScore2[i];
    //         scoreList2.appendChild(reLoadScoresP2);
    //     }
    // }
    if(loadScore3 != null) {
        for(i = 0; i <= loadScore3.length; i += 2) {
            const reLoadScoresP3 = document.createElement('li');
            reLoadScoresP3.textContent = loadScore3[i];
            scoreList3.appendChild(reLoadScoresP3);
        }
    }
    

}
loadScores()









