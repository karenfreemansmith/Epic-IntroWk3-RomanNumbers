//UI Logic...
$("form").submit(function(event){
  event.preventDefault();
  $("#results").text(romanize($("#userNumber").val()));
});

//Backend Logic...
function romanize(aNumber){
  var romanNumber=aNumber;
  return romanNumber;
}
