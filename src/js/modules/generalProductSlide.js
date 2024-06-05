import Swiper from "swiper/bundle"
import "swiper/css/bundle"

export default function generalProductSlide() {
	const swiperElement = document.querySelector('.general-product__slider')

	if (swiperElement) {
		const swiper = new Swiper(swiperElement, {
			slidesPerView: 4.095,
			grid: {
				rows: 2,
				fill: "row",
			},
			spaceBetween: 24,
			pagination: {
				clickable: true,
			},
			navigation: {
        nextEl: ".general-product__button-next",
        prevEl: ".general-product__button-prev",
      },
		})
	}
}