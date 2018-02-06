$(document).ready(function(){
    
    
    // Show Navbar when Click on icon
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });
    
    // when scroll body .. sticky navbar
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 50){  // Show Sticky Navbar
            $('header').addClass('sticky');
        }
        else {
            $('header').removeClass('sticky');
        }
        
        if( sc > 1981) {
            $('.time').countTo(); // Run Count To Plugin
            $(window).off('scroll');
        }
        
        if ( sc > 500) { // Fade The Scroll Top Btn
            
            $('.scrollTop').fadeIn();
            
        } else {
            
            $('.scrollTop').fadeOut();
            
        }
        
    });
    
    // Portfolio Buttons Change bg 
    $('.buttons button').click(function(){
        
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        
        var CSSFilter = $(this).attr('id');
        
        if( CSSFilter === 'all' ) {
            $('.Images > div ').fadeIn();
        } else {
            $('.Images > div ').fadeOut();
            $('.Images').contents().filter('.' + CSSFilter).fadeIn();
        }
        
    });
    
    // owl carousel >> Team Section
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
  
    
    // Choose Panel 
    $('.c_panel li').click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        
        var p = $(this).data('role');
        $('.content > div ').hide();
        $('.content').contents().filter('#' + p).fadeIn();
        
    });
    
    // popup video in choose section
    $('.pop').magnificPopup({
        type: 'iframe'
    });
    
    // slick slider on pleasure section
    $('.slick').slick({
        nextArrow : false,
        prevArrow : false
    });
    
    
    // Scroll to Top
    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500);
    });
    
    // smooth Scroll 
    $('.list a').click(function(){
        
        $('body,html').animate({
            scrollTop : $($(this).attr('href')).offset().top - 80
        });
        
    });
    
   
});