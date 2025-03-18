
// Create variables
let nameNode = document.getElementById('name');
let emailNode = document.getElementById('email');
let commentNode = document.getElementById('comment')
const formNode = document.getElementById('contactForm')

// Will listen for form submit, if it submits, it will validate data
formNode.addEventListener("submit", validateData);

// function to validate data on page
function validateData(event) {
    if (nameNode.value === "" || nameNode.value === null) {
        nameNode.style.borderColor = "red";
        event.preventDefault();
    }

    else if (emailNode.value === "" || emailNode.value === null) {
        emailNode.style.borderColor = "red";
        event.preventDefault();
    }

    else if (commentNode.value === "" || commentNode.value === null) {
        commentNode.style.borderColor = "red";
        event.preventDefault();
    }
}