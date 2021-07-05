'use strict';

let username = prompt('whats your name ?');


// console.log("helo " +username);

alert("Helo " + username);

// firstq=firstq.toLowerCase();

let firstq = prompt('If i told you i\'am Mechanical Engineer Do you think i\'am understod everything in the Cars ?');

firstq=firstq.toLowerCase(); 
// console.log(firstq); 

switch (firstq) {
    case "yes":
        // console.log("no thats wrong");
        alert("no thats wrong");
        break;
    case "y":
        // console.log("no thats wrong");
        alert("no thats wrong");
        break;
    case "no":
        // console.log("you are right");
        alert("you are right");
        break;
    case "n":
        // console.log("you are right");
        alert("you are right");
        break;

}
let secondq = prompt("Now if i till you iam studed for 12 yesr school and 6 year uni do you think iam 30 years old? " )

secondq=secondq.toLowerCase();


switch (secondq) {
    case "no":
        // console.log("sure iam just 28");
        alert("sure iam just 28");
        break;
    case "n":
        // console.log("sure iam just 28");
        alert("sure iam just 28");
        break;
    case "yes":
        // console.log("you must try to calculate it again iam 28");
        alert("you must try to calculate it again iam 28");
        break;
    case "y":
        // console.log("you must try to calculate it again iam 28");
        alert("you must try to calculate it again iam 28");
        break;

}

let therdq =prompt("do you think that i have work now ?")

therdq=therdq.toLowerCase();


switch (therdq) {
    case "no":
        // console.log("Unfortunately i don't have");
        alert("Unfortunately i don't have");
        break;
    case "n":
        // console.log("Unfortunately i don't have");
        alert("Unfortunately i don't have");
        break;
    case "yes":
        // console.log("if i have work i can't take this course");
        alert("if i have work i can't take this course");
        break;
    case "y":
        // console.log("if i have work i can't take this course");
        alert("if i have work i can't take this course");
        break;

}
let forthq =prompt("do i look like summer lover? ")
 
forthq=forthq.toLowerCase();


switch (forthq) {
    case "no":
        // console.log("sure i'm in love with the winter");
        alert("sure i'm in love with the winter");
        break;
    case "n":
        // console.log("sure i'm in love with the winter");
        alert("sure i'm in love with the winter");
        break;
    case "yes":
        // console.log("wrong anser i hate the summer");
        alert("wrong anser i hate the summer");
        break;
    case "y":
        // console.log("wrong anser i hate the summer");
        alert("wrong anser i hate the summer");
        break;

}

let fifthq =prompt("If i told you iam 28 years do you think my care is older than me ?")


switch (fifthq) {
    case "no":
        // console.log("wrong anser , i have V.W model 1967");
        alert("wrong anser , i have V.W model 1967");
        break;
    case "n":
        // console.log("wrong anser , i have V.W model 1967");
        alert("wrong anser , i have V.W model 1967");
        break;
    case "yes":
        // console.log("yes i have V.Wmodel 1967");
        alert("yes i have V.Wmodel 1967");
        break;
    case "y":
        // console.log("yes i have V.Wmodel 1967");
        alert("yes i have V.Wmodel 1967");
        break;

}

alert("thank you "+ username + " for anser this question"); 



