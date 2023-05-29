$(document).ready(function() {
  $(".animated-link").hover(function() {
    $(this).addClass("fadeOutUp");
  }, function() {
    $(this).removeClass("fadeOutUp");
  });
});
