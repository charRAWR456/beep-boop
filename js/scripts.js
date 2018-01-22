$(document).ready(function() {

  $("form#beepBoop").submit(function(event) {
    event.preventDefault();
    userArray = []
    var userNumber = $("input#userNumber").val();
    var userName = $("input#userName").val();

    for (var i = 0; i <= userNumber; i++){
      userArray[i] = i;
    }
    if (userName == 0) {
      alert("Please Enter your Name!");
    }
    if (userNumber == 0) {
      alert("Please Enter a Number!");
    }
    if (userNumber < 0) {
      alert("Please enter a positive number!");
    }
  // stringArray = $(".sentance").text().split("");
    for(var o = 0; o < userNumber.length; o += 1){
      if (userArray[o] === 0){
        userArray[o] = "Beep!";
      }
      else if(userArray[o] % 2 === 0){
         userArray[o] = "Boop!"
      }
    }
    newArray = userArray.join(", ")
    var result = "Your result: " + newArray;

    $("#output").text(result);
  });
});
