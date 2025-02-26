function addGroceryItem() {
  // Instantiate a variable that will hold a new list item element, and a variable
  // which holds the user input value, and instantiate the list variable
  let newGroceryListElement = document.createElement('li');
  let userInputValue = document.getElementById('grocery_item').value;
  let groceryList = document.getElementById('todo');
  
  // Edit the text content of the new list item
  newGroceryListElement.textContent = userInputValue;
  
  // Append newGroceryListElement to the list
  groceryList.appendChild(newGroceryListElement)
  
  // Clear input textbox
  document.getElementById('grocery_item').value = '';
}
