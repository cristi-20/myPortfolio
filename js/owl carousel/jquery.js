$('.work-carousel').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:true,
    navText:[ 
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

$('.skills-carousel').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    nav:false,
    responsive:{
        0:{
            items:5
        },
        700:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



