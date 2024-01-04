'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './nature-first-slider.module.css';

const serviceData = [
	{
		image: '/images/nature_house/first_slider_first.png',
	},
	{
		image: '/images/nature_house/first_slider_second.png',
	},
	{
		image: '/images/nature_house/first_slider_third.png',
	},
	{
		image: '/images/nature_house/first_slider_fourth.png',
	},
	{
		image: '/images/nature_house/first_slider_first.png',
	},
];

function NatureFirstSlider() {
	const slideWidth = 485;
	const slideHeight = 532;

	const slideStyle = {
		width: slideWidth || 485,
		height: slideHeight || 532,
	};

	return (
		<div className={`relative flex flex-col mt-[223px] pl-[220px]`}>
			<div className="relative">
				<Swiper
					modules={[Navigation, Pagination, Controller]}
					slidesPerView={1}
					spaceBetween={20}
					width={slideWidth}
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
								src={item.image}
								width={slideWidth}
								height={slideHeight}
								alt={`Nature first slider image ${index}`}
								style={{ ...slideStyle, objectFit: 'cover' }}
								className="select-none"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className={styles.control}>
				<div className={styles['swiper-navigation']}>
					<div className={styles['swiper-button-prev']}>
						<NavigationArrow color="#805140" />
					</div>
					<div className={styles['swiper-button-next']}>
						<NavigationArrow color="#805140" />
					</div>
				</div>
				<div className="pagination w-[356px] flex justify-end pr-[1rem] pt-[16px] font-poiret text-[66px] select-none">
					<div
						className={`${styles['swiper-pagination']} z-10`}
					></div>
				</div>
			</div>
		</div>
	);
}

export default NatureFirstSlider;
