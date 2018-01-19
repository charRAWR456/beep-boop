$(document).ready(function() {

  $("form#beepBoop").submit(function(event) {
  event.preventDefault();
    userArray = []
    var userInput = $("input#userNumber").val();
    for (var i = 0; i <= userInput; i++){
      userArray[i] = i;
    }
    if (i = 0) {
        i = "beep";
      }
    


    console.log(userInput);
    var result = "Your result: " + userArray;



    $("#output").text(result);
  });
});
