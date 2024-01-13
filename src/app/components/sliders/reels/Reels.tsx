'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import LogoLink from '@/app/assets/svg/Logo-link-svg';
import Link from 'next/link';
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
		<div
			className="flex flex-col 
		xl:pt-[275px] xl:pl-[220px] sm:pl-[40px] pl-[30px]
		lg:pt-[175px] lg:pl-[100px] sm:pt-[187px] pt-[126px]
		overflow-hidden		
		"
		>
			<div
				className="font-mirra 
			xl:text-[90px] text-[78px] sm:w-[175px] w-[156px] text-center 
			leading-[50%]"
			>
				reels
			</div>

			<div className="relative w-full">
				<Swiper
					modules={[Navigation, Pagination]}
					slidesPerView={4.5}
					spaceBetween={18}
					loop
					className="w-[1220px] lg:w-full"
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
								xl:h-[600px] h-[459px] 
								rounded-xl block cursor-pointer hover:bg-[rgba(46,60,85,0.15)] "
							></Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div
				className={`${styles.control} w-full xl:pr-[220px] sm:pr-[40px] pr-[30px]`}
			>
				<div
					className={`${styles['swiper-navigation']} h-full pt-[10px] lg2:pt-[20px] xl:pt-[43px]`}
				>
					<div className={styles['swiper-button-prev']}>
						<NavigationArrow className="xl:w-[38px] xl:h-[38px] w-[26px] h-[26px] sm:block hidden" />
					</div>
					<div className={styles['swiper-button-next']}>
						<NavigationArrow className="xl:w-[38px] xl:h-[38px] w-[26px] h-[26px] sm:block hidden" />
					</div>
					<div
						className="absolute 
						xl:-bottom-[65%] lg:-bottom-[165%] sm:-bottom-[165%] -bottom-[765%]
						sm:right-1/2 
						sm:translate-x-[50%] translate-x-0
						"
					>
						<LogoLink
							className="
						xl:w-[231px] xl:h-[231px] 
						lg2:w-[190px] lg2:h-[190px]
						sm:w-[178px] sm:h-[178px]
						w-[157px] h-[157px]

						"
						/>
					</div>
				</div>
				<div
					className="xl:w-[356px] lg:w-[300px] 
				flex justify-end 
				xl:pr-[1rem] xl:pt-[30px] 
				lg2:pr-[2rem] lg2:pt-[20px] 
				lg:pr-[3rem] pt-0 
				font-poiret 
				xl:text-[66px] sm:text-[48px] text-[44px]
				select-none
				"
				>
					<div
						className={`${styles['swiper-pagination']} z-10 text-secondary_slider w-max`}
					></div>
				</div>
			</div>
		</div>
	);
}

export default ReelsSlider;
