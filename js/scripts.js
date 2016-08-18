//UI Logic...
$("form").submit(function(event){
  event.preventDefault();
  $("#results").text(romanize($("#userNumber").val()));
});

//Backend Logic...
function romanize(aNumber){
  var romanNumber="";
  var count=0;
  if (aNumber <= 3999) {
    for(var i=1;i<=parseInt(aNumber/1000);i++) {
      romanNumber+="M";
      count=i;
    }
    aNumber-=1000*count;
    for(var i=1;i<=parseInt(aNumber/500);i++) {
      romanNumber+="D";
      count=i;
    }
    aNumber-=500*count;

  } else {
    romanNumber=("Sorry, maybe you should read the directions.");
  }
  return romanNumber;
}
