var clock;

$(document).ready(function() {
  var clock;

  clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
          stop: function() {
            $('.message').html('The clock has stopped!')
          }
        }
    });
    var today= new Date();
    var d = new Date('11-1-2018');
    clock.setTime(d.getTime()/1000-today.getTime()/1000);
    clock.setCountdown(true);
    clock.start();

});





$(document).ready(function() {
var pixelToMove = 120;
$("section").mousemove(function(e) {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newValueX = (e.pageX / width) * pixelToMove;
var newValueY = (e.pageY / height) * pixelToMove;
$(this).css('background-position', (newValueX*4) + '%' + ' ' + (newValueY*0.5) + '%');
});
});
