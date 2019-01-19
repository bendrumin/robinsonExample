
$(document).ready(function(){
//Counter
var text_max = 500;
$('#count_message').html(text_max + ' characters remaining');

$('#text').keyup(function() {
  var text_length = $('#text').val().length;
  var text_remaining = text_max - text_length;

  $('#count_message').html(text_remaining + ' characters remaining');
})
