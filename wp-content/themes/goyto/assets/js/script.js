/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00
-------------------------------------------------------------------------------- */
(function ($) {
	"use strict";

	"use strict";
	const lenis = new Lenis();
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	document.addEventListener("DOMContentLoaded", function () {
		jQuery("#preloader").fadeOut("slow", function () {
			jQuery(this).remove();
		});
	});

	/*
	Background Image
	====start====
	*/
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ")"
		);
	});

		/*
	Parallax Image
	====start====
	*/
	if ($(".scene").length > 0) {
		$(".scene").parallax({
			scalarX: 10.0,
			scalarY: 10.0,
		});
	}
	/*
	Wow Animation
	====Start====
	*/
	if ($(".wow").length) {
		var wow = new WOW({
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: true,
			live: true,
		});
		wow.init();
	}

	/*
	Sticky Header
	====start====
	*/
	function GtStickyHeader() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $("[data-txStickyHeader]");
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass("gt_sticky");
			} else {
				$header.removeClass("gt_sticky");
				$header.removeClass("gt_sticky_show");
			}

			if ($header.hasClass("gt_sticky")) {
				if (windowTop < lastScrollTop) {
					$header.addClass("gt_sticky_show");
				} else {
					$header.removeClass("gt_sticky_show");
				}
			}

			lastScrollTop = windowTop;
		});
	}

	GtStickyHeader();
	$(".search-btn").on("click", function () {
		$(".search-body").toggleClass("search-open");
	});
	$(".open_mobile_menu").on("click", function () {
		$(".mobile_menu_wrap").toggleClass("mobile_menu_on");
	});
	$(".open_mobile_menu").on("click", function () {
		$("body").toggleClass("mobile_menu_overlay_on");
	});
	if ($(".mobile_menu li.dropdown ul").length) {
		$(".mobile_menu li.dropdown").append(
			'<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>'
		);
		$(".mobile_menu li.dropdown .dropdown-btn").on("click", function () {
			$(this).prev("ul").slideToggle(500);
		});
	}
	$(".dropdown-btn").on("click", function () {
		$(this).toggleClass("toggle-open");
	});
	/*
ScrollUp
====start====
*/
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 200) {
			$(".scrollup").fadeIn();
		} else {
			$(".scrollup").fadeOut();
		}
	});
	$(".scrollup").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			800
		);
		return false;
	});
	/*
Video popup
====start====
*/
	jQuery(".video_box").magnificPopup({
		disableOn: 200,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	$(".zoom-gallery").magnificPopup({
		delegate: "a",
		type: "image",
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: "mfp-with-zoom mfp-img-mobile",
		gallery: {
			enabled: true,
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function (element) {
				return element.find("img");
			},
		},
	});
	/*
Image popup
====start====
*/
	$(".zoom-gallery").magnificPopup({
		delegate: "a",
		type: "image",
		closeOnContentClick: false,
		preloader: true,
		closeBtnInside: false,
		mainClass: "mfp-with-zoom",
		gallery: {
			enabled: true,
		},
		zoom: {
			enabled: false,
			duration: 300,
			opener: function (element) {
				return element.find("img");
			},
		},
	});

	/*
Quantity Option
====start====
*/
	if ($(".quantity-input-2").length) {
		$(".quantity-input-2").inputarrow({
			renderNext: function (input) {
				return $(
					'<span class="custom-next"><i class="fal fa-plus"></i></span>'
				).insertAfter(input);
			},
			renderPrev: function (input) {
				return $(
					'<span class="custom-prev"><i class="fal fa-minus"></i></span>'
				).insertBefore(input);
			},
			disabledClassName: "custom-disabled",
		});
	}
	/*
Photo View Slider
====start====
*/
	var swiper = new Swiper(".gt-photo-view-slider", {
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".photo-swiper-pagination",
			type: "fraction",
			formatFractionCurrent: function (number) {
				if (number < 10) {
					return "0" + number;
				} else {
					return number;
				}
			},
		},
		navigation: {
			nextEl: ".photo-swiper-button-next",
			prevEl: ".photo-swiper-button-prev",
		},
		on: {
			init: function () {
				$(".gt-photo-swiper-progress-bar").removeClass("animate");
				$(".gt-photo-swiper-progress-bar").removeClass("active");
				$(".gt-photo-swiper-progress-bar").eq(0).addClass("animate");
				$(".gt-photo-swiper-progress-bar").eq(0).addClass("active");
			},
			slideChangeTransitionStart: function () {
				$(".gt-photo-swiper-progress-bar").removeClass("animate");
				$(".gt-photo-swiper-progress-bar").removeClass("active");
				$(".gt-photo-swiper-progress-bar").eq(0).addClass("active");
			},
			slideChangeTransitionEnd: function () {
				$(".gt-photo-swiper-progress-bar").eq(0).addClass("animate");
			},
		},
	});
	/*
Destination Scroller
====start====
*/
	jQuery(".gt-destination-sroller").marquee({
		gap: 0,
		speed: 80,
		delayBeforeStart: 0,
		direction: "left",
		duplicated: true,
		pauseOnHover: true,
		startVisible: true,
	});
	jQuery(".gt-top-destination-scroller").marquee({
		gap: 0,
		speed: 80,
		delayBeforeStart: 0,
		direction: "left",
		duplicated: true,
		pauseOnHover: true,
		startVisible: true,
	});
	/*
	Destination Scroller
====start====
*/
	jQuery(".video_box").magnificPopup({
		disableOn: 200,
		type: "iframe",
		mainClass: "mfp-zoom-in",
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	/*
	Partner Slider
	====start====
	*/
	if ($(".gt-partner-slider").length) {
		var slider = new Swiper(".gt-partner-slider", {
			spaceBetween: 105,
			slidesPerView: 5,
			roundLengths: true,
			loop: true,
			loopAdditionalSlides: 30,
			autoplay: {
				enabled: true,
				delay: 6000,
			},
			speed: 400,
			breakpoints: {
				1600: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 4,
				},
				576: {
					slidesPerView: 3,
					spaceBetween: 50,
				},
				0: {
					slidesPerView: 2,
				},
			},
		});
	}

	if ($(".gt-partner-slider-2").length) {
		var slider = new Swiper(".gt-partner-slider-2", {
			spaceBetween: 10,
			slidesPerView: 5,
			roundLengths: true,
			loop: true,
			loopAdditionalSlides: 30,
			autoplay: {
				enabled: true,
				delay: 6000,
			},
			speed: 400,
			breakpoints: {
				1600: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 4,
				},
				576: {
					slidesPerView: 3,
					spaceBetween: 50,
				},
				0: {
					slidesPerView: 2,
				},
			},
		});
	}
	/*
	Gallery Slider
	====start====
	*/
	if ($(".gt-footer-gallery-slider").length) {
		var slider = new Swiper(".gt-footer-gallery-slider", {
			slidesPerView: 5,
			spaceBetween: 0,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000,
			},
			speed: 500,

			breakpoints: {
				1600: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 5,
				},
				992: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 3,
				},
				576: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 2,
				},
			},
		});
	}
	/*
	Testimonial Slider
	====start====
	*/
	$("#mySlider1").AnimatedSlider({
		prevButton: "#btn_prev1",
		nextButton: "#btn_next1",
		visibleItems: 3,
		infiniteScroll: true,
		willChangeCallback: function (obj, item) {
			$("#statusText").text("Will change to " + item);
		},
		changedCallback: function (obj, item) {
			$("#statusText").text("Changed to " + item);
		},
	});
	/*
	Btn  Animation
	====start====
	*/
	setTimeout(() => {
		var a = document.querySelectorAll(".btn-spin a");
		a.forEach(function (a) {
			a.addEventListener("mouseover", function () {
				var c, b, d;
				!a.classList.contains("animating") &&
					!a.classList.contains("mouseover") &&
					(a.classList.add("animating", "mouseover"),
					(c = a.innerText.split("")),
					setTimeout(function () {
						a.classList.remove("animating");
					}, (c.length + 1) * 50),
					(b = a.dataset.animation),
					b || (b = "gt-spin"),
					(a.innerText = ""),
					c.forEach(function (b) {
						b == " " && (b = "&nbsp;"),
							(a.innerHTML +=
								'<span class="letter">' + b + "</span>");
					}),
					(d = a.querySelectorAll(".letter")),
					d.forEach(function (a, c) {
						setTimeout(function () {
							a.classList.add(b);
						}, 50 * c);
					}));
			}),
				a.addEventListener("mouseout", function () {
					a.classList.remove("mouseover");
				});
		});
	}, 100);
	/*
Banner Text Animation
====start====
*/
	jQuery(window).on("load", function () {
		var st = $(".txt-banner-title");
		if (st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function (index, el) {
			el.split = new SplitText(el, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(el, { perspective: 400 });
			if ($(el).hasClass("banner-title-text")) {
				gsap.set(el.split.chars, {
					opacity: 1,
					x: "100",
					ease: "circ.out",
					color: "#5000ec",
					ease: "Back.easeOut",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				color: "inherit",
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: 1,
				stagger: 0.02,
				delay: 0.5,
			});
		});

		const boxes = gsap.utils.toArray(".txt_item_active");
		boxes.forEach((svg) => {
			gsap.to(svg, {
				scrollTrigger: {
					trigger: svg,
					start: "top 70%",
					end: "bottom bottom",
					toggleClass: "active",
					once: true,
				},
			});
		});
		if ($(this).scrollTop() > 200) {
			$(".scrollup").fadeIn();
		} else {
			$(".scrollup").fadeOut();
		}
		Splitting();


	});


	let splitTextWords = gsap.utils.toArray(".txt-banner-anim p");
	splitTextWords.forEach((splitTextLine) => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: "top 90%",
				duration: 0.1,
				end: "bottom 60%",
				scrub: false,
				markers: false,
				toggleActions: "play none none none",
			},
		});
		const itemSplitted = new SplitText(splitTextLine, { type: "words" });
		gsap.set(splitTextLine, { perspective: 400 });
		itemSplitted.split({ type: "words" });
		tl.from(itemSplitted.words, {
			duration: 1,
			delay: 0.5,
			opacity: 0,
			y: "10",
			force3D: true,
			transformOrigin: "top center -50",
			stagger: 0.1,
		});
	});

	jQuery(window).on('load', function(){
		const boxes = gsap.utils.toArray('.txt_item_active');
		boxes.forEach(svg => {
			gsap.to(svg, {
				scrollTrigger: {
					trigger: svg,
					start: "top 70%",
					end: "bottom bottom",
					toggleClass: "active",
					once: true,
				}
			});
		});
	});

	let splitTextLines = gsap.utils.toArray(".txt-text-anim p");
	splitTextLines.forEach((splitTextLine) => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: "top 90%",
				duration: 2,
				end: "bottom 60%",
				scrub: false,
				markers: false,
				toggleActions: "play none none none",
			},
		});
		const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
		gsap.set(splitTextLine, { perspective: 400 });
		itemSplitted.split({ type: "lines" });
		tl.from(itemSplitted.lines, {
			duration: 1,
			delay: 0.5,
			opacity: 0,
			x: "50",
			force3D: true,
			transformOrigin: "top center -50",
			stagger: 0.1,
		});
	});
	jQuery(document).ready(function () {
		var st = jQuery(".tx-split-text");
		if (st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function (index, el) {
			el.split = new SplitText(el, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(el, { perspective: 400 });
			if (jQuery(el).hasClass("split-in-right")) {
				gsap.set(el.split.chars, {
					opacity: 0,
					x: "100",
					ease: "Back.easeOut",
				});
			}
			if (jQuery(el).hasClass("split-in-up")) {
				gsap.set(el.split.chars, {
					y: "80",
					ease: "circ.out",
				});
			}
			if (jQuery(el).hasClass("split-in-scale")) {
				gsap.set(el.split.chars, {
					opacity: 0,
					scale: "0.5",
					ease: "circ.out",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				color: "inherit",
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: 1,
				stagger: 0.02,
			});
		});

		$(".wp-travel-toolbar .wte-view-modes ul li[data-mode=list] a").on(
			"click",
			function (e) {
				e.preventDefault(); // Prevent default link behavior

				// Add a class to the body element
				$(".category-main-wrap").removeClass("col-2");
				$(".category-main-wrap").addClass("list-view");
			}
		);

		$(".category-main-wrap").addClass("products");
		$("select").niceSelect();
	});
	gsap.utils.toArray(" .appear_left").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, x: "-=150" },
				{ opacity: 1, x: 0, duration: 1, immediateRender: false }
			);
	});
	gsap.utils.toArray(" .appear_right").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, x: "+=150" },
				{ opacity: 1, x: 0, duration: 1, immediateRender: false }
			);
	});
	gsap.utils.toArray(" .appear_top").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, y: "+=150" },
				{ opacity: 1, y: 0, duration: 1, immediateRender: false }
			);
	});
	gsap.utils.toArray(" .appear_bottom").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, y: "-=150" },
				{ opacity: 1, y: 0, duration: 1, immediateRender: false }
			);
	});
	gsap.utils.toArray(".img-parallax").forEach(function (container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: true,
				pin: false,
			},
		});
		tl.from(image, {
			yPercent: -30,
			ease: "none",
		}).to(image, {
			yPercent: 30,
			ease: "none",
		});
	});
	/*
Explore Slider
====start====
*/
	function tourActive($scope, $) {
		var swiper2 = new Swiper(".gt-explor-slider", {
			slidesPerView: 4,
			loop: true,
			spaceBetween: 40,
			roundLengths: true,
			speed: 1000,
			navigation: {
				prevEl: ".gt-explor-prev",
				nextEl: ".gt-explor-next",
			},
			breakpoints: {
				1400: {
					slidesPerView: 4,
				},
				1300: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}
	var swiper2 = new Swiper(".gt-explor-slider-2", {
		slidesPerView: 3,
		loop: true,
		spaceBetween: 23,
		roundLengths: true,
		speed: 1000,
		autoplay: {
			enabled: true,
			delay: 5000,
		},
		breakpoints: {
			1400: {
				slidesPerView: 3,
			},
			1300: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});
	/*
Explore Visit Slider
====start====
*/

	/**
	 * Booking Slider Active
	 * @param {*} $scope
	 * @param {*} $
	 */
	function bookingSliderActive($scope, $) {
		var swiper2 = new Swiper(".gt-explor-visit-slider", {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 30,
			effect: "fade",
			speed: 1000,
			pagination: {
				el: ".gt-explor-visit-pagination",
				clickable: true,
			},
		});
	}

	/*
Testimonial Slider
====start====
*/
	var Testimonial_Slider = new Swiper(".gt-testimonial-slider-2", {
		loop: true,
		slidesPerView: 1,
		centeredSlides: true,
		speed: 1000,
		navigation: {
			nextEl: ".gt-testi-button-prev-2",
			prevEl: ".gt-testi-button-next-2",
		},
	});
	/*
Counter Up
====start====
*/
	$(".counter").counterUp({
		delay: 15,
		time: 1500,
	});
	/*
Guest Counter
====start====
*/
	jQuery(function () {
		jQuery('input[name="inOut"]').daterangepicker(
			{
				singleDatePicker: true,
				showDropdowns: true,
				minYear: 2023,
				maxYear: 2025,
				locale: { format: "DD-MMM-YYYY" },
			},
			function (start, end, label) {
				var years = moment().diff(start, "years");
			}
		);
		jQuery('input[name="daterange"]').daterangepicker(
			{
				opens: "left",
				minYear: "2023",
				maxYear: "2025",
				locale: { format: "DD-MMM" },
			},
			function (start, end, label) {
				console.log(
					"A new date selection was made: " +
						start.format("YYYY-MM-DD") +
						" to " +
						end.format("YYYY-MM-DD")
				);
			}
		);
	});
	jQuery(".quantity__minus").on("click", function (e) {
		e.preventDefault();
		var input = jQuery(this).siblings(".txt-quantity_input");
		var value = parseInt(input.val());
		if (value > 1) {
			value--;
		}
		input.val(value.toString().padStart(2, "0"));
	});
	jQuery(".quantity__plus").on("click", function (e) {
		e.preventDefault();
		var input = jQuery(this).siblings(".txt-quantity_input");
		var value = parseInt(input.val());
		value++;
		input.val(value.toString().padStart(2, "0"));
	});
	jQuery(".txt-guest-quantity_minus").on("click", function (e) {
		let type = jQuery(this).data("type");
		e.preventDefault();
		var input = jQuery(this).siblings(".txt-quantity_input");
		var value = parseInt(input.val());
		if (type == "adult") {
			if (value > 1) {
				value--;
				jQuery("#txt-adult-qty").text(value.toString());
			}
		} else if (type == "child") {
			if (value > 0) {
				value--;
				jQuery("#txt-child-qty").text(value.toString());
			}
		} else if (type == "room") {
			if (value > 0) {
				value--;
				jQuery("#txt-room-qty").text(value.toString());
			}
		}

		input.val(value == 0 ? value : value.toString());
	});
	jQuery(".txt-guest-quantity_plus").on("click", function (e) {
		e.preventDefault();
		let type = jQuery(this).data("type");
		var input = jQuery(this).siblings(".txt-quantity_input");
		var value = parseInt(input.val());
		value++;
		if (type == "adult") {
			jQuery("#txt-adult-qty").text(value.toString());
		} else if (type == "child") {
			jQuery("#txt-child-qty").text(value.toString());
		} else if (type == "room") {
			jQuery("#txt-room-qty").text(value.toString());
		}
		input.val(value.toString());
	});
	jQuery(".txt-select-dropdown .select-input").on("click", function () {
		jQuery(".txt-select-option").toggleClass("active");
	});

	/*
Filter Grid
====start====
*/

	var $grid = $(".grid").imagesLoaded(function () {
		$grid.masonry({
			percentPosition: true,
			itemSelector: ".grid-item",
			columnWidth: ".grid-sizer",
		});
	});
	var $grid = $(".grid").isotope({
		itemSelector: ".grid-item",
		layoutMode: "fitRows",
	});
	var filterFns = {
		numberGreaterThan50: function () {
			var number = $(this).find(".number").text();
			return parseInt(number, 10) > 50;
		},
		ium: function () {
			var name = $(this).find(".name").text();
			return name.match(/ium$/);
		},
	};
	$(".button-group").on("click", "button", function () {
		var filterValue = $(this).attr("data-filter");
		filterValue = filterFns[filterValue] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
	$(".button-group").each(function (i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on("click", "button", function () {
			$buttonGroup.find(".is-checked").removeClass("is-checked");
			$(this).addClass("is-checked");
		});
	});
	/*
Exp Video Slider
====start====
*/
	var swiper2 = new Swiper(".gt-new-exp-video-slider", {
		slidesPerView: 4,
		loop: true,
		spaceBetween: 25,
		roundLengths: true,
		speed: 1000,
		navigation: {
			prevEl: ".gt-new-exp-prev",
			nextEl: ".gt-new-exp-next",
		},
		breakpoints: {
			1400: {
				slidesPerView: 4,
			},
			1300: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});

	/*
Explore Imge
====start====
*/
	gsap.utils
		.toArray(".gt-feature-img-wrap-3, .gt-contact-faq-content")
		.forEach((el, index) => {
			let tl1 = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 1,
					start: "top 80%",
					end: "buttom 60%",
					toggleActions: "play none none reverse",
					markers: false,
				},
			});

			tl1.set(el, { transformOrigin: "center center" }).from(
				el,
				{ scale: 0.7 },
				{
					background: "inherit",
					scale: 1,
					duration: 1,
					immediateRender: false,
				}
			);
		});
	/*
Youtube Video BG
====start====
*/
	gsap.utils.toArray(" .item_left_1").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, x: "-=365" },
				{ opacity: 1, x: 0, duration: 1, immediateRender: false }
			);
	});
	gsap.utils.toArray(" .item_left_2").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, x: "-=365" },
				{ opacity: 1, x: 0, duration: 1, immediateRender: false }
			);
	});
	gsap.utils.toArray(" .item_right_1").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, x: "+=365" },
				{ opacity: 1, x: 0, duration: 1, immediateRender: false }
			);
	});
	gsap.utils.toArray(" .item_right_2").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, x: "+=365" },
				{ opacity: 1, x: 0, duration: 1, immediateRender: false }
			);
	});

	/*
Testimonial Slider
====start====
*/
	var quick_view = new Swiper(".gt-testimonial-nav-area", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 3,
		direction: "vertical",
		breakpoints: {
			1400: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 3,
				direction: "horizontal",
			},
			768: {
				slidesPerView: 3,
				direction: "horizontal",
			},
			577: {
				slidesPerView: 3,
				direction: "horizontal",
			},
			0: {
				slidesPerView: 3,
				direction: "horizontal",
			},
		},
	});
	var swiper2 = new Swiper(".gt-testimonial-for", {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		effect: "fade",
		slidesPerView: 1,
		thumbs: {
			swiper: quick_view,
		},
	});
	function sliderTwoActive($scope, $) {
		var slider = new Swiper(".gt-slider-area-7", {
			spaceBetween: 0,
			slidesPerView: 1,
			loop: true,
			speed: 1500,
			effect: "fade",
			autoplay: {
				enabled: true,
				delay: 6000,
			},
			navigation: {
				prevEl: ".gt-main-prev-7",
				nextEl: ".gt-main-next-7",
			},
		});
	}

	function content_ready_scripts() {
		$("[data-background]").each(function () {
			$(this).css(
				"background-image",
				"url(" + $(this).attr("data-background") + ")"
			);
		});
	}

	$(window).on("elementor/frontend/init", function () {
		if (elementorFrontend.isEditMode()) {
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/widget",
				function () {
					content_ready_scripts();
				}
			);
		} else {
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/widget",
				function () {
					content_ready_scripts();
				}
			);
		}
	});

	var quick_view = new Swiper(".gt-hotel-details-slider-nav", {
		loop: true,
		spaceBetween: 14,
		slidesPerView: 4,
		direction: 'vertical',
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'1024': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
				direction: 'vertical',
			},
			'991': {
				slidesPerView: 4,
				direction: 'horizontal',
			},
			'768': {
				slidesPerView: 4,
				direction: 'horizontal',
			},
			'577': {
				slidesPerView: 4,
				direction: 'horizontal',
			},
			'0': {
				slidesPerView: 3,
				direction: 'horizontal',
			},
		},
	});
	var swiper2 = new Swiper(".gt-hotel-details-slider-for", {
		loop: true,
		spaceBetween: 10,
		speed: 1000,
		slidesPerView: 1,
		thumbs: {
			swiper: quick_view,
		},
	});

	var slider = new Swiper(".gt-slider-area-6", {
		spaceBetween: 0,
		slidesPerView: 1,
		loop: true,
		effect: "fade",
		autoplay: {
			enabled: true,
			delay: 6000,
		},
		speed: 400,
		navigation: {
			prevEl: ".gt-main-prev-6",
			nextEl: ".gt-main-next-6",
		},
	});

	// client slider 
	var client_8_slider = new Swiper('.gt-client-8-slider', {
		spaceBetween: 100,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 2000
		},
		speed: 1000,
		breakpoints: {
			'1600': {
				slidesPerView: 7,
			},
			'1400': {
				slidesPerView: 6,
				spaceBetween: 80,
			},
			'1200': {
				slidesPerView: 5,
				spaceBetween: 80,
			},
			'992': {
				slidesPerView: 4,
				spaceBetween: 80,
			},
			'768': {
				slidesPerView: 4,
				spaceBetween: 80,
			},
			'576': {
				slidesPerView: 3,
				spaceBetween: 50,
			},
			'0': {
				slidesPerView: 2,
				spaceBetween: 60,
			},
		},
	});

	var gallery_8_slider = new Swiper('.gt-gallery-8-slider', {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3000,
		},
		effect: 'coverflow',
		centeredSlides: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 100,
			modifier: 2.5,
			slideShadows: false,
		},
		slidesPerView: 'auto',
		navigation: {
			nextEl: '.gt-gallery-8-next',
			prevEl: '.gt-gallery-8-prev',
		},
	});

	// place section animation 
	var ardh9 = gsap.timeline({
		
		scrollTrigger: {
			animation: ardh9,
			trigger: '.gt-place-8-wrap',
			start: "top 20%",
			end: "bottom 0%",
			scrub: 2,
			pin: true,
			pinSpacing: true,
			markers: false
		}

	});
	
	ardh9.to( ".place-thumb" , { opacity: 0, duration: 1 })
	.to( ".gt-place-8-wrap" , { gap: 30, duration: 3, delay: 2})
	.to( ".place_card_1" , { rotateY: 180, duration: 8, delay: 2})
	.to( ".place_card_2" , { rotateY: 180, duration: 12, delay: 3}, "2")
	.to( ".place-thumb" , { zIndex: -1, duration: 1 })
	.to( ".place_card_1" , { duration: 15, delay: 2})
	.to( ".place_card_2" , { duration: 17, delay: 2})


	// watch video 
	gsap.utils.toArray('.gt-video-8-wrap').forEach((el, index) => { 
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 80%",
				end: "buttom 60%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tl1
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: .7 }, {background: "inherit", scale: 1, duration: 1, immediateRender: false})
	})


	// pricing plan card 
	var p8__active_item = $(".gt-pricing-8-card");
  
    p8__active_item.mouseover(function () {
		p8__active_item.removeClass("active");
      	$(this).addClass("active");
    });


	// tranvel img 
	gsap.utils.toArray('.travel_8_img').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 80%",
				end: "top 60%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1,  y: "+=200"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});


	// scroll slide left 
	gsap.utils.toArray('.slide_left_1').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 40%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1,  x: "-=150"}, {opacity: 1, x: 0, duration: 2, immediateRender: false})
	});

	$(function () {
		$("#datepicker").datepicker();
	});

	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/go-booking-slider.default",
			bookingSliderActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/go-toure.default",
			tourActive
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/go-slider-two.default",
			sliderTwoActive
		);
	});
})(jQuery);