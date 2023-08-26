
const rockBtn = document.querySelectorAll('.button');
const results = document.querySelector('.results');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const computer = () => {
 const random = Math.random();

 if(random < 0.34){
  return "Rock"
 }

 else if(random < 0.63){
    return "Paper"
 }

 else{
   return "Scissors";
 }
}

const playGame = (event) => {
  
    const playerSelection = event.target.dataset.id;
    let computerSelection = computer();
    let score = 0;
    let score2 = 0;

  
  if(playerSelection === computerSelection){
    results.innerHTML = "its a tie";
    console.log(score++);
  }

  else if(playerSelection === "Rock" && computerSelection === "Paper"){
     results.innerHTML = 'computer wins, paper beats rock'
     score2++;
     
  }

  else if(playerSelection === "Rock" && computerSelection === "Scissors"){
   results.innerHTML = 'Player wins, rock beats scissors'
  }

  else if(playerSelection === "Paper" && computerSelection === "Scissors"){
  results.innerHTML = 'Computer wins, Scissors beats paper'
  }

  else if(playerSelection === "Paper" && computerSelection === "Rock"){
    results.innerHTML = 'Player wins, Paper beats rock'
  }

  else if(playerSelection === "Scissors" && computerSelection === "Paper"){
   results.innerHTML = 'Player wins, Scissors beats paper'
  }

  else if(playerSelection === "Scissors" && computerSelection === "Rock"){
    results.innerHTML ='Computer wins, Rock beats scissors'
  }
 
}


rockBtn.forEach(item => {
 item.addEventListener('click', (e) => {
   playGame(e)
 })
})


 

