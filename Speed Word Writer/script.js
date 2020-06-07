const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endGameEl = document.getElementById("end-game");
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

addWordToDOM();

// Event Listeners
text.addEventListener("input", (e) => {
  const insertText = e.target.value;

  if (insertText === randomWord) {
    addWordToDOM();
    updateScore();

    // clear
    e.target.value = "";
  }
});
