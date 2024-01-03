'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './nature-second-slider.module.css';
import { useState } from 'react';

const serviceData = [
	{
		image: '/images/nature_house/second_slider_first.png',
	},
	{
		image: '/images/nature_house/second_slider_second.png',
	},
	{
		image: '/images/nature_house/second_slider_first.png',
	},
	{
		image: '/images/nature_house/second_slider_second.png',
	},
	{
		image: '/images/nature_house/second_slider_first.png',
	},
];

function NatureSecondSlider() {
	const [activeIndex, setActiveIndex] = useState(0);

	const slideWidth = 356;
	const slideHeight = 375;

	const slideStyle = {
		width: slideWidth || 356,
		height: slideHeight || 375,
		position: 'absolute' as 'absolute',
		top: '-91px',
	};

	const activeSlideWidth = 753;
	const activeSlideHeight = 497;

	const activeSlideStyle = {
		width: activeSlideWidth || 753,
		height: activeSlideHeight || 497,
	};

	const getActiveIndex = (index: number) => {
		setActiveIndex(index);
	};

	const getSlideStyle = (index: number) => {
		const isActive = index === activeIndex;

		return isActive ? activeSlideStyle : slideStyle;
	};

	return (
		<div className={`relative flex flex-col mt-[269px]`}>
			<div className="relative ">
				<h2 className="absolute text-[220px] leading-[78%] font-mirra -tracking-[11px] text-accent left-[220px]">
					рядом
				</h2>
				<Swiper
					modules={[Navigation, Pagination, A11y]}
					slidesPerView={3}
					centeredSlides
					slideNextClass={styles['next-slide']}
					wrapperClass={`swiper-wrapper ${styles['swiper-wrapper']}`}
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
						<SwiperSlide key={index}>
							<div
								className={`bg-accent relative ${
									index === activeIndex ? '' : 'h-[478px]'
								}`}
							>
								<Image
									src={item.image}
									width={
										index === activeIndex
											? activeSlideWidth
											: slideWidth
									}
									priority
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
							</div>
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
				<div className="w-[1116px] flex flex-row justify-between items-start">
					<h2 className="text-[90px] leading-[96%] font-mirra -tracking-[4.5px]">
						Заповедник КИВАЧ
					</h2>
					<p className="w-[357px] text-[20px] leading-[140%]">
						Всё для того, чтобы можно было как следует помыться, все
						гости усадьбы будут самыми чистыми как никогда прежде
					</p>
				</div>

				<div className="pagination w-[356px] flex justify-end leading-[80%] font-poiret text-[66px] select-none">
					<div className={styles['swiper-pagination']}></div>
				</div>
			</div>
		</div>
	);
}

export default NatureSecondSlider;
