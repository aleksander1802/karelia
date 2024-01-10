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

	const activeSlideWidth = 753;
	const activeSlideHeight = 497;

	return (
		<div
			className={`relative flex flex-col 
		xl:mt-[269px] lg:mt-[219px]
		`}
		>
			<div className="relative ">
				<h2
					className="absolute 
				text-[220px] 
				leading-[78%] 
				font-mirra 
				-tracking-[11px] text-accent 
				xl:left-[220px] lg:left-[100px] "
				>
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
							<div
								className="
							xl:pl-[220px] xl:pb-[130px]
							lg:pl-[100px] lg:pb-[130px]
							"
							>
								<div
									className="flex flex-row items-end 
								xl:ml-[377px] lg:ml-[292px]
								"
								>
									<Image
										src={item['first-image']}
										width={activeSlideWidth || 753}
										height={activeSlideHeight || 497}
										alt={`Nature second slider image ${index}`}
										style={{
											objectFit: 'cover',
										}}
										className="
										xl:w-[753px] xl:h-[497px]
										lg:w-[596px] lg:h-[393px]

										"
									/>
									<div className="relative bg-accent w-full 
									xl:h-[478px] lg:h-[393px]
									">
										<Image
											src={item['second-image']}
											width={slideWidth || 356}
											height={slideHeight || 375}
											alt={`Nature second slider image ${index}`}
											
											className="
											xl:w-[356px] xl:h-[375px] 
											lg:w-[277px] lg:h-[291px] 
											object-cover
											xl:-top-[91px] lg:-top-[88px]
											 absolute
											"
										/>
									</div>
								</div>

								<div className="absolute 
								xl:left-[240px] lg:left-[100px]
								xl:w-[1116px] lg:w-[870px]
								flex flex-row justify-between items-start pt-[18px]">
									<h2 className="
									xl:text-[90px] lg:text-[78px]

									leading-[96%] font-mirra -tracking-[4.5px]">
										{item.title}
									</h2>
									<p className="
									xl:w-[357px] lg:w-[277px] 
									xl:text-[20px] lg:text-[16px]
									leading-[140%]">
										{item.description}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={styles.control}>
					<div className="pagination w-[356px] flex justify-end leading-[80%] font-poiret 
					xl:text-[66px] lg:text-[48px]
					select-none">
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
