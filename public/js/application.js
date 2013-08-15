

$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
  var numberGenerator = function(){
    var randDieNum = Math.floor((Math.random()*6)+1);
    return randDieNum;
  };

  var addNumber = function(evt){
     evt.preventDefault();
     console.log("I clicked a button");
     var dieNum = numberGenerator();
     console.log(dieNum);
    $('#die').html("<img src='/"+ dieNum +".png' title='" + dieNum + "' />");
  };


  $("form").on("submit", addNumber);

});
