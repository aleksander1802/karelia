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
];

function TerritorySlider() {
	const slideWidth = 480;
	const slideHeight = 614;

	const slideStyle = {
		width: '100%' || 480,
		height: slideHeight || 614,
	};

	return (
		<div className="relative pt-[98px] select-none">
			<Swiper
				modules={[Navigation, Controller]}
				slidesPerView={1}
				spaceBetween={23}
				width={480}
				navigation={{
					nextEl: `.${styles['swiper-button-next']}`,
					prevEl: `.${styles['swiper-button-prev']}`,
				}}
			>
				{serviceData.map((item, index) => (
					<SwiperSlide key={index}>
						<Image
							src={item.title}
							width={slideWidth}
							height={slideHeight}
							alt={`Territory slider image ${index}`}
							style={{
								...slideStyle,
								objectFit: 'cover',
							}}
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
