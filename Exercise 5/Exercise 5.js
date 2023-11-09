// JavScript file 

// Interaction challenge - Completed (as shown in class as Solution 3)
const colorBtns = document.querySelectorAll(".colors"); //Targets all

for (const colorBtn of colorBtns) {
    colorBtn.addEventListener("click", function () {
        interactionContainer.style.backgroundColor = getComputedStyle(colorBtn).backgroundColor;
    })
}

// Loop challenge - Completed
const loopBox = document.getElementById("loopContainer") //Targets box
let repeatText = "Repeating";
var numberText = 0;

for (let numberText = 0; numberText < 2; numberText++) {
    let textBox = document.createElement("loopContainer"); 
    textBox.innerHTML = "Repeating" + repeatText;

    repeatText += "Repeating";
    loopBox.appendChild(textBox);
}  

// Condition challenge*/

const conditionBox = document.getElementById("square"); //Use id of square as targeting square, not condition description box
var conCount = 0;

conditionBox.addEventListener("mouseover", function () {
    console.log(conCount++)
    if (conCount == 4) {
        conditionBox.style.backgroundColor = 'green';
    }
})


// Time challenge - Completed

var fontSize = 1; //Must start at 1 pixel size

setInterval(function() {
    fontSize++; 
    document.querySelector("#increaseText").style.fontSize = fontSize + "px";
}, 1000);


// Input challenge*/

document.querySelector("button").addEventListener("click", function (e) {
    // Prevent the form from being submitted
    e.preventDefault();

    var length = document.querySelector("#inputText").value.length;
    document.querySelector("#text-length").innerHTML = length;    
})

// Console challenge - Completed

console.log("Hello World")