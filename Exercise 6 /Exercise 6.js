//The $ before lines is used to signify it calls to JQuery
$(document).ready(function () {
    // The Effect
    $("#effectBox").click(function () {
        $(this).fadeOut(300).fadeIn(4000); //Quickly fades out, slowly fades in
    });

    // The Event
    $("#eventButton").hover( 
        function () { //When hovered over, it is light-green
            $(this).css("background-color", "lightgreen");
        },
        function () { //When not hovered over, it is orange
            $(this).css("background-color", "orange");
        }
    );
    $("#eventButton").click(function () { //When clicked, it is red. Then orange when not hovered
        $(this).css("background-color", "red");
    });

    // The Manipulation
    $("#manipulationBox").click(function () {
        $(this).text("Manipulated Executed").css({
            "background-color": "lightcoral",
            "color": "blue"
        });
    }); //When clicked, the colour and text is replaced with the above
});