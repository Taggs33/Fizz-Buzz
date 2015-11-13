$(document).ready(function() {

  for (i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
	  $('.fizzbuzz').append("<span class='double-fizz'>FizzBuzz</span><br>");	
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
  }
});
