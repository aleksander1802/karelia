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
];

function ReelsSlider() {
	const [firstSwiper, setFirstSwiper] = useState<SwiperClass | null>(null);

	return (
		<div
			className={`relative flex flex-col pt-[275px] pl-[220px] ${styles.container}`}
		>
			<div className="font-mirra text-[90px] w-[175px] text-center leading-[50px] ">
				reels
			</div>

			<div className="relative">
				<Swiper
					modules={[Navigation, Pagination, Controller]}
					slidesPerView={1}
					spaceBetween={18}
					onSwiper={setFirstSwiper}
					width={359}
					controller={{ control: firstSwiper }}
					pagination={{
						type: 'fraction',
						el: '.swiper-pagination',
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
								className="bg-secondary_slider  h-[600px] rounded-xl block cursor-pointer hover:bg-[rgba(46,60,85,0.15)] "
							></Link>
						</SwiperSlide>
					))}
				</Swiper>

				<div className="highlight absolute top-0 left-[55%] translate-y-[-22%]  w-[1063px] h-[1063px] rounded-[100%] bg-[#313C50] blur-[257px] "></div>
				<div className="darklight absolute -bottom-[20%] left-[46%]  border-2 w-[996px] h-[3703px] opacity-[0.3] border-1 border-black bg-[#090E17] blur-[532px] z-0"></div>
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
						<LogoLink />
					</div>
				</div>
				<div className="pagination w-[356px] flex justify-end pr-[1rem] pt-[30px] font-poiret text-[66px] select-none">
					<div className="swiper-pagination z-10"></div>
				</div>
			</div>
		</div>
	);
}

export default ReelsSlider;
