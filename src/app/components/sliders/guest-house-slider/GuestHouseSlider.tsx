'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Controller } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './guest-house-slider.module.css';

import type { Swiper as SwiperType } from 'swiper';
import { useState } from 'react';

const serviceData1 = [
	{
		image: '/karelia/images/guest_house/guest_house_first.png',
	},
	{
		image: '/karelia/images/guest_house/guest_house_second.png',
	},
	{
		image: '/karelia/images/guest_house/guest_house_third.png',
	},
	{
		image: '/karelia/images/guest_house/guest_house_second.png',
	},
];
const serviceData2 = [
	{
		image: '/karelia/images/guest_house/guest_house_second.png',
	},
	{
		image: '/karelia/images/guest_house/guest_house_third.png',
	},
	{
		image: '/karelia/images/guest_house/guest_house_second.png',
	},
	{
		image: '/karelia/images/guest_house/guest_house_first.png',
	},
];
const serviceData3 = [
	{
		image: '/karelia/images/guest_house/guest_house_third.png',
	},
	{
		image: '/karelia/images/guest_house/guest_house_second.png',
	},
	{
		image: '/karelia/images/guest_house/guest_house_first.png',
	},
	{
		image: '/karelia/images/guest_house/guest_house_second.png',
	},
];
const serviceData4 = [
	{
		image: '/karelia/images/guest_house/guest_house_second.png',
	},
	{
		image: '/karelia/images/guest_house/guest_house_first.png',
	},
	{
		image: '/karelia/images/guest_house/guest_house_second.png',
	},
	{
		image: '/karelia/images/guest_house/guest_house_third.png',
	},
];

function GuestHouseSlider() {
	const activeSlideWidth = 733;
	const slideWidthHeight = 655;

	const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>();
	const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>();
	const [thirdSwiper, setThirdSwiper] = useState<SwiperType | null>();

	return (
		<div className="flex flex-row sm:gap-[18px] gap-[8px] select-none">
			<div
				className="xl:w-[733px] lg2:w-[680px] lg:w-[573px] sm:w-[662px] w-[331px] overflow-hidden
			"
			>
				<Swiper
					modules={[Navigation, A11y, Controller]}
					loop
					controller={{
						control: firstSwiper &&
							secondSwiper &&
							thirdSwiper && [
								firstSwiper,
								secondSwiper,
								thirdSwiper,
							],
					}}
					navigation={{
						nextEl: `.${styles['swiper-button-next']}`,
						prevEl: `.${styles['swiper-button-prev']}`,
					}}
				>
					{serviceData1.map((item, index) => (
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
								xl:h-[655px] lg2:h-[560px] lg:h-[515px] sm:h-[590px] h-[296px]
								"
							/>
						</SwiperSlide>
					))}
					<div className={`${styles['swiper-navigation']} z-100`}>
						<div className={styles['swiper-button-prev']}>
							<NavigationArrow className="xl:w-[38px] xl:h-[38px] w-[26px] h-[26px] sm:block hidden" />
						</div>
						<div className={styles['swiper-button-next']}>
							<NavigationArrow className="xl:w-[38px] xl:h-[38px] w-[26px] h-[26px] sm:block hidden" />
						</div>
					</div>
				</Swiper>
			</div>

			<div className="xl:w-[182px] lg2:w-[162px] w-[142px]">
				<Swiper
					modules={[A11y, Controller]}
					allowTouchMove={false}
					loop
					onSwiper={setFirstSwiper}
				>
					{serviceData2.map((item, index) => (
						<SwiperSlide key={index}>
							<Image
								src={item.image}
								width={activeSlideWidth}
								height={activeSlideWidth}
								alt={`Nature second slider image ${index}`}
								style={{
									objectFit: 'cover',
								}}
								className="opacity-[0.4]	
								w-full								
								xl:h-[655px] lg2:h-[560px] lg:h-[515px] sm:h-[590px] h-[296px]
								"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="xl:w-[182px] lg2:w-[162px] w-[142px]">
				<Swiper
					modules={[A11y, Controller]}
					allowTouchMove={false}
					loop
					onSwiper={setSecondSwiper}
				>
					{serviceData3.map((item, index) => (
						<SwiperSlide key={index}>
							<Image
								src={item.image}
								width={activeSlideWidth}
								height={activeSlideWidth}
								alt={`Nature second slider image ${index}`}
								style={{
									objectFit: 'cover',
								}}
								className="opacity-[0.4]	
								w-full								
								xl:h-[655px] lg2:h-[560px] lg:h-[515px] sm:h-[590px] h-[296px]
								"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="xl:w-[182px] lg2:w-[162px] w-[142px]">
				<Swiper
					modules={[A11y, Controller]}
					allowTouchMove={false}
					loop
					onSwiper={setThirdSwiper}
				>
					{serviceData4.map((item, index) => (
						<SwiperSlide key={index}>
							<Image
								src={item.image}
								width={activeSlideWidth}
								height={activeSlideWidth}
								alt={`Nature second slider image ${index}`}
								style={{
									objectFit: 'cover',
								}}
								className="opacity-[0.4]	
								w-full								
								xl:h-[655px] lg2:h-[560px] lg:h-[515px] sm:h-[590px] h-[296px]
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
