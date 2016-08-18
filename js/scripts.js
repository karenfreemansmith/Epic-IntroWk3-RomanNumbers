//UI Logic...
$("form").submit(function(event){
  event.preventDefault();
  $("#results").text(romanize($("#userNumber").val()));
});

//Backend Logic...
function romanize(aNumber){
  var romanNumber="";
  if (aNumber > 3999) {
    romanNumber=("Sorry, maybe you should read the directions.")
  }
  return romanNumber;
} 
