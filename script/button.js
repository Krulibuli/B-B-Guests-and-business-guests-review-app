"use strict";

const buttons1 = document.querySelectorAll(".firstButtons");
const buttons2 = document.querySelectorAll(".secondButtons");
const buttons3 = document.querySelectorAll(".thirdButtons");
let pressed1 = false;
let pressed2 = false;
let pressed3 = false;
console.log(buttons2);
function newFunction1(button) {

    button.addEventListener("click", () => {

        if (pressed1 == false) {
            pressed1 = true;
            button.style.fontWeight = 800;
            button.style.border = "6px solid white";

        }
    });
}
function newFunction2(button) {

    button.addEventListener("click", () => {

        if (pressed2 == false) {
            pressed2 = true;
            button.style.fontWeight = 800;
            button.style.border = "6px solid white";

        }
    });
}
function newFunction3(button) {
    button.addEventListener("click", () => {
        if (pressed3 == false) {
            pressed3 = true;
            button.style.fontWeight = 800;
            button.style.border = "6px solid white";
        }
    });
}
buttons1.forEach(newFunction1);
buttons2.forEach(newFunction2);
buttons3.forEach(newFunction3);
