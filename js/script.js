'use strict';


document.onscroll = function() {
	var look = document.getElementById('but');
	var scroll =  window.pageYOffset;
	if(scroll > 380) {
		look.classList.add('but');
	}
	else {
		look.classList.remove('but');
	}
}

