$(document).ready(function(){
    var owl = $('#watch');
    owl.owlCarousel({
        items: 2,
        autoHeight:true,
        dots: false,
        loop: true,
        margin: 30,
        nav: false,
        responsive:{
            900:{
                items: 2
            },
            500:{
                items: 1
            },
            0:{
                items: 1
            }
        }
    });




    $('.customNext').click(function() {
        owl.trigger('next.owl.carousel');
    });

// Go to the previous item
    $('.customPrev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });



    var owl2 = $('#service');
    owl2.owlCarousel({
        items: 1,
        autoHeight:true,
        dots: false,
        loop: true,
        margin: 30,
        nav: false
    });



    $('.customNext').click(function() {
        owl2.trigger('next.owl.carousel');
    });

// Go to the previous item
    $('.customPrev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl2.trigger('prev.owl.carousel', [300]);
    });


    $('ul.catalog-tabs').on('click', 'li:not(.catalog-tabs__tab_active)', function() {
        $(this)
            .addClass('catalog-tabs__tab_active').siblings().removeClass('catalog-tabs__tab_active')
            .closest('div.container').find('div.catalog-content').removeClass('catalog-content_active')
            .eq($(this).index()).addClass('catalog-content_active');
    });

    $(window).scroll(function () {
        if($(this).scrollTop() > 500){
            $('.up-arrow').fadeIn();
        } else {
            $('.up-arrow').fadeOut();
        }
    });



});





