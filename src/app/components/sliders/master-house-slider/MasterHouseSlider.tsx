'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './master-house-slider.module.css';
import { useState } from 'react';

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
	const [activeIndex, setActiveIndex] = useState(1);

	const slideWidth = 580;
	const slideHeight = 576;

	const slideStyle = {
		width: '100%' || 580,
		height: slideHeight || 576,
	};

	const activeSlideWidth = 736;
	const activeSlideHeight = 612;

	const activeSlideStyle = {
		width: activeSlideWidth || 736,
		height: activeSlideHeight || 612,
	};

	const getActiveIndex = (index: number) => {
		setActiveIndex(index);
	};

	const getSlideStyle = (index: number) => {
		const isActive = index === activeIndex;

		return isActive ? activeSlideStyle : slideStyle;
	};

	return (
		<div
			className={`relative flex flex-col pt-[873px] ${styles.container}`}
		>
			<div className="relative">
				<span className="absolute left-[30px] -top-[363px] w-[175px] text-center font-mirra text-[538px] leading-[92%] text-secondary_slider inline-block select-none">
					M
				</span>
				<Swiper
					modules={[Navigation, Pagination, A11y]}
					slidesPerView={3}
					initialSlide={1}
					centeredSlides={true}
					slideNextClass={styles['next-slide']}
					wrapperClass={`swiper-wrapper ${styles['swiper-wrapper']}`}
					spaceBetween={0}
					onActiveIndexChange={(swiper) =>
						getActiveIndex(swiper.activeIndex)
					}
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
						<SwiperSlide
							key={index}
							// style={{
							// 	width:
							// 		index === activeIndex
							// 			? activeSlideWidth
							// 			: slideWidth,
							// }}
						>
							<Image
								src={item.link}
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
								alt={`Master house slider image ${index}`}
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
			</div>

			<div className={styles.control}>
				<div className="w-[732px] flex flex-row justify-between items-start">
					<p className="w-[230px] text-[70px] leading-[60%] text-accent font-poiret">
						Private lounge space
					</p>
					<p className="w-[356px] text-[20px]">
						Уютная усадьба в атмосфере первозданной природы, укрытая
						природой от окружения.
					</p>
				</div>

				<div className="pagination w-[356px] flex justify-end leading-[80%] font-poiret text-[66px] select-none">
					<div className={styles['swiper-pagination']}></div>
				</div>
			</div>
		</div>
	);
}

export default MasterHouseSlider;
