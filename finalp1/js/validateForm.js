
// Create variables
let nameNode = document.getElementById('name');
let emailNode = document.getElementById('email');
let commentNode = document.getElementById('comment')
const submitButtonNode = document.getElementById('submitButton')

function validateData() {
    if (nameNode.value === "" || nameNode.value === null) {
        nameNode.style.borderColor = "red";
    }

    else if (emailNode.value === "" || emailNode.value === null) {
        emailNode.style.borderColor = "red";
    }

    else if (commentNode.value === "" || commentNode.value === null) {
        commentNode.style.borderColor = "red";
    }
}