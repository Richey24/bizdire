import authStore from "./modules/store/auth.js";

(function () {
	"use strict";

	// When the user scrolls the page, execute myFunction 
	window.onscroll = function () { myFunction() };
	function myFunction() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById("myBar").style.width = scrolled + "%";
	}

	// ______________Active Class
	$(window).on("load", function (e) {
		$(".horizontalMenu-list li a").each(function () {
			var pageUrl = window.location.href.split(/[?#]/)[0];
			if (this.href == pageUrl) {
				$(this).addClass("active");
				$(this).parent().addClass("active"); // add active to li of the current link
				$(this).parent().parent().prev().addClass("active"); // add active class to an anchor
				$(this).parent().parent().prev().click(); // click the item to make it drop
			}
		});
		$(".horizontal-megamenu li a").each(function () {
			var pageUrl = window.location.href.split(/[?#]/)[0];
			if (this.href == pageUrl) {
				$(this).addClass("active");
				$(this).parent().addClass("active"); // add active to li of the current link
				$(this).parent().parent().parent().parent().parent().parent().prev().addClass("active"); // add active class to an anchor
				$(this).parent().parent().prev().click(); // click the item to make it drop
			}
		});
		$(".horizontalMenu-list .sub-menu .sub-menu li a").each(function () {
			var pageUrl = window.location.href.split(/[?#]/)[0];
			if (this.href == pageUrl) {
				$(this).addClass("active");
				$(this).parent().addClass("active"); // add active to li of the current link
				$(this).parent().parent().parent().parent().prev().addClass("active"); // add active class to an anchor
				$(this).parent().parent().prev().click(); // click the item to make it drop
			}
		});
	});

	// ______________ Back to Top
	$(window).on("scroll", function (e) {
		if ($(this).scrollTop() > 0) {
			$('#back-to-top').fadeIn('slow');
		} else {
			$('#back-to-top').fadeOut('slow');
		}
	});
	$("#back-to-top").on("click", function (e) {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});



	// ______________Quantity-right-plus
	var quantitiy = 0;
	$('.quantity-right-plus').on('click', function (e) {
		e.preventDefault();
		var quantity = parseInt($('#quantity').val());
		$('#quantity').val(quantity + 1);
	});
	$('.quantity-left-minus').on('click', function (e) {
		e.preventDefault();
		var quantity = parseInt($('#quantity').val());
		if (quantity > 0) {
			$('#quantity').val(quantity - 1);
		}
	});

	// ______________Chart-circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function () {
			let $this = $(this);
			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: '#f9faff',
				lineCap: ''
			});
		});
	}

	const DIV_CARD = 'div.card';

	// ______________Card Remove
	$('[data-bs-toggle="card-remove"]').on('click', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});

	// ______________Card Collapse
	$('[data-bs-toggle="card-collapse"]').on('click', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	// ______________Card Full Screen
	$('[data-bs-toggle="card-fullscreen"]').on('click', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	// ___________TOOLTIP
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	// __________POPOVER
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl)
	})
	// By default, Bootstrap doesn't auto close popover after appearing in the page
	$(document).on('click', function (e) {
		$('[data-bs-toggle="popover"]').each(function () {
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				(($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false  // fix for BS 3.3.6
			}

		});
	});

	// ______________ Modal
	$(document).ready(function () {
		$("#myModal").modal('show');
	});

	$(window).on("scroll", function (e) {
		if ($(window).scrollTop() >= 66) {
			$('app-header1').addClass('fixed-header');
		}
		else {
			$('.app-header1').removeClass('fixed-header');
		}
	});


	$(document).ready(function () {
		console.log("document ready");
	});



	//check if user is authenticated
	if(authStore.isAuthenticated()){
		//redirect to home page
		//window.location.href = "/bizdire/index.html";
		hideRegisterDetails()
		displayUserDetails()

		console.log("user logged in")
	}else {
		//redirect to login page
		//window.location.href = "/bizdire/login.html";
	}

	//add logout function
	$('#logout').click(function(){
		authStore.logout();
		window.location.href = "/bizdire/login.html";
	})



})();



/*-----------Start Switcher js--------------*/

// ---------------Start Light-mode-----------------//
// $('body').addClass('light-mode');
// ---------------End Light-mode-----------------//

// ---------------Start Dark-mode-----------------//
// $('body').addClass('dark-mode');
// ---------------End Dark-mode-----------------//

// ---------------Start Transparent -mode-----------------//
// $('body').addClass('transparent-mode');
// ---------------End Transparent-mode-----------------//

// ---------------Start RTL VERSION-----------------//
// $('body').addClass('rtl');

let bodyRtl = $('body').hasClass('rtl');
if (bodyRtl) {
	$('body').addClass('rtl');
	$('body').removeClass('ltr');
	$("html[lang=en]").attr("dir", "rtl");
	$(".horizontalMenu-list span").attr("dir", "rtl");
	$(".top-bar li a .fe").attr("dir", "rtl");
	localStorage.setItem('bizdirertl', true)
	localStorage.removeItem('bizdireltr')
	$("head link#style").attr("href", $(this));
	(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
	var carousel = $('.owl-carousel');
	$.each(carousel, function (index, element) {
		// element == this
		var carouselData = $(element).data('owl.carousel');
		carouselData.settings.rtl = true; //don't know if both are necessary
		carouselData.options.rtl = true;
		$(element).trigger('refresh.owl.carousel');
	});
} 
// ---------------End RTL VERSION-----------------//

/*-----------End Switcher js--------------*/



$(function(){

	//check if user logged in

	console.log("custom loaded")


})



/*-----------User Display Functions----------------*/
function hideRegisterDetails() {
	//get element details
	console.log($('.top-bar-right .custom li'));
	$('.top-bar-right .custom li a')[0].style = 'display:none'
	$('.top-bar-right .custom li a')[1].style = 'display:none'

}


function displayUserDetails() {
	$('.top-bar-right .custom li a')[2].style = 'display:block'
	console.log(authStore.getEmail());
	console.log( $('#userEmailSpan'));
	$('#userEmailSpan').text(authStore.getEmail())
}


