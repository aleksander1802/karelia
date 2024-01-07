'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './guest-house-slider.module.css';

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
	const slideWidthHeight = 655;
	const activeSlideWidth = 733;

	const slideStyle = {
		width: 'auto',
		height: slideWidthHeight || 655,
	};

	const activeSlideStyle = {
		width: '100%' || 733,
		height: slideWidthHeight || 655,
	};

	return (
		<div className="flex flex-row gap-[18px] select-none">
			<div className="w-[733px]">
				<Swiper
					modules={[Navigation, A11y]}
					slidesPerView={1}
					loop
					allowTouchMove={false}
					navigation={{
						nextEl: `.${styles['swiper-button-next']}`,
						prevEl: `.${styles['swiper-button-prev']}`,
					}}
				>
					{serviceData.map((item, index) => (
						<SwiperSlide key={index}>
							<Image
								src={item.image}
								width={activeSlideWidth}
								height={slideWidthHeight}
								alt={`Nature second slider image ${index}`}
								style={{
									...activeSlideStyle,
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
			</div>

			<div className="w-[615px]">
				<Swiper
					modules={[Navigation, A11y]}
					spaceBetween={18}
					slidesPerView={3}
					initialSlide={1}
					allowTouchMove={false}
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
								width={slideWidthHeight}
								height={slideWidthHeight}
								alt={`Nature second slider image ${index}`}
								style={{
									...slideStyle,
									objectFit: 'cover',
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default GuestHouseSlider;
