const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textArea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
  {
    image: "./image/drink.jpg",
    text: "I'm Thirsty",
  },

  {
    image: "./image/food.jpg",
    text: "I'm Hungry",
  },

  {
    image: "./image/tired.jpg",
    text: "I'm tired",
  },

  {
    image: "./image/hurt.jpg",
    text: "I'm Hurt",
  },

  {
    image: "./image/happy.jpg",
    text: "I'm Happy",
  },

  {
    image: "./image/angry.jpg",
    text: "I'm Angry",
  },

  {
    image: "./image/sad.jpg",
    text: "I'm Sad",
  },

  {
    image: "./image/scared.jpg",
    text: "I'm Scared",
  },

  {
    image: "./image/outside.jpg",
    text: "I want to go Outside",
  },
];

data.forEach(createBox);

// create speech boxes
function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
  box.innerHTML = `<img src="${image}" alt="${text}" />
  <p class="info">${text}</p>`;

  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();

    // add active effect
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
  });

  main.appendChild(box);
}

// Init speech synth
const message = new SpeechSynthesisUtterance();

// Store Voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

// set voice
function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Voices changed
speechSynthesis.addEventListener("voiceschanged", getVoices);
// Toggle text box
toggleBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);

// Close Button
closeBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);

//change voice
voicesSelect.addEventListener("change", setVoice);

//Read text button
readBtn.addEventListener("click", () => {
  setTextMessage(textArea.value);
  speakText();
});

getVoices();
