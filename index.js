let score = 0;

function rule() {
    // let rule = document.getElementById("rule")
    let ruleDetails = document.getElementById("ruleDetails")
    ruleDetails.classList.remove("hidden")
    void ruleDetails.offsetWidth;
    ruleDetails.classList.add("active");

}

function closeRule() {
    let ruleDetails = document.getElementById("ruleDetails")
    ruleDetails.classList.remove("active");

     setTimeout(() => {
    ruleDetails.classList.add("hidden");
  }, 300); 

}

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function handlechoice(userPick) {
    const computerPick = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('game-board').style.display = 'none';
  // Show result screen
  document.getElementById('result-screen').style.display = 'flex';

  const userChoiceDiv = document.getElementById('user-choice');
  userChoiceDiv.className = `result-choice ${userPick}`
  userChoiceDiv.innerHTML = `<img src="rock-paper-scissors-master/images/icon-${userPick}.svg" alt="">`;

    // Set computer's pick
   const houseChoiceDiv = document.getElementById('house-choice');
   houseChoiceDiv.className = `result-choice ${computerPick}`;
   houseChoiceDiv.innerHTML = `<img src="rock-paper-scissors-master/images/icon-${computerPick}.svg" alt="">`;


    //  Option	          Beats
    //  Rock	      Scissors, Lizard
    //  Paper	      Rock, Spock
    //  Scissors	  Paper, Lizard
    //  Lizard	      Spock, Paper
    //  Spock	      Scissors, Rock


   //finalResult
let scoreEl = document.getElementById("score");
// let finalResult = document.getElementById('final-result')

function getWinner(userPick, computerPick) {
  if (userPick === computerPick) {
    return 'DRAW';
  }


  const winsAgainst = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  if (winsAgainst[userPick].includes(computerPick)) {
    score += 2;
    scoreEl.textContent = score;
    return "win";
  } else {
    return "lose";
  }
}

const result = getWinner(userPick, computerPick);

const resultText = document.getElementById("final-result"); // e.g., <p class="result-text"></p>
if (result === "win") {
  resultText.textContent = "YOU WIN";
  document.querySelector(".user-picked").classList.add("winner");
  document.querySelector(".house-picked").classList.remove("winner");

  

} else if (result === "lose") {
  resultText.textContent = "YOU LOSE";
  document.querySelector(".house-picked").classList.add("winner");
  document.querySelector(".user-picked").classList.remove("winner");


} else {
  resultText.textContent = "IT'S A DRAW";
}




}

function playAgain() {
    
    document.getElementById('game-board').style.display = 'block';
  // Show result screen
  document.getElementById('result-screen').style.display = 'none';
}
  
