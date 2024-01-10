'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './master-house-slider.module.css';

const serviceData = [
	{
		link: '/images/master_house/slider_first.jpg',
	},
	{
		link: '/images/master_house/master_house.png',
	},
	{
		link: '/images/master_house/slider_third.png',
	},
];

function MasterHouseSlider() {
	const slideWidth = 580;
	const slideHeight = 576;

	const activeSlideWidth = 736;
	const activeSlideHeight = 612;

	return (
		<div className="relative flex flex-row xl:mt-[873px] lg:mt-[704px] items-center justify-center">
			<span className='
			absolute
			xl:-top-[250px] lg:-top-[200px]
			xl:left-[220px] lg:left-[95px]
			font-mirra
			text-secondary_slider
			xl:text-[538px] lg:text-[428px] 
			leading-[50%]
			select-none
			'>M</span>
			<div className="xl:w-[584px] lg:w-[389px] lg2:w-[502px]">
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
								width={slideWidth || 580}
								height={slideHeight || 576}
								alt={`Spa house slider image ${index}`}
								style={{
									objectFit: 'cover',
								}}
								className="w-full
								xl:h-[576px] 
								lg:h-[448px]"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className={`relative flex flex-col xl:w-[736px] lg:w-[573px]`}>
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
									width={activeSlideWidth || 736}
									height={activeSlideHeight || 612}
									alt={`Spa house slider image ${index}`}
									style={{
										objectFit: 'cover',
									}}
									className="w-full xl:h-[612px] 
								 lg:h-[477px]"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<div className="xl:w-[584px] lg:w-[396px] lg2:w-[502px]">
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
									objectFit: 'cover',
								}}
								className="w-full 
								xl:h-[576px] 
								lg:h-[448px]"
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
						className="
					xl:w-[230px] lg:w-[178px]
					xl:text-[70px] lg:text-[50px] 
					leading-[60%]
					 text-accent font-poiret"
					>
						Private lounge space
					</p>
					<p
						className="
						xl:w-[356px] lg:w-[301px]  
						xl:text-[20px] lg:text-[16px]"
					>
						Уютная усадьба в атмосфере первозданной природы, укрытая
						природой от окружения.
					</p>
				</div>

				<div
					className="pagination 
				xl:w-[356px] lg:w-[276px]
				leading-[80%]
				xl:text-[66px] lg:text-[48px] 
				flex justify-end
				font-poiret 
				select-none"
				>
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

export default MasterHouseSlider;
