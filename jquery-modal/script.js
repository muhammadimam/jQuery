$('.open').on('click',
function() {
  $('.overlay, .modal').addClass('active');
});

$('.close, .overlay').on('click',
function() {
  $('.overlay, .modal').removeClass('active');
});

// Pressing the escape key will close the modal.
$(document).keyup(function(event) {
  if(event.keyCode === 27) {
    $('.overlay, .modal').removeClass('active');
  }
});