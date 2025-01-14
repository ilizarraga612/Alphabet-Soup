// Author: Isabelle Lizarraga
//Class: CSC 337
//DEscription: This program creates two type sof ciphers that are displayed
// with the users input text. A cesaer cipher and a square cpher. The program uses javascript, css, and html.


// DOM Elements
const inputText = document.getElementById("inputText");
const shiftSlider = document.getElementById("shiftSlider");
const shiftValue = document.getElementById("shiftValue");
const updateSquareButton = document.getElementById("updateSquare");
const cipherSquare = document.getElementById("cipherSquare");
const caesarCipherOutput = document.getElementById("caesarCipherOutput");
const squareCipherOutput = document.getElementById("squareCipherOutput");

// init letter square
let squareLetters = createSquareLetters();
addCipherSquare(squareLetters);

// adjust shift slider value
shiftSlider.addEventListener("input", () => {
  shiftValue.textContent = shiftSlider.value;
  updateCiphers();
});

// update letter square on click
updateSquareButton.addEventListener("click", () => {
  squareLetters = createSquareLetters();
  addCipherSquare(squareLetters);
  updateCiphers();
});

// call updateCiphers for event 
inputText.addEventListener("input", updateCiphers);

// ceaser sipher 
function caesarCipher(text, shift) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      if (char < "A" || char > "Z") return char; 
      const shiftedCharCode = ((char.charCodeAt(0) - 65 + shift) % 26) + 65;
      return String.fromCharCode(shiftedCharCode);
    })
    .join("");
}

// square cipher
function squareCipher(text, square) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      if (char < "A" || char > "Z") return char;
      const charIndex = char.charCodeAt(0) - 65;
      return square[charIndex];
    })
    .join("");
}

// create square cipher
function createSquareLetters() {
  // alphabet without z
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXY"; 
  return alphabet.split("").sort(() => Math.random() - 0.5);
}

// sidebar sipher square
function addCipherSquare(square) {
  //reset current square
  cipherSquare.innerHTML = "";
  square.forEach((char) => {
    const cell = document.createElement("div");
    cell.textContent = char;
    cipherSquare.appendChild(cell);
  });
}

// update ciphers output areas
function updateCiphers() {
  const text = inputText.value;
  const shift = parseInt(shiftSlider.value);
  caesarCipherOutput.value = caesarCipher(text, shift);
  squareCipherOutput.value = squareCipher(text, squareLetters);
}