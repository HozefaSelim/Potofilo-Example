(function($){
    var type=new Typed('span.txt-rotate'
    ,
    {
    strings: ["I'am wordpress Developer","I'm Web Design"],
    typeSpeed:10,
    backSpeed:100,
    fadeOut:false,
    smartBackspace:true,
    loop:true,
   
    }
    )
})($);
// filter
$(document).ready(function(){
$(".projects-wrapper").isotope({
    filter:'*',
    layoutMode:'masonry'
});
// click to filter
$(".list-filter a").click(function()
{
    $(".list-filter a").removeClass('active');
    // get name of selector
    var selector= $(this).attr('data-filter')
    $(this).addClass('active');
    $(".projects-wrapper").isotope({
     filter:selector,

    });
    return false;
});
});
// popup-image
$('.popup-image').magnificPopup({
    type:'image',
    closeOnContentClick:true,
    gallery:{
        enabled:true,
        navigateByImgClick:true

    }
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dotes:true,
    items:2,
    autoWidth:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    center:false,
    responsive:{
        0:{
            item:1,
            nav:false,

        },
        576:{
            item:1,
            nav:false,

        },
        768:{
            item:2,
            nav:false
        }
    }
})($);