var  mybutton = document.querySelector("button");

mybutton.addEventListener("click", function(event) {
    var element = document.getElementsByTagName("div");
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }
    // Let us stop the propagation of events
    event.stopPropagation();
});

addEventListener("click", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
});

function createDot(event){
    // Get the color and size values
    dot_color = getElementById("dot_color").value;
    dot_size = parseInt(getElementById("dot_size").value);

    // Create dot
    let dot = document.createElement("div");
    
    // Position dot on page, divide the size by 2 in order to find upper left corner
    dot_radius = dot_size / 2;
    dot.style.left = (event.pageX - dot_radius) + "px";
    dot.style.top = (event.pageY - dot_radius) + "px";
}