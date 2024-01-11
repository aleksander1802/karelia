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
	const activeSlideWidth = 733;
	const slideWidthHeight = 655;

	return (
		<div className="flex flex-row gap-[18px] select-none">
			<div
				className="
			xl:w-[733px] lg2:w-[680px] lg:w-[573px]
			"
			>
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
								width={activeSlideWidth || 733}
								height={slideWidthHeight || 733}
								alt={`Nature second slider image ${index}`}
								style={{
									objectFit: 'cover',
								}}
								className="
								w-full
								xl:h-[655px] lg2:h-[560px] lg:h-[515px]
								"
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

			<div className="xl:w-[615px] lg2:w-[560px] lg:w-[400px]">
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
								width={activeSlideWidth}
								height={activeSlideWidth}
								alt={`Nature second slider image ${index}`}
								style={{
									objectFit: 'cover',
								}}
								className="
								w-full
								xl:h-[655px] lg2:h-[560px] lg:h-[515px]
								"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default GuestHouseSlider;
