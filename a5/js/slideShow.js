// Parallel arrays that contain information on the images
const myImages = ["image/640px-Cole_Thomas_The_Course_of_Empire_The_Savage_State_1836.jpg", 
    "image/640px-Cole_Thomas_The_Course_of_Empire_The_Arcadian_or_Pastoral_State_1836.jpg",
    "image/640px-Cole_Thomas_The_Consummation_The_Course_of_the_Empire_1836.jpg",
    "image/640px-Cole_Thomas_The_Course_of_Empire_Destruction_1836.jpg",
    "image/640px-Cole_Thomas_The_Course_of_Empire_Desolation_1836.jpg"];
// There are arrays which contain the name and author of the work (0) and the description (1)
const captionImages = [["The Savage State, Thomas Cole (1834).", "This shows the first rudiments of society, where a " +
    "limited empire has been established over sea, land, and the animal kingdom."], 
    ["The Arcadian or Pastoral State, Thomas Cole (1834)", "Civilization continues to progress.  Agriculture, " +
    "commerce, and religion are displayed."],
    ["The Consummation of Empire, Thomas Cole (1836)", "Civilization is shown at its absolute pinnacle.  Wealth, " +
    "power, knowledge, and taste are shown in harmony"], 
    ["Destruction, Thomas Cole (1836)", "Carnage and destruction engulf the city."], 
    ["Desolation, Thomas Cole (1836)", "The empire is extinct."]];

let index = 0;

// Get nodes for buttons, for next and previous
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

// Set an interval to run autoSlide
setInterval(autoSlide, 4000);

// Event listeners
previousButton.addEventListener("click", back);
nextButton.addEventListener("click", next); 

// When page first loads, run updateImage() so that the first image displays
updateImage();

// Functions
function updateImage() {
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt = captionImages[index][1];
    document.getElementById("name").textContent = captionImages[index][0];
    document.getElementById("caption").textContent = captionImages[index][1]; 
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