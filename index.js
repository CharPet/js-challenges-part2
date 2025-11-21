let person = {
  name: "Pepe",
  age: 23,
  country: "Pepeland",
};

function logData() {
  console.log(
    person.name +
      " is " +
      person.age +
      " years old and lives in " +
      person.country
  );
}

logData();

// -----------------------------------------

let age = 15;

if (age < 6) {
  console.log("free");
} else if (age <= 17) {
  console.log("child discount");
} else if (age <= 26) {
  console.log("student discount");
} else if (age <= 66) {
  console.log("full price");
} else {
  console.log("senior citizen discount");
}

// -----------------------------------------

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

for (let i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i]);
}

// -----------------------------------------

let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

console.log(largeCountries2);

largeCountries2.shift();
largeCountries2.pop();
largeCountries2.unshift("China");
largeCountries2.push("Pakistan");

console.log(largeCountries2);

// -----------------------------------------

let dayOfMonth = 31;
let weekday = "Friday";

if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("[Spooky Emoji]");
}

// -----------------------------------------

let hands = ["rock", "paper", "scissor"];

function getHand() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

console.log(getHand());

// -----------------------------------------

let fighters = ["A", "B", "C", "D"];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  let randomFighter1 = fighters[Math.floor(Math.random() * fighters.length)];
  let randomFighter2 = fighters[Math.floor(Math.random() * fighters.length)];

  while (randomFighter1 === randomFighter2) {
    randomFighter2 = fighters[Math.floor(Math.random() * fighters.length)];
  }

  stageEl.textContent = randomFighter1 + " vs " + randomFighter2;

  console.log("click");
});

// -----------------------------------------

let fruits = ["Apple", "Orange", "Apple", "Apple", "Orange"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function fruitSorter() {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "Apple") {
      appleShelf.textContent += "Apple ";
    } else {
      orangeShelf.textContent += "Orange ";
    }
  }
}

fruitSorter();

// -----------------------------------------
