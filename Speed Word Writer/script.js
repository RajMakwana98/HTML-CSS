const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endGameEl = document.getElementById("end-game-container");
const settingBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// list of words for game
const words = [
  "sign",
  "tense",
  "sample",
  "Victory",
  "ball",
  "computer",
  "surrounding",
  "quick",
  "english",
  "information",
  "typing",
  "future",
  "games",
  "degree",
  "school",
  "score",
  "war",
  "master",
  "camel",
  "snacks",
  "spider",
  "tense",
  "time",
  "dog",
];

// Init word
let randomWord;

//  Init score
let score = 0;

//  Init  time
let time = 10;

// set difficulty to value in medium
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

// set difficulty value

difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

// focus on the text on start
text.focus();

// start counting time
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//Update Time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);

    //endgame
    gameOver();
  }
}

// game over, show end screen
function gameOver() {
  endGameEl.innerHTML = `<h1>Time Over</h1>
  <p> Your Score is: ${score}</p>
  <button onClick="location.reload()">Play Again</button>`;

  endGameEl.style.display = "flex";
}

addWordToDOM();

// Typing
text.addEventListener("input", (e) => {
  const insertText = e.target.value;

  if (insertText === randomWord) {
    addWordToDOM();
    updateScore();

    // clear
    e.target.value = "";

    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 5;
    }
    updateTime();
  }
});

//settings button click
settingBtn.addEventListener("click", () => settings.classList.toggle("hide"));

// setting select
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  console.log(difficulty);

  localStorage.setItem("difficulty", difficulty);
});
