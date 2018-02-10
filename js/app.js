$(document).ready(function() {
  $('.social-row').on('mouseover', function() {
    $(this)
    .find('.header-brand-label')
    .removeClass('hidden')
    .addClass('visible');
  });

  $('.social-row').on('mouseout', function() {
    $('.header-brand-label')
    .addClass('hidden')
    .removeClass('visible');
  });

});
