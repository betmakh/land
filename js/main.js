$(function() {

  $('button.toggle-popup').on('click', function(event) {
    $('.popup').addClass('active');
  });

  $('.popup .exit').on('click', function() {
    $(this).closest('.popup').removeClass('active');
  });

  

  // timer time setting

  var date = new Date($("#date").text());
  var currentDate = new Date();
  var time = (date.getTime()-currentDate.getTime())/1000;
    console.log(time);
  if(time > 359999 || time < 0)
    time = 0;

  var clock = $('.timer').FlipClock(time, {
      clockFace: 'DailyCounter',
      countdown: true
    });
});
