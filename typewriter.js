"use strict";
//make shure HTML content is loaded and ready to run
window.addEventListener("DOMContentLoaded", start);
// make a variable getText to tell the computer where to get the text from the html document
const getText = document.querySelector(".typewritten").textContent;
// make an variable for numbers that might change,( so not a const) and make it start at 0 -> from the begginging
let n = 0;

//runs start and clears out the html tag .typewritten
function start() {
  console.log("start");
  document.querySelector(".typewritten").textContent = "";
//run next function
  loop();
}

//run loop and end it
function loop() {
  console.log("loop");
// if the length of the sentence is bigger than n (0) it will start a loop
  if (n < getText.length) {
      //The String object's charAt() method returns a new string consisting 
      //of the single UTF-16 code unit located at the specified offset into the string.
      //So each letters has its number in the sentence,
      //and getText.charAt(n),prints out each letter from the sentence
    document.querySelector(".typewritten").textContent += getText.charAt(n);
    //counts higher so if n is 0 then n++ will be 1 and so on
    n++;
    // how long time should each letter take to be written in milleseconds
    setTimeout(loop, 200);
  }
}


