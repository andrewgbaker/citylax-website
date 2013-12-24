/* MOBILE NAV COLLAPSE 
	
	(function () {
		
	    // Create mobile element
	    var mobile = document.createElement('div');
	    mobile.className = 'nav-mobile';
	    document.querySelector('.nav_wrap').appendChild(mobile);
	
	    // hasClass
		    function hasClass(elem, className) {
		        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
		    }
		
		    // toggleClass
		    function toggleClass(elem, className) {
		        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
		        if (hasClass(elem, className)) {
		            while (newClass.indexOf(' ' + className + ' ') >= 0) {
		                newClass = newClass.replace(' ' + className + ' ', ' ');
		            }
		            elem.className = newClass.replace(/^\s+|\s+$/g, '');
		        } else {
		            elem.className += ' ' + className;
		        }
		    }
	
	    // Mobile nav function
	    var mobileNav = document.querySelector('.nav-mobile');
	    var toggle = document.querySelector('.main_nav');
	    mobileNav.onclick = function () {
	        toggleClass(this, 'nav-mobile-open');
	        toggleClass(toggle, 'nav-active');
	    };
	    
	    
	    // CLOSE NAV ON CLICK
	    $('.main_nav a').on( 'click', function() {
		    if ( $('ul').hasClass('nav-active') ) {
		    	$('ul').toggleClass('nav-active');
		    	console.log(this);
		    };
	    });
	})();
	
END MOBILE NAV	*/



/* START WHYLAX ANIMATION JS

(function () {
  
  var isOn = false;

	$('#whylax').click(function() {
	  if(isOn) {
	    reset();
	  } else {
	    setPosition();
	  }
	});
	
	function setPosition() {
	  isOn = true;
	  var links = $('#whylax a');
	  var radius = (links.length * links.width()) / 2;
	  var degree = Math.PI / links.length, angle = degree / 2;
	  
	  links.each(function() {
	    var x = Math.round(radius * Math.cos(angle));
	    var y = Math.round(radius * Math.sin(angle));
	    
	    $(this).css({
	      left: x + 'px',
	      bottom: y + 'px'
	    });
	    
	    if(window.console) {
	      console.log(x, y);
	    }
	    
	    angle += degree;
	  });
	}
	
	function reset() {
	  $('#whylax a').css({
	    left: 0 + 'px',
	    bottom: 0 + 'px'
	  });
	  
	  isOn = false;
	}

})();

END WHYLAX ANIMATION */


// Can also be used with $(document).ready()
$(window).load(function() {

	if($(".flexslider").length > 0) {
 
		// Vimeo API nonsense
		var player = document.getElementById('player_1');
		$f(player).addEvent('ready', ready);
		
		function addEvent(element, eventName, callback) {
		if (element.addEventListener) {
		  element.addEventListener(eventName, callback, false)
		} else {
		  element.attachEvent(eventName, callback, false);
		}
		}
		
		function ready(player_id) {
		var froogaloop = $f(player_id);
		froogaloop.addEvent('play', function(data) {
		  $('.flexslider').flexslider("pause");
		});
		froogaloop.addEvent('pause', function(data) {
		  $('.flexslider').flexslider("play");
		});
		}
		
		
		// Call fitVid before FlexSlider initializes, so the proper initial height can be retrieved.
		$(".flexslider")
		.fitVids()
		.flexslider({
		  	animation: "slide",
		  	useCSS: false,
		  	slideshowSpeed: 9000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
			animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
		  //animationLoop: false,
		  //smoothHeight: true,
		  	before: function(slider){
		    $f(player).api('pause');
		  }
		});
		
		$(".vid_wrap").fitVids();
		
	}
	
	if($("#whylax").length > 0) {
		setTimeout(function() {
			$('#whylax a').removeClass('ico_in');
		}, 500);
	}
  

});