$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');
  $("#splash h1").delay(1000).fadeOut('slow');
});

$(function(){
    $('a[href^="#"]').click(function(){
      var adjust = 0;
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });

$(function() {
    $(window).on('scroll resize', function() {
      var setHeight = 350;
      var wHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      $('#profile .txt').each(function() {
        var targetPosition = $(this).offset().top;
        if(scrollTop > targetPosition - wHeight + setHeight) {
          $(this).addClass('show1');
        }
      })
    });
});

$(function() {
    $(window).on('scroll resize', function() {
      var setHeight = 400;
      var wHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      $('#profile .icon').each(function() {
        var targetPosition = $(this).offset().top;
        if(scrollTop > targetPosition - wHeight + setHeight) {
          $(this).addClass('show2');
        }
      })
    });
});

$(function() {
    $(window).on('scroll resize', function() {
      var setHeight = 180;
      var wHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      $('#works .made').each(function() {
        var targetPosition = $(this).offset().top;
        if(scrollTop > targetPosition - wHeight + setHeight) {
          $(this).addClass('show3');
        }
      })
    });
});

$(window).on('scroll',function(){
  $("#works .title").each(function(){
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > position - windowHeight + 80){
      $(this).addClass('borderanime');
    }
  });
});