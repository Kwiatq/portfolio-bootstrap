'use strict';

$(function() {
    
   // smooth scroll
    
    // slig js <== slajdery
    // stuck overflow
    
    $("a[href*='#']:not([href='#'])").click(function() {
        
        // console.log($(this.hash).offset().top);
        
       $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 500 );
    });
    
    // scroll nav color change
    
    $(window).scroll(function(){
       if ($(window).scrollTop() > 50){
           $('#main-nav').addClass('scroll');
       } else {
           $('#main-nav').removeClass('scroll');
       }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});