$(document).ready(function(){
  var containerTop = $(".header-container").offset().top;
  var containerHeight = $(".header-container").outerHeight();

  var processTop = $(".process-container").offset().top;
  var processHeight = $(".process-container").outerHeight();

  var firstSlideTop = $(".first-process").offset().top;
  var firstSlideHeight = $(".first-process").outerHeight();

  var secondSlideTop = $(".second-process").offset().top;
  var secondSlideHeight = $(".second-process").outerHeight();

  var thirdSlideTop = $(".third-process").offset().top;
  var thirdSlideHeight = $(".third-process").outerHeight();

  var workTop = $(".work-container").offset().top;
  var workHeight = $(".work-container").outerHeight();

  var portfolioTop = $(".work-portfolio").offset().top;
  var portfolioHeight = $(".work-portfolio").outerHeight();

  var toolsTop = $(".tools-container").offset().top;
  var toolsHeight = $(".tools-container").outerHeight();

  var canvasTop = $("canvas").offset().top;
  var canvasHeight = $("canvas").outerHeight();

  var navTop = $("nav").offset().top;
  var navHeight = $("nav").outerHeight();

  var aboutTop = $(".about-container").offset().top;
  var aboutHeight = $(".about-container").outerHeight();

  var contactTop = $(".contact-container").offset().top;
  var contactHeight = $(".contact-container").outerHeight();

  $(window).scroll(function(){
      if($(window).scrollTop() > (containerTop + containerHeight - 200)){
         $( ".first-process" ).addClass( "slide" );
      }
      else {
        return false;
      }
    });

  $(window).scroll(function(){
      if($(window).scrollTop() > (firstSlideTop - 100)){
         $( ".second-process" ).addClass( "slide1" );
      }
      else {
        return false;
      }
    });

  $(window).scroll(function(){
      if($(window).scrollTop() > (secondSlideTop + 100)){
         $( ".third-process" ).addClass( "slide" );
      }
      else {
        return false;
      }
    });

  $(window).scroll(function(){
      if($(window).scrollTop() > (thirdSlideTop - 100)){
         $( ".fourth-process" ).addClass( "slide1" );
      }
      else {
        return false;
      }
    });

      $(window).scroll(function(){
          if($(window).scrollTop() > (portfolioTop - 575)){
             $( ".work-portfolio1" ).addClass( "work-panel-container-slide" );
             $( ".work-portfolio2" ).addClass( "work-panel-ribbon-slide" );
             $( ".work-portfolio3" ).addClass( "work-panel-ribbon-slide" );
          }
          else {
            return false;
          }
        });

      $(window).scroll(function(){
          if($(window).scrollTop() > (toolsTop - 300)){
             $( "canvas" ).addClass( "show" );
          }
          else {
            return false;
          }
        });

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

$(document).ready(function (){

  var canvas = document.getElementById("myBarChart");
  var ctx = canvas.getContext("2d");


  var data = {
    labels: ["Ruby On Rails", "JavaScript", "React", "Redux", "Node", "UX/UI"],
    datasets: [
        {
            label: "Skills",
            backgroundColor: [
                'rgba(113,120,72, 1)',
                'rgba(57,61,29, 1)',
                'rgba(239,242,183, 1)',
                'rgba(147,131,86, 1)',
                'rgba(198,34,1, 1)',
                'rgba(51,51,43, 1)'
            ],
            borderColor: [
              'rgba(0, 0, 0, .2)',
              'rgba(0, 0, 0, .2)',
              'rgba(0, 0, 0, .2)',
              'rgba(0, 0, 0, .2)',
              'rgba(0, 0, 0, .2)',
              'rgba(0, 0, 0, .2)'
            ],
            data: [95, 85, 75, 65, 65, 90, 0],
        }
    ]
  };

  Chart.defaults.global.defaultFontColor = "#fff";
  Chart.scaleService.defaults.radialLinear.ticks.backdropColor = 'rgba(0, 0, 0, 0)';

  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options : {
      scales : {
          xAxes : [ {
              gridLines : {
                  display : false
              }
          } ]
        }
      }
  });
});

$(document).ready(function (){

  var canvas = document.getElementById("myDoughnutChart");
  var ctx = canvas.getContext("2d");


  var data = {
    labels: ["Ruby On Rails", "JavaScript", "React", "Redux", "Node", "UX/UI"],
    datasets: [
        {
            label: "Skills",
            backgroundColor: [
                'rgba(113,120,72, 1)',
                'rgba(57,61,29, 1)',
                'rgba(239,242,183, 1)',
                'rgba(147,131,86, 1)',
                'rgba(198,34,1, 1)',
                'rgba(51,51,43, 1)'
            ],
            borderColor: [
              'rgba(0, 0, 0, .2)',
              'rgba(0, 0, 0, .2)',
              'rgba(0, 0, 0, .2)',
              'rgba(0, 0, 0, .2)',
              'rgba(0, 0, 0, .2)',
              'rgba(0, 0, 0, .2)'
            ],
            data: [95, 85, 75, 65, 65, 90],
        }
    ]
  };

  Chart.defaults.global.defaultFontColor = "#fff";
  Chart.scaleService.defaults.radialLinear.ticks.backdropColor = 'rgba(0, 0, 0, 0)';
  Chart.defaults.global.legend.display = false;

  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data
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
