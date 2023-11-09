let repeatText = "Repeating";
var numberText = 0;
var loopChSize = 8;


for (let i = 0; i < 20; i++) {
    let textBox = document.createElement("loopContainer");
    textBox.innerHTML = "Repeating" + repeatText;

    document.body.appendChild(textBox);

    repeatText += "Repeating";
}


console,console.log("Test");