


$( document ).ready(function() {


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
	    
	    
	    
});
