// Extract scroll listener logic into its own function, so can add / remove the event listener as needed - see below.
var scrollListener = function () {
    var visibleHeight = window.innerHeight;  //Calculate the new height based on scroll position and visible portion

    var totalHeight = document.documentElement.scrollHeight;
    var scrollPercentage = (window.scrollY / (totalHeight - visibleHeight)) * 300;
    var newHeight = Math.min(232, Math.max(0, scrollPercentage)); // Determines min/max height

    document.querySelector(".theScrollPaper").style.height = newHeight + "%"; //Apply the new height to the .theScrollPaper element


    updateTextContent(newHeight); //Updates the text based on the height
    if (newHeight >= 166) {
        document.querySelector(".Text2").style.opacity = 1;
        document.querySelector(".Text2").style.transform = "translateY(0)";
    } else {
        document.querySelector(".Text2").style.opacity = 0;
        document.querySelector(".Text2").style.transform = "translateY(50px)";
    }
};

var currentHeight = 0;

var keydownListener = function (event) {
    if (event.key === "W" || event.key === "w") {
        // Increase height
        currentHeight += 5; // Adjust the increment as needed
    } else if (event.key === "S" || event.key === "s") {
        // Decrease height
        currentHeight -= 5; // Adjust the decrement as needed
    }

    // Ensure height stays within bounds (0% to 400%)
    currentHeight = Math.max(0, Math.min(400, currentHeight));

    // Apply the new height
    document.querySelector(".theScrollPaper").style.height = currentHeight + "%";
};

// Add the initial event listener for the scrolling, similar to the way you had it. Except it is in its own function now.
window.addEventListener("scroll", scrollListener);

// Keeps track of the current "mode".
var scrollMode = true;

// Handle clicks for the button
document.querySelector(".JS-Changer").addEventListener("click", function() {
    // If the current mode is "scrolling", remove the event listener for the scroll event.
    if (scrollMode) {
        window.removeEventListener("scroll", scrollListener);
        window.addEventListener("keydown", keydownListener);

        currentHeight = 0;
    }
    // If the current was "not scrolling", re-establish the initial state.
    else {
        window.addEventListener("scroll", scrollListener);
        window.removeEventListener("keydown", keydownListener);
    }

    // Finally invert the variable to indicate the opposite mode / value.
    scrollMode = !scrollMode;
});

function updateTextContent(height) {
    var textContainer = document.querySelector(".text-container");

    var isText1Visible = height >= 50 && height < 100; //Visible between 50% and 99%

    //Determines the visibility of Text1
    if (isText1Visible) {
        document.querySelector(".Text1").style.opacity = 1;
    } else {
        document.querySelector(".Text1").style.opacity = 0;
    }
}