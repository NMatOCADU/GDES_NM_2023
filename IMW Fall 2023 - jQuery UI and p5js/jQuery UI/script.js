// Short hand for making sure document is fully loaded
$(function () {
    // Variable to select draggable elements
    let draggableElement = $(".draggable");

    // Making an elemnt draggable
    draggableElement.draggable();

    // Making an element resizable
    draggableElement.resizable();
})

