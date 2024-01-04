'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './guest-house-slider.module.css';
import { useState } from 'react';

const serviceData = [
	{
		image: '/images/guest_house/guest_house_first.png',
	},
	{
		image: '/images/guest_house/guest_house_second.png',
	},
	{
		image: '/images/guest_house/guest_house_third.png',
	},
	{
		image: '/images/guest_house/guest_house_second.png',
	},
	{
		image: '/images/guest_house/guest_house_third.png',
	},
];

function GuestHouseSlider() {
	const [activeIndex, setActiveIndex] = useState(0);

	const slideWidth = 555;
	const slideHeight = 655;

	const slideStyle = {
		width: slideWidth || 555,
		height: slideHeight || 655,
	};

	const activeSlideWidth = 733;
	const activeSlideHeight = 655;

	const activeSlideStyle = {
		width: activeSlideWidth || 733,
		height: activeSlideHeight || 655,
	};

	const getActiveIndex = (index: number) => {
		setActiveIndex(index);
	};

	const getSlideStyle = (index: number) => {
		const isActive = index === activeIndex;

		return isActive ? activeSlideStyle : slideStyle;
	};

	
	return (
		<Swiper
			modules={[Navigation, A11y]}
			onActiveIndexChange={(swiper) => getActiveIndex(swiper.activeIndex)}
			spaceBetween={20}
			centeredSlides
			slidesPerView={'auto'}
			className={styles['padding-right']}
			navigation={{
				nextEl: `.${styles['swiper-button-next']}`,
				prevEl: `.${styles['swiper-button-prev']}`,
			}}
		>
			{serviceData.map((item, index) => (
				<SwiperSlide
					key={index}
					className={
						styles[
							`${
								index === activeIndex
									? 'swiper-slide'
									: 'swiper-not-slide'
							}`
						]
					}
				>
					<Image
						src={item.image}
						width={
							index === activeIndex
								? activeSlideWidth
								: slideWidth
						}
						height={
							index === activeIndex
								? activeSlideHeight
								: slideHeight
						}
						alt={`Nature second slider image ${index}`}
						style={{
							...getSlideStyle(index),
							objectFit: 'cover',
						}}
					/>
				</SwiperSlide>
			))}
			<div className={`${styles['swiper-navigation']} z-100`}>
				<div className={styles['swiper-button-prev']}>
					<NavigationArrow />
				</div>
				<div className={styles['swiper-button-next']}>
					<NavigationArrow />
				</div>
			</div>
		</Swiper>
	);
}

export default GuestHouseSlider;
