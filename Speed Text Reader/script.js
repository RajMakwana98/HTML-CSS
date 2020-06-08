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

  // speak event

  main.appendChild(box);
}
