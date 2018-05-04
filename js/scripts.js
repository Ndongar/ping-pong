//Business Logic


var pingPong = function(input) {
 var result = [];
 for(var i = 1; i <= input; i++){
    if (i % 3 === 0 && i % 5 === 0){
     result.push('ping-pong');
   }else    if(i % 3 === 0){
     result.push('ping');
   } else if (i % 5 === 0){
     result.push('pong');
   } else {
     result.push(i);
 }
 }
return(result)
};

//UI logic
$(document).ready(function(){
    $('#ping').submit(function(e){
   $("#result").empty();
     e.preventDefault();
   var input = parseInt($('input#number').val());
     var output = pingPong(input);

   output.forEach(function(value) {
   $("#result").append('<li>' + value + '</li>');
 });
});
});
