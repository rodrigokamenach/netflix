$('.owl-carousel').owlCarousel({
    loop:false,
    margin:5,
    nav:true,               
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:8
        }
    }
})

var elem = $("body >header");
var doc = $(document);

function scrolled() {
    var threshold = doc.scrollTop() > 50;
    elem.toggleClass("scrolled", threshold);
}

$(window).on({ scroll: scrolled });