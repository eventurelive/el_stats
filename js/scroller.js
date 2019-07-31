$(document).ready(function(){
  // Calculate the height of the navbar
  var navHeight = $('nav').outerHeight();
  // When slide link clicked:
  $('.slide-section').click(function(e){
    // find the link's href
    var linkHref =  $(this).attr('href');
    // animate this:
    $('html, body').animate({
      // scroll from the top: link's href - navheight
      scrollTop: $(linkHref).offset().top - navHeight
      // in 1s
    }, 1000);
    // stop link from doing its normal function
    e.preventDefault();

  });
});
