jQuery(function () {
  var windowWidth = $(window).width();
  var windowSm = 819;
  if (windowWidth <= windowSm) {
    var headerHight = 80;
  } else {
    var headerHight = 120;
  }
  jQuery('a[href^="#"]').click(function () {
    var speed = 600;
    var href = jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHight;
    jQuery("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});