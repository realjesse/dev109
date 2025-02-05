var table = prompt("Please input a value");         // Used for multiplication table
var operator = 'multiplication';                    // Type of calculation
var i = 1;                                          // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';          // Message

// Checks if table is falsy, will set value to 0
if (!table) {
  table = 0;
}

if (operator === 'addition') {
  // commented out, don't need
  // Do addition
  //while (i < 11) {
  //  msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
  //  i++;
  }
else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
