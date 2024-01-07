'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './nature-second-slider.module.css';

const serviceData = [
	{
		'first-image': '/images/nature_house/second_slider_first.png',
		'second-image': '/images/nature_house/second_slider_second.png',
		title: 'Заповедник КИВАЧ',
		description:
			'Всё для того, чтобы можно было как следует помыться, все гости усадьбы будут самыми чистыми как никогда прежде',
	},
	{
		'first-image': '/images/nature_house/second_slider_first.png',
		'second-image': '/images/nature_house/second_slider_second.png',
		title: 'Заповедник Другой',
		description:
			'Всё для того, чтобы можно было как следует помыться, все гости усадьбы будут самыми чистыми как никогда прежде',
	},
	{
		'first-image': '/images/nature_house/second_slider_first.png',
		'second-image': '/images/nature_house/second_slider_second.png',
		title: 'Заповедник Третий',
		description:
			'Всё для того, чтобы можно было как следует помыться, все гости усадьбы будут самыми чистыми как никогда прежде',
	},
	{
		'first-image': '/images/nature_house/second_slider_first.png',
		'second-image': '/images/nature_house/second_slider_second.png',
		title: 'Заповедник Четвёртый',
		description:
			'Всё для того, чтобы можно было как следует помыться, все гости усадьбы будут самыми чистыми как никогда прежде',
	},
	{
		'first-image': '/images/nature_house/second_slider_first.png',
		'second-image': '/images/nature_house/second_slider_second.png',
		title: 'Заповедник Пятый',
		description: 'Описание конечно нужно изменить будет',
	},
];

function NatureSecondSlider() {
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

	return (
		<div className={`relative flex flex-col mt-[269px]`}>
			<div className="relative ">
				<h2 className="absolute text-[220px] leading-[78%] font-mirra -tracking-[11px] text-accent left-[220px]">
					рядом
				</h2>
				<Swiper
					modules={[Navigation, Pagination, A11y]}
					slidesPerView={1}
					loop
					wrapperClass={`swiper-wrapper ${styles['swiper-wrapper']}`}
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
							<div className="pl-[220px] pb-[130px]">
								<div className="flex flex-row items-end ml-[377px]">
									<Image
										src={item['first-image']}
										width={activeSlideWidth}
										height={activeSlideHeight}
										alt={`Nature second slider image ${index}`}
										style={{
											...activeSlideStyle,
											objectFit: 'cover',
										}}
									/>
									<div className="relative bg-accent w-full h-[478px]">
										<Image
											src={item['second-image']}
											width={activeSlideWidth}
											height={activeSlideHeight}
											alt={`Nature second slider image ${index}`}
											style={{
												...slideStyle,
												objectFit: 'cover',
											}}
										/>
									</div>
								</div>

								<div className="absolute left-[240px]  w-[1116px] flex flex-row justify-between items-start pt-[18px]">
									<h2 className="text-[90px] leading-[96%] font-mirra -tracking-[4.5px]">
										{item.title}
									</h2>
									<p className="w-[357px] text-[20px] leading-[140%]">
										{item.description}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={styles.control}>
					<div className="pagination w-[356px] flex justify-end leading-[80%] font-poiret text-[66px] select-none">
						<div className={styles['swiper-pagination']}></div>
					</div>
				</div>
				<div className={`${styles['swiper-navigation']}`}>
					<div className={styles['swiper-button-prev']}>
						<NavigationArrow />
					</div>
					<div className={styles['swiper-button-next']}>
						<NavigationArrow />
					</div>
				</div>
			</div>
		</div>
	);
}

export default NatureSecondSlider;
