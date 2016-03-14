$(function(){

  $(document.body).on("click", "#flash p", function(e) {
    e.preventDefault();
    $(this).fadeOut(200);
  });

  $(".site_nav__search, .site_nav__about").on("click", ".site_nav__link", function(e) {
    e.preventDefault();
    $(this).closest('li')
      .toggleClass('site_nav--open')
      .find(":input:visible").eq(0).focus();
  });

  $(window).on('scroll', function () {
    var element = $(".site_head");
    var pixs = $(document).scrollTop() / 5;

    if(pixs == 0) {
      element.css({"-webkit-filter": "blur(0)","filter": "blur(0)" });
      element.css({"opacity":1});
    } else if(pixs < 200) {
      element.css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" });
      element.css({"opacity":4/pixs});
    } else if(element.css('opacity') > 0) {
      element.css({"opacity":"0"});
    }
  });
});
