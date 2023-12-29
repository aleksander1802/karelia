'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './reels.css';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import LogoLink from '@/app/assets/svg/Logo-link-svg';
import Link from 'next/link';

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

const ReelsSlider = () => {
	return (
		<div className="relative flex flex-col pt-[275px] pl-[220px] pb-[220px] z-30">
			<div className="font-mirra text-[90px] w-[175px] text-center leading-[50px] ">
				reels
			</div>

			<div className="relative">
				<Swiper
					modules={[Navigation, Pagination]}
					slidesPerView={1}
					spaceBetween={18}
					pagination={{
						type: 'fraction',
						el: '.swiper-pagination',
						bulletActiveClass: '',
						clickable: true,
						formatFractionCurrent: function (number) {
							return number > 9 ? number : '0' + number;
						},
						formatFractionTotal: function (number) {
							return number > 9 ? number : '0' + number;
						},
					}}
					width={359}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
				>
					{serviceData.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<Link
									href={item.link}
									target="_blank"
									className="bg-secondary_slider  h-[600px] rounded-xl block cursor-pointer hover:bg-[rgba(46,60,85,0.15)] "
								></Link>
							</SwiperSlide>
						);
					})}
				</Swiper>

				<div className="highlight absolute top-0 left-[55%] translate-y-[-22%]  w-[1063px] h-[1063px] rounded-[100%] bg-[#313C50] blur-[257px]"></div>
				<div className="darklight absolute -bottom-[20%] left-[46%]  border-2 w-[996px] h-[3703px] opacity-[0.3] border-1 border-black bg-[#090E17] blur-[532px]"></div>
			</div>

			<div className="control">
				<div className="swiper-navigation">
					<div className="swiper-button-next">
						<NavigationArrow />
					</div>
					<div className="swiper-button-prev">
						<NavigationArrow />
					</div>
					<div className="absolute -bottom-1 right-1/2 translate-x-[50%]">
						<LogoLink className="z-10" />
					</div>
				</div>
				<div className="pagination w-[356px] flex justify-end pr-[1rem] pt-[30px] font-poiret text-[66px] text-secondary_slider select-none">
					<div className="swiper-pagination"></div>
				</div>
			</div>
		</div>
	);
};

export default ReelsSlider;
