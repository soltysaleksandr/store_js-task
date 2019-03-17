import $ from 'jquery';
import 'slick-slider';
import '../node_modules/slick-slider/slick/slick.css';
import '../node_modules/slick-slider/slick/slick-theme.css';

window.jQuery = $;
window.$ = $;

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        // autoplay: true,
        autoplaySpeed: 2000,
    });
});
