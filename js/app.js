'use strict';

let username = prompt('whats your name ?');


// console.log("helo " +username);

alert("Helo " + username);

let score = 0;
function q1 () {
    let firstq = prompt('If i told you i\'am Mechanical Engineer Do you think i\'am understod everything in the Cars ?');

firstq = firstq.toLowerCase();
// console.log(firstq); 

if (firstq === 'yes' || firstq === 'y') {
    // console.log("no thats wrong");
    alert("no thats wrong");
} else if (firstq === 'no' || firstq === 'n') {
    // console.log("you are right");
    alert("you are right");
    score++;

}

}
q1 ();

function q2() {
    let secondq = prompt("Now if i till you iam studed for 12 yesr school and 6 year uni do you think iam 30 years old? ")

secondq = secondq.toLowerCase();

if (secondq === 'yes' || secondq === 'y') {
    // console.log("you must try to calculate it again iam 28");
    alert("you must try to calculate it again iam 28");
} else if (secondq === 'no' || secondq === 'n') {

    // console.log("correct iam just 28");
    alert("sure iam just 28");
    score++;
}

}
q2();
let therdq = prompt("do you think that i have work now ?")

therdq = therdq.toLowerCase();

if (therdq === 'yes' || therdq === 'y') {

    // console.log("if i have work i can't take this course");
    alert("if i have work i can't take this course");
} else if (therdq === 'no' || therdq === 'n') {

    // console.log("Unfortunately i don't have");
    alert("Unfortunately i don't have");
    score++;

}
let forthq = prompt("do i look like summer lover? ")

forthq = forthq.toLowerCase();

if (forthq === 'yes' || forthq === 'y') {
    // console.log("wrong anser i hate the summer");
    alert("wrong anser i hate the summer");
} else if (forthq === 'no' || forthq === 'n') {

    // console.log("sure i'm in love with the winter");
    alert("sure i'm in love with the winter");
    score++;
}

let fifthq = prompt("If i told you iam 28 years do you think my care is older than me ?")

fifthq = fifthq.toLowerCase();

if (fifthq === 'yes' || fifthq === 'y') {

    // console.log("yes i have V.Wmodel 1967");
    alert("yes i have V.Wmodel 1967");
    score++;
} else if (fifthq === 'no' || fifthq === 'n') {

    // console.log("wrong anser , i have V.W model 1967");
    alert("wrong anser , i have V.W model 1967");

}
let sixth = "";
let corect = 7;

for (let i = 0; i < 4; i++) {
    sixth = prompt("lets guess number betwen 1-10 that i put it in my minde ? ");
    sixth = parseInt(sixth);



    if (sixth === 7) {
        alert("you are right")
        score++;
        break;

    }
    else if (sixth < corect) {
        alert("too law");

    } else if (sixth > corect) {
        alert("too hight")

    }
    else {
        alert("pleas wright number")
    }
}
alert("my number was 7");

let siventh = "";
let favcar = ['volkswagen', 'bmw', 'tesla', 'toyota'];
car:
for (let i = 0; i < 6; i++) {
    siventh = prompt("let guess one of my favoret cars type ? ");
    siventh = siventh.toLowerCase();
    // console.log(favcar);

    for (let j = 0; j < favcar.length; j++) {
        if (siventh == favcar[j]) {
            alert("you guess it ");
            // console.log(favcar[j]);
            score++;
            break car;

        }
    }
    if (i=== 0) {
        alert ("You still have 5 options")
        
    }else if (i === 1) {
        alert ("You still have 4 options")

    }else if (i === 2) {
        alert ("You still have 3 options")

    }else if (i === 3) {
        alert ("You still have 2 options")

    }else if (i === 4) {
        alert ("You still have 1 options")

    }else if (i === 5) {
        alert ("You dont have more options")

    }

}
alert("my favoret cars is  'volkswagen', 'bmw', 'tesla', 'toyota'");

// console.log(score);
alert("you got score " + score + "/7");

alert("thank you " + username + " for playing this game");