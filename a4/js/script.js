function isValid() {
  if (getFirstNameValidity() && getLastNameValidity()) {
    return true;
  }
  else {
    document.getElementById("submitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
    event.preventDefault();
    return false;
  }
}

function getFirstNameValidity() {
  //1) Create variable
  let isFirstNameValid = false;

  //2) read value from HTML
  let firstName = document.getElementById("firstName").value;
  let errorMessages = "";

  //3) Do validation
  // If first name is null, empty, or longer than 20 chars, give error message
  if (firstName === null || firstName === "" || firstName.length > 20 ) {
    errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
    console.log("First name invalid — length")
  } 
  
  // If first name has any non alphebetical character, give error message
  else if (firstName.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
    console.log("First name invalid — bad characters")
  } 
  
  // If it passed the above, then it is valid!
  else {
    isFirstNameValid = true;
    console.log("First name valid")
  };

  //4) Send error message to HTML
  document.getElementById("firstNameWarning").innerHTML = errorMessages;

  //5) return status of isFirstNameValid
  return isFirstNameValid;
};

function getLastNameValidity() {
  // Create variables
  let isLastNameValid = false;
  
  // Read values from HTML
  let lastName = document.getElementById("lastName").value;
  let errorMessages = "";
  
  // Do validation
  // If last name is null, empty, or longer than 20 chars, give error message
  if (lastName === null || lastName === "" || lastName.length > 20) {
    errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
    console.log("Last name invalid - length");
  }
  
  // If last name has any non alphebetical character, give error message
  else if (lastName.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages += "<p>Invalid character in the last name (accepts only A-Z, a-z, and ,.'-)</p>";
    console.log("Last name invalid - bad characters");
  }
  
  // If it passed the above, then it is valid!
  else {
    isLastNameValid = true;
    console.log("Last name valid");
  }
  
  // Send error messages to HTML
  document.getElementById("lastNameWarning").innerHTML = errorMessages;
  
  // Return status of lastNameValid
  return isLastNameValid;
}

function getEmailValidity() {
  // create variables
  let isEmailValid = false;
  
  // Read values from HTML
  let email = document.getElementById("email").value;
  let errorMessages = "";
  
  // Find positions of @ and . to ensure validity of email later
  let atPosition = email.indexOf("@");
  let dotPosition = email.lastIndexOf(".");
  
  //Do validation
  // If the email value is blank or null, give an error
  if (email === null || email === "") {
    errorMessages += "<p>The email is required, please enter one</p>";
    console.log("Email invalid - not inputted");
  }
  
  // The email must contain at least one "@" symbol and one "." symbol, if not give error
  else if (!email.includes("@") && !email.includes(".")) {
    errorMessages += "<p>The email must be valid.  Ensure you include an @ symbol and a . symbol</p>";
    console.log("Email invalid - @ or . not found");
  }
  
  // The "@" cannot be next to the ".", if it is then give an error
  else if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= email.length) {
    errorMessages += "<p>The email must be valid.  Ensure you the placement of the @ symbol and the . symbol are correct";
    console.log("Email invalid - @ or . in incorrect position");
  }
  
  else {
    isEmailvalid = true;
    console.log("Email is valid");
  }
  
  // Send error messages to HTML
  document.getElementById("emailWarning").innerHTML = erorrMessages;
  
  // Return status of emailValidity
  return isEmailValid;
}

// Add event listeners for each field, checks if the input is valid
document.getElementById("firstName").addEventListener('blur', getFirstNameValidity, false);
document.getElementById("lastName").addEventListener('blur', getLastNameValidity, false);
document.getElementById("email").addEventListener('blur', getEmailValidity, false);
