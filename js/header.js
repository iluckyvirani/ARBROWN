jQuery(document).ready(function($) {

  if (window.matchMedia( '(max-width: 1600px) and (min-width: 897px)' ).matches) {

$(function() {
var $win = $(window),
    $header = $('header'),
    animationClass = 'is-fixed';

$win.on('load scroll', function() {
  var value = $(this).scrollTop();
  if ( value > 470 ) {
    $header.addClass(animationClass);
  } else {
    $header.removeClass(animationClass);
  }
});
});

  } else if (window.matchMedia( '(max-width: 896px) and (min-width: 581px)' ).matches)  {

$(function() {
var $win = $(window),
    $header = $('header'),
    animationClass = 'is-fixed';

$win.on('load scroll', function() {
  var value = $(this).scrollTop();
  if ( value > 340 ) {
    $header.addClass(animationClass);
  } else {
    $header.removeClass(animationClass);
  }
});
});

  } else if (window.matchMedia( '(max-width: 580px)' ).matches)  {

$(function() {
var $win = $(window),
    $header = $('header'),
    animationClass = 'is-fixed';

$win.on('load scroll', function() {
  var value = $(this).scrollTop();
  if ( value > 190 ) {
    $header.addClass(animationClass);
  } else {
    $header.removeClass(animationClass);
  }
});
});

  } else if (window.matchMedia( '(min-width: 1601px)' ).matches) {

$(function() {
var $win = $(window),
    $header = $('header'),
    animationClass = 'is-fixed';

$win.on('load scroll', function() {
  var value = $(this).scrollTop();
  if ( value > 640 ) {
    $header.addClass(animationClass);
  } else {
    $header.removeClass(animationClass);
  }
});
});

  };
});