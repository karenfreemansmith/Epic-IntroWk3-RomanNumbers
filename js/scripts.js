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
    count=0;
    for(var i=1;i<=parseInt(aNumber/500);i++) {
      romanNumber+="D";
      count=i;
    }
    aNumber-=500*count;
    count=0;
    for(var i=1;i<=parseInt(aNumber/100);i++) {
      romanNumber+="C";
      count=i;
    }
    aNumber-=100*count;
    count=0;
    for(var i=1;i<=parseInt(aNumber/50);i++) {
      romanNumber+="L";
      count=i;
    }
    aNumber-=50*count;
    count=0;
    for(var i=1;i<=parseInt(aNumber/10);i++) {
      romanNumber+="X";
      count=i;
    }
    aNumber-=10*count;
    count=0;
    for(var i=1;i<=parseInt(aNumber/5);i++) {
      romanNumber+="V";
      count=i;
    }
    aNumber-=5*count;
    count=0;

  } else {
    romanNumber=("Sorry, maybe you should read the directions.");
  }
  return romanNumber;
}
