$(document).ready(function) {
  $("form#ping").submit(function(event) {
    event.preventDefault();
    var ping pong = parseInt($("input#number").val());
    var result = ping pong(number);
    $("#result").text(result);
  });
});
