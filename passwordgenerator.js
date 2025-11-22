const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "~",
];

const button = document.querySelector("button");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const passwordLength = document.getElementById("password-length");
const symbols = document.getElementById("symbols");
const numbers = document.getElementById("numbers");

button.addEventListener("click", (event) => {
  password1.textContent = "";
  password2.textContent = "";
  let length = 15;

  if (passwordLength.value !== "") {
    length = parseInt(passwordLength.value);
  }

  for (let i = 0; i < length; i++) {
    password1.textContent +=
      characters[Math.floor(Math.random() * characters.length)];
  }

  for (let i = 0; i < length; i++) {
    password2.textContent +=
      characters[Math.floor(Math.random() * characters.length)];
  }
});

password1.addEventListener("click", (event) => {
  navigator.clipboard.writeText(password1.textContent);
});
