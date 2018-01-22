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
    //for (var i = 0; o < userNumber.toString().length; i++)
    //if (userArray[o].toString()[i] === 1||0)
var o = 0;
      for(var number = 0; number < userArray.length; number += 1){
        for (var digit = 0; digit < userArray.toString().length; digit += 1){
          if (userArray[number].toString()[digit] === "0"){
            userArray[number] = "Beep!";
          }
          if (userArray[number].toString()[digit] === "1"){
            userArray[number] = "Boop!";
          }
          if(userArray[number] % 3 === 0){
             userArray[number] = "I'm Sorry, " + userName + ". I'm afraid I can't do that."
          }
        }
      }
    newArray = userArray.join(", ")
    var result = "Your result: " + newArray;

    $("#output").text(result);
  });
});
