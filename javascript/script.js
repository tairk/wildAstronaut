"use strict"

function removeActive(){
	 $('ul.nav > li').removeClass('active');
}

function collapseNavbar(){
	if($(".navbar").offset().top > 50)
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	else
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

$(function(){
	$('a.page-scroll').bind('click', function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.defaultPrevented;
	});	
});

$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

$('ul.nav > li').click(function (e) {
    event.defaultPrevented;
    $('ul.nav > li').removeClass('active');
    $(this).addClass('active');
});