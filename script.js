/* In-class demo of JavaScript */

let name = "Peter";
let size = 10;
let letter = "h";
let colorPalette = ["red", "green", "blue", "purple", "orange", "yellow"];

// console.log(colorPalette[1]);

for (let step = 0; step < 100; step++) {
    let textBox = document.createElement("p");
    textBox.innerHTML = "Ah" + letter;

    // if (step < 50) {
    //     textBox.innerHTML = "HIIII";
    // } else {
    //     // textBox.innerHTML = "BYEEE";
    // }

    textBox.style.fontSize = size + "px";
    textBox.style.color = colorPalette[step % colorPalette.length];
    document.body.appendChild(textBox);
    size++;
    letter += "h";
}

// Click button to change background color
document.querySelector("button").addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
})

let texts = document.querySelectorAll("p");


for (let step = 0; step < texts.length; step++) {
    texts[step].addEventListener("click", function () {
        console.log(this.innerHTML.length);
        this.innerHTML = this.innerHTML.length;

    })
}



// console.log(texts[1]);