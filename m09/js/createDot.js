// Create functions
function clearDots(event) {
    // Create a nodeList that contains all the dot divs
    let dotNodeList = document.querySelectorAll(".dot");

    // Loop through dotNodeList, removing dots
    for (i = dotNodeList.length - 1; i >= 0; i--) {
        dotNodeList[i].parentNode.removeChild(dotNodeList[i]);
    }
}

function createDot(event){
    // Get the color and size values
    dot_color = document.getElementById("dot_color").value;
    dot_size = parseInt(document.getElementById("dot_size").value);

    // Create dot
    let dot = document.createElement("div");
    dot.className = "dot";

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

// Create variables
let mybutton = document.querySelector("button");
let content = document.querySelector(".content");

// Event listeners
mybutton.addEventListener("click", clearDots);
document.body.addEventListener("click", createDot);
// If the content box is clicked, or any nodes in it, it will stop the propagation
// so that it will not create a dot
content.addEventListener("click", (event) => {
    event.stopPropagation();
})