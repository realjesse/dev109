var table = Number(prompt("Please input a value between 1 and 10"));// Used for multiplication table
var i = 1;                                                          // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';                          // Message initialization

// Checks if table is falsy or if value is less than 1 or greater than 10, will set value to 0
if (!table || table < 1 || table > 10) {
  table = 0;
}
while (i < 11) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
  i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
