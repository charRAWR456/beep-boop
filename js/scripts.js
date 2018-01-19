$(document).ready(function() {

  $("form#beepBoop").submit(function(event) {
  event.preventDefault();
    userArray = []
    var userInput = $("input#userNumber").val();
    for (var i = 0; i <= userInput; i++){
      userArray[i] = i;
    }

    userArray.forEach(function(number){
      if (number == 0) {
        number = "beep";
      }
     });


    console.log(userInput);
    var result = "Your result: " + userArray;



    $("#output").text(result);
  });
});
