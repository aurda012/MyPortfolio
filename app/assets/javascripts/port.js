$(document).ready(function(){
  var containerTop = $(".header-container").offset().top;
  var containerHeight = $(".header-container").outerHeight();

  var workTop = $(".portfolio-item").offset().top;
  var workHeight = $(".portfolio-item").outerHeight();

  var navTop = $("nav").offset().top;
  var navHeight = $("nav").outerHeight();

  var contactTop = $(".contact-container").offset().top;
  var contactHeight = $(".contact-container").outerHeight();

  $(window).scroll(function(){
      if($(window).scrollTop()){
         $( "nav" ).addClass( "nav-scroll" );
         $("nav ul li").addClass("nav-scroll-list");
         $(".logo-container").addClass("show");
      }
      else {
        $( "nav" ).removeClass( "nav-scroll" );
        $("nav ul li").removeClass("nav-scroll-list");
        $(".logo-container").removeClass("show");
      }
    });

});

$(document).ready(function (){
  $('.logo-container').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });
});

$(document).ready(function(){
    var icon = $('.hunting-icon');
    var nav = $('nav');
    var safety = $('.hunter-safety-container');
    $('.hunting-icon').click(function() {
      icon.toggleClass('active')
    if(icon.hasClass('active')) {
      nav.animate({top: 225}, 0);
      safety.animate({top: '0'}, 350);
    }
    else {
      nav.animate({top: 0}, 0);
      safety.animate({top: '-240px'}, 350);
    }
  });
});

$(document).ready(function(){
    var icon = $('.hunting-icon-blog');
    var nav = $('nav');
    var safety = $('.hunter-safety-container');
    $('.hunting-icon-blog').click(function() {
      icon.toggleClass('active')
    if(icon.hasClass('active')) {
      nav.animate({top: 225}, 0);
      safety.animate({top: '0'}, 350);
    }
    else {
      nav.animate({top: 0}, 0);
      safety.animate({top: '-240px'}, 350);
    }
  });
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('nav-underline');
        })
        $(this).addClass('nav-underline');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-180 <= scrollPos && refElement.position().top-180 + refElement.height() > scrollPos) {
            $('nav ul li').removeClass("nav-underline");
            currLink.addClass("nav-underline");
        }
        else{
            currLink.removeClass("nav-underline");
        }
    });
}
