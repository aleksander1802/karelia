'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Controller, Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './master-house-slider.module.css';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';

const serviceData1 = [
	{
		image: '/images/master_house/slider_first.jpg',
	},
	{
		image: '/images/master_house/master_house.png',
	},
	{
		image: '/images/master_house/slider_third.png',
	},
];

const serviceData2 = [
	{
		image: '/images/master_house/master_house.png',
	},
	{
		image: '/images/master_house/slider_third.png',
	},
	{
		image: '/images/master_house/slider_first.jpg',
	},
];

const serviceData3 = [
	{
		image: '/images/master_house/slider_third.png',
	},
	{
		image: '/images/master_house/slider_first.jpg',
	},
	{
		image: '/images/master_house/master_house.png',
	},
];

function MasterHouseSlider() {
	const slideWidth = 580;
	const slideHeight = 576;

	const activeSlideWidth = 736;
	const activeSlideHeight = 612;

	const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>();
	const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>();
	const [thirdSwiper, setThirdSwiper] = useState<SwiperType | null>();

	return (
		<div
			className="relative flex flex-row 
			xl:mt-[873px] lg:mt-[704px] sm:mt-[613px] mt-[942px]
			items-center justify-center
			select-none"
		>
			<span
				className="
				absolute
				xl:-top-[250px] lg:-top-[200px] sm:top-[-215px] -top-[156px]
				xl:left-[220px] lg:left-[95px] left-[45px]
				font-mirra
				text-secondary_slider
				xl:text-[538px] sm:text-[428px] text-[332px]
				leading-[50%]
				select-none
				z-0"
			>
				M
			</span>

			<div className="xl:w-[584px] lg:w-[389px] lg2:w-[502px] sm:w-[44px] w-[30px]">
				<Swiper
					modules={[Pagination, A11y, Controller]}
					slidesPerView={1}
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
								src={item.image}
								width={slideWidth || 580}
								height={slideHeight || 576}
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

			<div
				className='relative flex flex-col xl:w-[736px] lg:w-[573px] sm:w-[659px] w-[330px]'
			>
				<div className="relative">
					<Swiper
						modules={[Navigation, A11y, Controller]}
						loop
						onSwiper={setSecondSwiper}
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
									src={item.image}
									width={activeSlideWidth || 736}
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
					slidesPerView={1}
					loop
					allowTouchMove={false}
					onSwiper={setThirdSwiper}
				>
					{serviceData3.map((item, index) => (
						<SwiperSlide key={index}>
							<Image
								src={item.image}
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
					xl:w-[732px] lg:w-[579px] lg2:w-[702px]
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
						Уютная усадьба в атмосфере первозданной природы, укрытая
						природой от окружения.
					</p>
				</div>

				<div
					className="pagination 
					hidden 
					xl:w-[356px] lg:w-[276px]
					leading-[80%]
					xl:text-[66px] text-[48px] 
					sm:flex justify-end
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
					<NavigationArrow className="xl:w-[38px] xl:h-[38px] w-[26px] h-[26px] sm:block hidden" />
				</div>
				<div className={styles['swiper-button-next']}>
					<NavigationArrow className="xl:w-[38px] xl:h-[38px] w-[26px] h-[26px] sm:block hidden" />
				</div>
			</div>
		</div>
	);
}

export default MasterHouseSlider;
