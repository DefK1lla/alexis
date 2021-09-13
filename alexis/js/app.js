$(function() {
    let menu = $("#menu");
    let menuToggle = $("#menuToggle");

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        menu.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 80
        }, 700);
    });


    /* menuToggle */
    menuToggle.on("click", function (event) {
        event.preventDefault();
        
        menu.toggleClass("show");
        
    });


    // Slider
    let slider = $("#slider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        dots: true
      });
              
});