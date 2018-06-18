$(document).ready(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() > 10) {
      $('#scrolldown').addClass('change');
    }
    else {
      $('#scrolldown').removeClass('change');
    }
  });
});