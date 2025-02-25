function isValid() {
  if (getFirstNameValidity()) {
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
  let validFirstName = false;

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
    validFirstName = true;
    console.log("First name valid")
  };

  //4) Send error message to HTML
  document.getElementById("firstNameWarning").innerHTML = errorMessages;

  //5) return status of each field
  return (validFirstName);
};

function getLastNameValidity() {
  // Create variables
  let isvalid = false;
  
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
    validLastName = true;
    console.log("Last name valid");
  }
  
  // Send error messages to HTML
  document.getElementById("lastNameWarning").innerHTML = errorMessages;
  
  // Return status of each field
  return isvalid;
  
}

// Add event listeners for each field, checks if the input is valid
document.getElementById("firstName").addEventListener('blur', getFirstNameValidity, false);
