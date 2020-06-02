const main = document.getElementById("main");
const add_userBtn = document.getElementById("add_user");
const doubleBtn = document.getElementById("double");
const sortBtn = document.getElementById("sort");
const calculate_wealthBtn = document.getElementById("calculate_wealth");

let data = [];

getrandomUser();
getrandomUser();
getrandomUser();

//Fetch Random user and add Money
async function getrandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    Money: Math.floor(Math.random() * 1000000),
  };

  console.log(newUser);
}
