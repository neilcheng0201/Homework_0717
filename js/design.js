jQuery(function($) {
var swiper = new Swiper('.index-banner',{
	effect: 'fade',
	autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      }
});

//tea
var swiper = new Swiper('.tea-show', {
	slidesPerView: 3,
	spaceBetween: 190,	
	navigation: {
		nextEl: '.tea-wrapper .swiper-button-next',
		prevEl: '.tea-wrapper .swiper-button-prev'
	},
	pagination: {
		el: '.tea-show .swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		1680: {
			slidesPerView: 3,
			spaceBetween: 120,
		},
		1366: {
			slidesPerView: 3,
			spaceBetween: 60,
		},
		1280: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 2,
			spaceBetween: 160,
		},
		991: {
			slidesPerView: 2,
			spaceBetween: 80
		},
		900: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		767: {
			slidesPerView: 1,
			spaceBetween: 0
		}
	}
});

//news
var swiper = new Swiper('.news-show', {
	slidesPerView: 3,
	slidesPerColumn: 2,
	spaceBetween: 50,
	slidesPerGroup: 3,
	pagination: {
		el: '#news .swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '#news .right-arrow',
		prevEl: '#news .left-arrow',
	},
	breakpoints: {
		1200: {
			slidesPerView: 2,
			spaceBetween: 60,
			slidesPerGroup: 2
		},
		991: {
			slidesPerView: 2,
			spaceBetween: 15,
			slidesPerGroup: 2
		},
		600: {
			slidesPerView: 1,			
			spaceBetween: 0,
			slidesPerGroup: 1
		}
	}
});

//把swiper-pagination-bullet加入數字

$('.index_section.news .swiper-pagination-bullet').each(function () {
	var _num = ($(this).index())+1;
	$(this).html(_num);
});

$(window).on('resize', function () {
	$('.index_section.news .swiper-pagination-bullet').each(function () {
		var _num = ($(this).index())+1;
		$(this).html(_num);
	});
});

$(window).on('load resize scroll', function () {
	var _the_top = $(this).scrollTop();
	if (_the_top > 0) {
		$('body').addClass('leavetop');
	} else {
		$('body').removeClass('leavetop');
	}
});


$("#scrollspy a").on('click', function (event) {
	//var a = $('#header').outerHeight() + $('.page-scrollspy').outerHeight();
	//console.log(a);
	//console.log($(this).data("thetarget"));
	if ($(this).data("thetarget") !== "") {
		event.preventDefault();
		// event.preventDefault();        
		var hash = $(this).data("thetarget");
		$('html, body').animate({
			scrollTop: $(hash).offset().top - $('.header-wrapper').outerHeight()
			//scrollTop: $(hash).offset().top - $('#header').height() - 20
		}, 800, function () {
			window.location.hash = hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top - $('.header-wrapper').outerHeight()
			}, 0);
		});
	}
	var width_viewport=$(window).width();
	if(width_viewport<992){
		close_menu();
	}
});

$('.header-wrapper .hamburger').on('click',function(){
	if($(this).hasClass('is-active')){
		$(this).removeClass('is-active');
		$(this).siblings('.main-menu').slideUp();
	}else{
		$(this).addClass('is-active');
		$(this).siblings('.main-menu').slideDown();
	}
	return false;
});

$(window).on('resize scroll',function(){
	close_menu();
});


$('.btn.godebn').on('click',function(){
	console.log('do it');
	history.pushState("", document.title, window.location.pathname);
});

function close_menu(){
	var width_viewport=$(window).width();
	if($('.header-wrapper .hamburger').hasClass('is-active') && width_viewport<992){
		$('.header-wrapper .hamburger').removeClass('is-active');
		$('.header-wrapper .main-menu').slideUp();
	}
}
});