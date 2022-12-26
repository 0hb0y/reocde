"use strict";
$(function () {
    const hamburger = $(".hamburger");
    const hum = $(".hum");

    hamburger.click(function () {
        $(this).find(".hamburger_bar").toggleClass("is_active");
        hum.toggleClass("is_active");
    });
});

// フェードイン
$(function () {
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('scrollin');
            }
        });
    });
});

//タブ
document.addEventListener('DOMContentLoaded', function () {
    var $tab__link = $('.tab1__link')
    var $tab_body_item = $('.tab1-body__item')
    $tab__link.on('click', function (e) {
      var target = $(e.currentTarget)
      //タブの表示非表示
      $tab__link.removeClass('on')
      target.addClass('on')
      //タブの中身の表示非表示
      var num = target.data('tab-body')
      $tab_body_item.removeClass('on')
      $('.tab1-body__item--' + num).addClass('on')
    })
  })