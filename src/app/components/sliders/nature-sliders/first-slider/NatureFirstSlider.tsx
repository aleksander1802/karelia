'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './nature-first-slider.module.css';

const serviceData = [
	{
		image: '/images/nature_house/first_slider_first.png',
	},
	{
		image: '/images/nature_house/first_slider_second.png',
	},
	{
		image: '/images/nature_house/first_slider_third.png',
	},
	{
		image: '/images/nature_house/first_slider_fourth.png',
	},
	{
		image: '/images/nature_house/first_slider_fifth.jpg',
	},
];

function NatureFirstSlider() {
	const slideWidth = 485;
	const slideHeight = 532;

	return (
		<div
			className={`relative flex flex-col 
		xl:mt-[223px] lg:mt-[126px] 
		xl:pl-[220px] lg:pl-[98px]
		`}
		>
			<div className="relative">
				<Swiper
					modules={[Navigation, Pagination, Controller]}
					slidesPerView={3.5}
					spaceBetween={20}
					freeMode
					loop
					pagination={{
						type: 'fraction',
						el: `.${styles['swiper-pagination']}`,
						clickable: true,
						formatFractionCurrent: (number) =>
							number > 9 ? number : '0' + number,
						formatFractionTotal: (number) =>
							number > 9 ? number : '0' + number,
					}}
					navigation={{
						nextEl: `.${styles['swiper-button-next']}`,
						prevEl: `.${styles['swiper-button-prev']}`,
					}}
				>
					{serviceData.map((item, index) => (
						<SwiperSlide key={index}>
							<Image
								src={item.image}
								width={slideWidth}
								height={slideHeight}
								alt={`Nature first slider image ${index}`}
								style={{ objectFit: 'cover' }}
								className="select-none 
								xl:w-[485px] xl:h-[532px]
								lg2:w-[425px] lg2:h-[473px]
								lg:w-[375px] lg:h-[413px]
								"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className={styles.control}>
				<div className={styles['swiper-navigation']}>
					<div className={styles['swiper-button-prev']}>
						<NavigationArrow className="fill-accent" />
					</div>
					<div className={styles['swiper-button-next']}>
						<NavigationArrow className="fill-accent" />
					</div>
				</div>
				<div className="pagination w-[356px] flex justify-end pr-[1rem] pt-[16px] font-poiret text-[66px] select-none">
					<div
						className={`${styles['swiper-pagination']} z-10`}
					></div>
				</div>
			</div>
		</div>
	);
}

export default NatureFirstSlider;
