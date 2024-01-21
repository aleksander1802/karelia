'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './territory-slider.module.css';
import TerritorySliderFirstImage from '/karelia/images/territory/territory_first.png';
import TerritorySliderSecondImage from '/karelia/images/territory/territory_second.png';
import TerritorySliderThirdImage from '/karelia/images/territory/territory_third.jpg';

const serviceData = [
	{
		image: TerritorySliderFirstImage,
	},
	{
		image: TerritorySliderSecondImage,
	},
	{
		image: TerritorySliderFirstImage,
	},
	{
		image: TerritorySliderSecondImage,
	},
	{
		image: TerritorySliderThirdImage,
	},
];

function TerritorySlider() {
	const slideWidth = 680;
	const slideHeight = 614;

	return (
		<div
			className="relative z-50
			xl:pt-[98px] lg:pt-[58px] sm:pt-[52px] pt-[48px]
			xl:pl-0 lg:pl-[38px]  
			select-none"
		>
			<Swiper
				modules={[Navigation, Controller]}
				slidesPerView={1.1}
				spaceBetween={8}
				breakpoints={{
					400: {
						slidesPerView: 1.6,
						spaceBetween: 23,
					},
					746: {
						slidesPerView: 3.4,
						spaceBetween: 23,
					},
				}}
				loop
				navigation={{
					nextEl: `.${styles['swiper-button-next']}`,
					prevEl: `.${styles['swiper-button-prev']}`,
				}}
			>
				{serviceData.map((item, index) => (
					<SwiperSlide key={index}>
						<Image
							src={item.image}
							width={slideWidth || 680}
							height={slideHeight || 614}
							alt={`Territory slider image ${index}`}
							priority
							style={{
								objectFit: 'cover',
							}}
							className="w-full 
							xl:h-[614px] lg:h-[481px] sm:h-[555px] h-[425px]
							"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={styles['swiper-navigation']}>
				<div className={styles['swiper-button-prev']}>
					<NavigationArrow className="xl:w-[38px] xl:h-[38px] w-[26px] h-[26px] lg:block hidden" />
				</div>
				<div className={styles['swiper-button-next']}>
					<NavigationArrow className="xl:w-[38px] xl:h-[38px] w-[26px] h-[26px] lg:block hidden" />
				</div>
			</div>
		</div>
	);
}

export default TerritorySlider;
