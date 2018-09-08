$('html').click(function() {
  $('.dropdown').hide();
})

$('nav ul li a:not(:only-child)').click(function(event) {
  $(this).siblings('.dropdown').toggle();

  $('.dropdown').not($(this).siblings()).hide();
  event.stopPropagation();
});