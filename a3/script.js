// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  downRight(pHeight, pColorEven, pColorOdd, pSymbol);
  upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i = 0; i < pHeight; i++){
    rLine +="<p>";
    
      //Create each line on the Rhombus
      for(j = 0; j <= i; j++){

        //Is the position even or odd so we change the color
        //even
        if (j % 2) {
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
        }
        
        //odd
        else {
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        }

      }
      rLine +="</p>";
      // console.log(rLine);

    }

  document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=pHeight;i > 0;i--){
    rLine +="<p>";
    
    //Create each line on the Rhombus
    for(j=0;j<i;j++){

      //Is the position even or odd so we change the color
      //even
      if (j%2) {
      rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      }
      
      //odd
      else {
      rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }

    }
    rLine +="</p>";
    // console.log(rLine);

  }

  document.getElementById("downRight").innerHTML = rLine;
}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  // Start i = 1, because we subtract it from pHeight to determine if a space should be
  // blank
  for (i = 1; i <= pHeight; i++){
    rLine +="<p>";
    
    //Create each line on the Rhombus
    for(j = 0; j < pHeight; j++){

      // Determines if space should be blank, we have to add spaces before symbols to "fill out"
      // the rhombus, so this if statement will fill in the negative space by determining how long
      // the spaces should be repeated
      if (j < pHeight - i) {
        rLine +="&nbsp;";
      }
      
      //Is the position even or odd so we change the color
      //even
      else if (j % 2) {
      rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      }
      
      //odd
      else {
      rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }

    }
    rLine +="</p>";
    // console.log(rLine);

  }

  document.getElementById("upLeft").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  // Start i = 1, because we subtract it from pHeight to determine if a space should be
  // blank
  for (i = 0; i < pHeight; i++){
    rLine +="<p>";
    
    //Create each line on the Rhombus
    for(j = 0; j < pHeight; j++){

      // Determines if space should be blank, we have to add spaces before symbols to "fill out"
      // the rhombus, so this if statement will fill in the negative space by determining how long
      // the spaces should be repeated
      if (j < i) {
        rLine +="&nbsp;";
      }
      
      //Is the position even or odd so we change the color
      //even
      else if (j % 2) {
      rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      }
      
      //odd
      else {
      rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }

    }
    rLine +="</p>";
    // console.log(rLine);

  }

  document.getElementById("downLeft").innerHTML = rLine;
}
