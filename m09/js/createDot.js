var  mybutton = document.querySelector("button");

mybutton.addEventListener("click", function(event) {
    var element = document.getElementsByTagName("div");
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }
    // Let us stop the propagation of events
    event.stopPropagation();
});

addEventListener("click", createDot);

function createDot(event){
    // Get the color and size values
    dot_color = document.getElementById("dot_color").value;
    dot_size = parseInt(document.getElementById("dot_size").value);

    // Create dot
    let dot = document.createElement("div");

    // Alter size and color of dot
    dot.style.width = dot_size + "px";
    dot.style.height = dot_size + "px";
    dot.style.backgroundColor = dot_color;
    dot.style.borderRadius = "50%";
    
    // Position dot on page, divide the size by 2 in order to find upper left corner
    dot_radius = dot_size / 2;
    dot.style.position = "absolute";
    dot.style.left = (event.pageX - dot_radius) + "px";
    dot.style.top = (event.pageY - dot_radius) + "px";

    // Append to document body
    document.body.appendChild(dot);
}