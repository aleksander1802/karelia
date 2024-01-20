'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Controller, Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './spa-house-slider.module.css';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';

const serviceData1 = [
	{
		link: '/karelia/images/master_house/slider_first.jpg',
	},
	{
		link: '/karelia/images/spa_house/spa_second_slider.png',
	},
	{
		link: '/karelia/images/spa_house/spa_third_slider.png',
	},
];

const serviceData2 = [
	{
		link: '/karelia/images/spa_house/spa_second_slider.png',
	},
	{
		link: '/karelia/images/spa_house/spa_third_slider.png',
	},
	{
		link: '/karelia/images/master_house/slider_first.jpg',
	},
];

const serviceData3 = [
	{
		link: '/karelia/images/spa_house/spa_third_slider.png',
	},
	{
		link: '/karelia/images/master_house/slider_first.jpg',
	},
	{
		link: '/karelia/images/spa_house/spa_second_slider.png',
	},
];

function SpaHouseSlider() {
	const slideWidth = 580;
	const slideHeight = 576;

	const activeSlideWidth = 736;
	const activeSlideHeight = 612;

	const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>();
	const [thirdSwiper, setThirdSwiper] = useState<SwiperType | null>();

	return (
		<div className="relative flex flex-row lg:mt-[873px] mt-[800px] items-center justify-center select-none">
			<div
				className="
				xl:w-[584px] lg:w-[389px] lg2:w-[502px] sm:w-[44px] w-[30px]
			"
			>
				<Swiper
					modules={[Pagination, A11y, Controller]}
					loop
					allowTouchMove={false}
					onSwiper={setFirstSwiper}
					pagination={{
						type: 'fraction',
						el: `.${styles['swiper-pagination']}`,
						clickable: true,
						formatFractionCurrent: (number) =>
							number > 9 ? number : '0' + number,
						formatFractionTotal: (number) =>
							number > 9 ? number : '0' + number,
					}}
				>
					{serviceData1.map((item, index) => (
						<SwiperSlide key={index}>
							<Image
								src={item.link}
								width={slideWidth}
								height={slideHeight}
								alt={`Spa house slider image ${index}`}
								style={{
									objectFit: 'cover',
								}}
								className="w-full opacity-[0.4]
								xl:h-[576px] lg:h-[448px] sm:h-[516px] h-[309px]"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="relative flex flex-col xl:w-[736px] lg:w-[573px] sm:w-[659px] w-[330px]">
				<div className="relative ">
					<Swiper
						modules={[Navigation, A11y, Controller]}
						loop
						controller={{
							control: firstSwiper &&
								thirdSwiper && [firstSwiper, thirdSwiper],
						}}
						navigation={{
							nextEl: `.${styles['swiper-button-next']}`,
							prevEl: `.${styles['swiper-button-prev']}`,
						}}
					>
						{serviceData2.map((item, index) => (
							<SwiperSlide key={index}>
								<Image
									src={item.link}
									width={activeSlideWidth || 745}
									height={activeSlideHeight || 612}
									alt={`Spa house slider image ${index}`}
									style={{
										objectFit: 'cover',
									}}
									className="w-full 
									xl:h-[612px] lg:h-[477px] sm:h-[548px] h-[328px]"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<div className="xl:w-[584px] lg:w-[396px] lg2:w-[502px] sm:w-[44px] w-[30px]">
				<Swiper
					modules={[A11y, Controller]}
					loop
					allowTouchMove={false}
					onSwiper={setThirdSwiper}
				>
					{serviceData3.map((item, index) => (
						<SwiperSlide key={index}>
							<Image
								src={item.link}
								width={slideWidth}
								height={slideHeight}
								alt={`Spa house slider image ${index}`}
								style={{
									objectFit: 'cover',
								}}
								className="w-full opacity-[0.4]
								xl:h-[576px] lg:h-[448px] sm:h-[516px] h-[309px]"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className={styles.control}>
				<div
					className="
					xl:w-[732px] lg:w-[589px] lg2:w-[712px]
					flex flex-row justify-between items-start"
				>
					<p
						className="hidden lg:block
						xl:w-[230px] lg:w-[178px]
						xl:text-[70px] lg:text-[50px] 
						leading-[60%]
						text-accent font-poiret"
					>
						Private lounge space
					</p>
					<p
						className="
						xl:w-[356px] w-[301px]  
						xl:text-[20px] text-[16px]"
					>
						Описание хамама
					</p>
				</div>

				<div
					className="pagination 
					absolute 
					bottom-[370px] sm:bottom-0
					right-[30px]
					sm:relative
					xl:w-[356px] lg:w-[276px]
					leading-[80%]
					xl:text-[66px] sm:text-[48px] text-[44px]
					flex 
					justify-end
					font-poiret 
					select-none"
				>
					<div
						className={`${styles['swiper-pagination']} text-secondary_slider w-max`}
					></div>
				</div>
			</div>

			<div className={`${styles['swiper-navigation']} z-100`}>
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

export default SpaHouseSlider;
