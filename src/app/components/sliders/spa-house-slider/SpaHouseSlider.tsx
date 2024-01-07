'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './spa-house-slider.module.css';

const serviceData = [
	{
		link: '/images/master_house/slider_first.jpg',
	},
	{
		link: '/images/spa_house/spa_second_slider.png',
	},
	{
		link: '/images/spa_house/spa_third_slider.png',
	},
];

function SpaHouseSlider() {
	const slideWidth = 580;
	const slideHeight = 576;

	const slideStyle = {
		width: '100%' || 580,
		height: slideHeight || 576,
	};

	const activeSlideWidth = 745;
	const activeSlideHeight = 612;

	const activeSlideStyle = {
		width: '100%' || 745,
		height: activeSlideHeight || 612,
	};

	return (
		<div className="relative flex flex-row mt-[873px] items-center">
			<div className="w-[584px]">
				<Swiper
					modules={[Navigation, Pagination, A11y]}
					slidesPerView={1}
					initialSlide={0}
					speed={1000}
					loop
					slideNextClass={styles['next-slide']}
					allowTouchMove={false}
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
								src={item.link}
								width={slideWidth}
								height={slideHeight}
								alt={`Spa house slider image ${index}`}
								style={{
									...slideStyle,
									objectFit: 'cover',
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className={`relative flex flex-col w-[736px]`}>
				<div className="relative ">
					<Swiper
						modules={[Navigation, A11y]}
						slidesPerView={1}
						initialSlide={1}
						speed={1000}
						loop
						slideNextClass={styles['next-slide']}
						allowTouchMove={false}
						navigation={{
							nextEl: `.${styles['swiper-button-next']}`,
							prevEl: `.${styles['swiper-button-prev']}`,
						}}
					>
						{serviceData.map((item, index) => (
							<SwiperSlide key={index}>
								<Image
									src={item.link}
									width={activeSlideWidth}
									height={activeSlideHeight}
									alt={`Spa house slider image ${index}`}
									style={{
										...activeSlideStyle,
										objectFit: 'cover',
									}}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<div className="w-[584px]">
				<Swiper
					modules={[Navigation, A11y]}
					slidesPerView={1}
					initialSlide={2}
					speed={1000}
					loop
					slideNextClass={styles['next-slide']}
					allowTouchMove={false}
					navigation={{
						nextEl: `.${styles['swiper-button-next']}`,
						prevEl: `.${styles['swiper-button-prev']}`,
					}}
				>
					{serviceData.map((item, index) => (
						<SwiperSlide key={index}>
							<Image
								src={item.link}
								width={slideWidth}
								height={slideHeight}
								alt={`Spa house slider image ${index}`}
								style={{
									...slideStyle,
									objectFit: 'cover',
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className={styles.control}>
				<div className="w-[732px] flex flex-row justify-between items-start">
					<p className="w-[230px] text-[70px] leading-[60%] text-accent font-poiret">
						Private lounge space
					</p>
					<p className="w-[356px] text-[20px]">Описание хамама</p>
				</div>

				<div className="pagination w-[356px] flex justify-end leading-[80%] font-poiret text-[66px] select-none">
					<div className={styles['swiper-pagination']}></div>
				</div>
			</div>

			<div className={`${styles['swiper-navigation']} z-100`}>
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

export default SpaHouseSlider;
