'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './territory-slider.module.css';

const serviceData = [
	{
		title: '/images/territory/territory_first.png',
	},
	{
		title: '/images/territory/territory_second.png',
	},
	{
		title: '/images/territory/territory_first.png',
	},
	{
		title: '/images/territory/territory_second.png',
	},
	{
		title: '/images/territory/territory_third.jpg',
	},
];

function TerritorySlider() {
	const slideWidth = 680;
	const slideHeight = 614;

	return (
		<div className="relative 
		xl:pt-[98px]  lg:pt-[58px]
		xl:pl-0  lg:pl-[38px]  
		select-none">
			<Swiper
				modules={[Navigation, Controller]}
				slidesPerView={3.4}
				spaceBetween={23}
				loop
				navigation={{
					nextEl: `.${styles['swiper-button-next']}`,
					prevEl: `.${styles['swiper-button-prev']}`,
				}}
			>
				{serviceData.map((item, index) => (
					<SwiperSlide key={index}>
						<Image
							src={item.title}
							width={slideWidth || 680}
							height={slideHeight || 614}
							alt={`Territory slider image ${index}`}
							style={{
								objectFit: 'cover',
							}}
							className="w-full 
							xl:h-[614px] lg:h-[481px]
							"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={styles['swiper-navigation']}>
				<div className={styles['swiper-button-prev']}>
					<NavigationArrow />
				</div>
				<div className={styles['swiper-button-next']}>
					<NavigationArrow />
				</div>
			</div>
		</div>
	);
}

export default TerritorySlider;
