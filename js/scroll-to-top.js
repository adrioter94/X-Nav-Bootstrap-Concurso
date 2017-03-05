// ===== Scroll to Top ==== 
		$(window).scroll(function() {
			if ($(this).scrollTop() >= 800) {        // If page is scrolled more than 50px
				$('#return-to-top').fadeIn(500);    
			} else {
				$('#return-to-top').fadeOut(500);   
			}
		});
		$('#return-to-top').click(function() {      
			$('body,html').animate({
				scrollTop : 0                   
			}, 500);
		});