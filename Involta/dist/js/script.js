$(document).ready(function() {
    $('.news-slider__row').slick({

            dots: false,
            arrows: false,
            infinite: false,
            slidesToScroll: 1,
            fade: true,
            speed: 400,
            cssEase: 'linear',
            slidesToShow: 1,
        }),
        $('.mobile-slider').slick({
            dots: false,
            arrows: false,
            infinite: false,
            slidesToScroll: 1,
            fade: true,
            speed: 400,
            cssEase: 'linear',
            slidesToShow: 1,
        })

});