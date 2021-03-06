$(document).ready(function() {

    /* For the sticky navigation */
    $('.js--section-portfolio').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
     offset: '80px'   
    });
    
    /* Mobile nav */
    $('.js--nav-icon').click(function() {
        var nav =  $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        } 
    });
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
     $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
     $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
     $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
     $('.js--wp-5').waypoint(function(direction) {
            $('.js--wp-5').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });
    
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });
    
    $('.js--scroll-to-portfolio').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-portfolio').offset().top}, 1000);
    });
    
    /* Google Maps */
    var map = new GMaps({
      div: '.map',
      lat: -33.8587568,
      lng: 151.2058246
    });
    
    map.addMarker({
      lat: -33.8587568,
      lng: 151.2058246,
      title: 'Sydney',
      infoWindow: {
      content: '<p>Sydney headquarters</p>'
    }
});
    
    
/* 
* Function to animate image thumbnail arrows on hover
*/
//$.fn.hoverThumb = function() { 	
  	
	// only animate for large desktop browsers
  	if($(window).width() >= 1140 ){

	  	$(".portfolio-thumb").mouseenter(function(e){
        

			//$(this).hoverFlow(e.type, {opacity:1}, 300).siblings().hoverFlow(e.type, {opacity:0.3}, 300);
			$(this).stop().animate({'opacity':'1'}, 300).siblings().stop().animate({'opacity':'0.4'}, 300);

		})
        
		// once the mouse leaves the whole thumbs div
		$('#thumbs').mouseleave(function(e){

			// we reset the thumbs 
			$('#thumbs li').stop().animate({'opacity':'1'}, 300);

		});	

	}
//};		

    
    
    

});