'use client';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Controller, Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import LogoLink from '@/app/assets/svg/Logo-link-svg';
import Link from 'next/link';
import { useState } from 'react';
import styles from './reels.module.css';

const serviceData = [
	{
		link: 'https://www.youtube.com/watch?v=cpJ0jBTdP70',
	},
	{
		link: 'https://www.youtube.com/watch?v=cpJ0jBTdP70',
	},
	{
		link: 'https://www.youtube.com/watch?v=cpJ0jBTdP70',
	},
	{
		link: 'https://www.youtube.com/watch?v=cpJ0jBTdP70',
	},
	{
		link: 'https://www.youtube.com/watch?v=cpJ0jBTdP70',
	},
	{
		link: 'https://www.youtube.com/watch?v=cpJ0jBTdP70',
	},
];

function ReelsSlider() {
	return (
		<div className="flex flex-col 
		xl:mt-[275px] xl:pl-[220px]
		lg:mt-[175px] lg:pl-[100px]
		
		">
			<div className="font-mirra xl:text-[90px] lg:text-[78px] w-[175px] text-center xl:leading-[50px] lg:leading-[56%] ">
				reels
			</div>

			<div className="relative">
				<Swiper
					modules={[Navigation, Pagination]}
					slidesPerView={4.5}
					spaceBetween={18}
					loop
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
							<Link
								href={item.link}
								target="_blank"
								className="bg-secondary_slider 
								xl:h-[600px] lg:h-[459px] 
								rounded-xl block cursor-pointer hover:bg-[rgba(46,60,85,0.15)] "
							></Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className={styles.control}>
				<div className={styles['swiper-navigation']}>
					<div className={styles['swiper-button-prev']}>
						<NavigationArrow />
					</div>
					<div className={styles['swiper-button-next']}>
						<NavigationArrow />
					</div>
					<div className="absolute -bottom-1 right-1/2 translate-x-[50%]">
						<LogoLink className='
						xl:w-[231px] xl:h-[231px] 
						lg2:w-[190px] lg2:h-[190px]
						lg:w-[178px] lg:h-[178px]
						'/>
					</div>
				</div>
				<div className="xl:w-[356px] lg:w-[300px] 
				flex justify-end 
				xl:pr-[1rem] xl:pt-[30px] 
				lg2:pr-[2rem] lg2:pt-[20px] 
				lg:pr-[3rem] lg:pt-[10px] 
				font-poiret 
				xl:text-[66px] lg:text-[48px] 
				select-none">
					<div
						className={`${styles['swiper-pagination']}  z-10`}
					></div>
				</div>
			</div>
		</div>
	);
}

export default ReelsSlider;
