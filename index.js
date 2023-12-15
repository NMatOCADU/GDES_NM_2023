document.addEventListener("DOMContentLoaded", function () { //A number of added event functions
    function showPopup() {
        alert("Welcome to the site. Click the button to begin. You can select options at the top or adjust the window height by dragging the bottom");
    }
    $(".game-menu").resizable({ //Resizing the window
            handles: "s", 
            minHeight: 200,
            maxHeight: 600, 
        });
        
    var startMenu = document.querySelector(".Start-menu");
    var categSection = document.querySelector(".Categ");
    var xresourcesSection = document.querySelector(".Xresources");
    var exSection = document.querySelector(".Ex");
    var projSection = document.querySelector(".Proj");
    
    // Keep track of the previously pressed button
    var previousSection = null;
    
    hideSections([categSection, xresourcesSection, exSection, projSection]);
    
    var clickHereLink = document.querySelector(".Start-menu a.Click-buttons");
    clickHereLink.addEventListener("click", function () {
        toggleSection(startMenu, categSection);
    });
    
    var extraSourcesButton = document.getElementById("extraSourcesButton");
    extraSourcesButton.addEventListener("click", function () {
        toggleSection(categSection, xresourcesSection);
    });
    
    var exercisesButton = document.getElementById("ExercisesButton");
    exercisesButton.addEventListener("click", function () {
        toggleSection(categSection, exSection);
    });
    
    var projectsButton = document.getElementById("ProjectsButton");
    projectsButton.addEventListener("click", function () {
        toggleSection(categSection, projSection);
    });
    
    document.querySelectorAll(".Categ h3").forEach(function (category) {
        category.addEventListener("click", function () {
            var categoryClassName = category.textContent.replace(/\s+/g, '');
            toggleSection(categSection, document.querySelector("." + categoryClassName));
        });
    });
    document.querySelectorAll(".GoBack-button").forEach(function (goBackButton) {
        goBackButton.addEventListener("click", function () {
            toggleSection(previousSection, categSection);
        });
    });
    
    function toggleSection(hideSection, showSection) {
        hideSectionWithFold(hideSection, function () {
            showSectionWithFold(showSection);
        });
    }
    
    function hideSectionWithFold(section, callback) {
        $(section).animate({ height: 0 }, 500, function () {
            section.style.display = "none";
            if (callback) {
                callback();
            }
        });
    }
    
    function showSectionWithFold(section) {
        section.style.display = "block";
        section.style.height = 0; // Set initial height to 0
        $(section).animate({ height: section.scrollHeight }, 500);
    }
    
    function hideSections(sections) {
        sections.forEach(function (section) {
            section.style.display = "none";
        });
    }
    
    function showPopup() {
        var modal = document.getElementById('myModal');
        modal.style.display = 'block';
    }
    //For Options
    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }
    document.querySelector("#ChangeTheme").addEventListener("click", function() {
            document.body.classList.toggle("option-invert");
    });
    
    document.querySelector("#ChangeFont").addEventListener("click", function() {
        document.body.classList.toggle("option-font");
    });
    
        document.querySelector("#ChangeWidth").addEventListener("click", function() {
            document.body.classList.toggle("option-width");
        });
    // Function to increase font size
    function increaseFontSize() {
        var currentSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
        document.documentElement.style.fontSize = (currentSize * 1.1) + "px";
    }
    
    // Function to decrease font size
    function decreaseFontSize() {
        var currentSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
        document.documentElement.style.fontSize = (currentSize / 1.1) + "px";
    }
    
    document.querySelector("#IncreaseFontSize").addEventListener("click", function () {
        increaseFontSize();
    });
    
    document.querySelector("#DecreaseFontSize").addEventListener("click", function () {
        decreaseFontSize();
    });
    
    showPopup();
    
    });
    
    function showPopup() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
    }
    
    function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    }
    document.querySelector("#ChangeTheme").addEventListener("click", function() { 
    var randomColor = getRandomColor();
    
    document.body.style.backgroundColor = randomColor;
    
    document.body.classList.toggle("option-invert");
    });
    //The random colour value
    function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    
    console.log("Hello World")