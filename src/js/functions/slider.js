import Swiper, { Pagination, Navigation } from "swiper";

Swiper.use([Pagination, Navigation]);

// Hero slider

const heroProgress = document.querySelector(".hero__progress-fill");
const heroFraction = document.querySelector(".hero__fraction");

const heroItem = document.querySelectorAll(".hero__item");
heroFraction.textContent = `1/${heroItem.length}`;

const heroSwiper = new Swiper(".hero__slider", {
	slidesPerView: 1,
	loop: true,
	allowTouchMove: false,
	pagination: {
		el: ".hero__pagination",
		clickable: true,
	},
});

heroProgress.addEventListener("animationend", heroProgressFunc);

function heroProgressFunc() {
	heroSwiper.slideNext();
	heroProgress.style.animation = "none";
	void heroProgress.offsetWidth;
	heroProgress.style.animation = null;
}

heroSwiper.on("slideChange", function () {
	heroFraction.textContent = `${heroSwiper.realIndex + 1}/${heroItem.length}`;

	heroProgress.style.animation = "none";
	void heroProgress.offsetWidth;
	heroProgress.style.animation = null;
	// heroProgress.style.animationPlayState = "paused";
	heroProgress.style.animationPlayState = "running";
});

// document.querySelectorAll(".hero__slider, .hero__progress").forEach((item) => {
// 	item.addEventListener("mouseenter", function () {
// 		heroProgress.style.animationPlayState = "paused";
// 	});
// });

// document.querySelectorAll(".hero__slider, .hero__progress").forEach((item) => {
// 	item.addEventListener("mouseleave", function () {
// 		heroProgress.style.animationPlayState = "running";
// 	});
// });

// Benefits slider
const benefitsProgress = document.querySelector(".benefits__progress-fill");
const benefitsFraction = document.querySelector(".benefits__fraction");

const benefitsItem = document.querySelectorAll(".benefits__item");
benefitsFraction.textContent = `1/${benefitsItem.length}`;

const benefitsSwiper = new Swiper(".benefits__slider", {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	allowTouchMove: false,
	navigation: {
		nextEl: ".benefits__arrow--next",
		prevEl: ".benefits__arrow--prev",
	},
	breakpoints: {
		376: {
			slidesPerView: "auto",
		},
	},
});

benefitsProgress.addEventListener("animationend", benefitsProgressFunc);

function benefitsProgressFunc() {
	benefitsSwiper.slideNext();
	benefitsProgress.style.animation = "none";
	void benefitsProgress.offsetWidth;
	benefitsProgress.style.animation = null;
}

benefitsSwiper.on("slideChange", function () {
	benefitsFraction.textContent = `${benefitsSwiper.realIndex + 1}/${
		benefitsItem.length
	}`;

	benefitsProgress.style.animation = "none";
	void benefitsProgress.offsetWidth;
	benefitsProgress.style.animation = null;
	// benefitsProgress.style.animationPlayState = "paused";
	benefitsProgress.style.animationPlayState = "running";
});

// document
// 	.querySelectorAll(".benefits__slider, .benefits__progress")
// 	.forEach((item) => {
// 		item.addEventListener("mouseenter", function () {
// 			benefitsProgress.style.animationPlayState = "paused";
// 		});
// 	});

// document
// 	.querySelectorAll(".benefits__slider, .benefits__progress")
// 	.forEach((item) => {
// 		item.addEventListener("mouseleave", function () {
// 			benefitsProgress.style.animationPlayState = "running";
// 		});
// 	});
