// Parallel arrays that contain information on the images
const myImages = [];
const captionImages = [];

let index = 0;

// Get nodes for buttons, for next and previous
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

// Set an interval to run autoSlide
setInterval(autoSlide,2000);

// Event listeners
previousButton.addEventListener("click", back);
nextButton.addEventListener("click", next); 

// Functions
function updateImage() {
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt= captionImages[index];
    document.getElementById("caption").textContent = captionImages[index]; 
} 

function next() {
    // If the current image is the last image on the slideshow, set index to
    // 0, to go back to first image, to loop
    if (myImages.length === index + 1) {
        index = 0;
    }
    // Else, it will incriment the index value of the image
    else {
        index++;
    }

    updateImage();
}

function back() {
    // If the current image is the first image, it will set index to the end
    // of the slideshow, so it can loop
    if (index === 0) {
        index = myImages.length - 1;
    }
    // Else, it will decrement the index value of the image
    else {
        index--;
    }
    
    updateImage();
}

function autoSlide() {
    // Will only run if auto box is checked
    if (document.getElementById("auto").checked) {
        next();
    }
}