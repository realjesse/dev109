function isValid() {
  if (firstName()) {
    return true;
  }
  else {
    document.getElementById("submitError").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
    event.preventDefault();
    return false;
  }
}

function firstName(){
  //1) Create variable
  var validFirstName = false;

  //2) read value from HTML
  var firstName = document.getElementById("firstName").value;
  var errorMessages = "";

  //3) Do validation
  if (firstName === "null" || firstName === "" || firstName.length > 20 ) {
    errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
    console.log("First name invalid — length")
  } 
  else if (firstName.match("^[a-zA-Z ,.'-]+$") === null) {
    errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
    console.log("First name invalid — bad characters")
  } 
  else {
    validFirstName = true;
    console.log("First name valid")
  };

  //4) Send error message to HTML
  document.getElementById("firstNameWarning").innerHTML = errorMessages;

  //5) return status of each field
  return (validFirstName);
};

// Add event listeners for each field, checks if the input is valid
document.getElementById("firstName").addEventListener('blur', firstName, false);
