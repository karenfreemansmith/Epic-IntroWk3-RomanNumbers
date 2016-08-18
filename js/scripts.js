//UI Logic...
$("form").submit(function(event){
  event.preventDefault();
  $("#results").text(romanize($("#userNumber").val()));
});

//Backend Logic...
function romanize(aNumber){
  var romanNumber="";
  if (aNumber <= 3999) {
    for(var i=1;i<=parseInt(aNumber/1000);i++) {
      romanNumber+="M";
    }
  } else {
    romanNumber=("Sorry, maybe you should read the directions.");
  }
  return romanNumber;
}
