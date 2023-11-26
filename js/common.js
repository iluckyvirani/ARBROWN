// トグルメニュー
(function ($) {
    $(function () {
        var $header = $('#header');
        var $body = $('body');
        $('#nav-toggle').click(function () {
            $header.toggleClass('open');
            $body.toggleClass('hidden');
        });
    });
})(jQuery);

// メガメニュー
$(function () {
    $('.js-menu__item__link').each(function () {
        $(this).on('click', function () {
            $(this).toggleClass('on');
            $("+.menu_contents", this).slideToggle();
            return false;
        });
    });
});

// headerのスクロール固定
var navPos = jQuery('#header').offset().top;
var navHeight = jQuery('#header').outerHeight();
var $body = $('body');
jQuery(window).on('scroll', function () {
    if (500 < jQuery(this).scrollTop()) {
        jQuery('#header').addClass('m_fixed');
        jQuery('body').addClass('headfix');
        jQuery('#header.m_fixed').addClass('fix2');
    } else {
        jQuery('#header').removeClass('m_fixed');
        jQuery('body').removeClass('headfix');
        jQuery('#header.m_fixed').removeClass('fix2');
    }
});

// フェードイン効果
$(function () {
    $(window).scroll(function () {
        $('.fade').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('scrollin');
            }
        });
    });
});
