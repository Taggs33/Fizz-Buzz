document.addEventListener( 'DOMContentLoaded', function () {
// $(document).ready(function() {

  var input = askQuestion();

  startFizzBuzz(input);

// });
}, false );

function startFizzBuzz(input2) {
  // for (i = 1; i <= input2; i++) {
  var i = 1;  
  while (i <= input2) {  
    if (i % 3 == 0 && i % 5 == 0) {
      // $('.fizzbuzz').append("<span class='double-fizz'>FizzBuzz</span><br>");
      var node = document.createElement("span");
      var brNode = document.createElement("br");
      var textNode = document.createTextNode("FizzBuzz");
      node.appendChild(textNode);
      document.getElementById("fizzbuzz").appendChild(node);
      document.getElementById("fizzbuzz").appendChild(brNode);
      console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
      $('.fizzbuzz').append("<span class='fizz-red'>Fizz</span><br>");  
      console.log("Fizz");
    }
    else if (i % 5 == 0) {
      $('.fizzbuzz').append("<span class='buzz-blue'>Buzz</span><br>"); 
      console.log("Buzz");
    }
    else {
      $('.fizzbuzz').append(i + "<br>");  
      console.log(i);
    }
    i++;
  }  
}

function askQuestion() {
  var answer = prompt("How many FizzBuzz cycles do you want?");
  return answer;
}