'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import NavigationArrow from '@/app/assets/svg/Arrow-svg';
import Image from 'next/image';
import styles from './nature-second-slider.module.css';
import NatureSecondSliderFirstImage from '../../../../../../public/images/nature_house/first_slider_first.png';
import NatureSecondSliderSecondImage from '../../../../../../public/images/nature_house/second_slider_first.png';
import NatureSecondSliderValaamFirstImage from '../../../../../../public/images/nature_house/valaam_1.jpg';
import NatureSecondSliderValaamSecondImage from '../../../../../../public/images/nature_house/valaam_2.jpg';
import NatureSecondSliderPaanFirstImage from '../../../../../../public/images/nature_house/paan_1.jpg';
import NatureSecondSliderPaanSecondImage from '../../../../../../public/images/nature_house/paan_2.jpg';
import NatureSecondSliderSolFirstImage from '../../../../../../public/images/nature_house/sol_1.jpg';
import NatureSecondSliderSolSecondImage from '../../../../../../public/images/nature_house/sol_2.jpg';
import NatureSecondSliderRusFirstImage from '../../../../../../public/images/nature_house/rus_1.jpg';
import NatureSecondSliderRusSecondImage from '../../../../../../public/images/nature_house/rus_2.jpg';

const serviceData = [
	{
		'first-image': NatureSecondSliderFirstImage,
		'second-image': NatureSecondSliderSecondImage,
		title: 'Заповедник КИВАЧ',
		description:
			'Всё для того, чтобы можно было как следует помыться, все гости усадьбы будут самыми чистыми как никогда прежде',
	},
	{
		'first-image': NatureSecondSliderValaamFirstImage,
		'second-image': NatureSecondSliderValaamSecondImage,
		title: 'Валаам',
		description:
			'Это не просто туристическое путешествие, это погружение в	уникальный мир, где время замедляется, а каждый момент становится ценным',
	},
	{
		'first-image': NatureSecondSliderPaanFirstImage,
		'second-image': NatureSecondSliderPaanSecondImage,
		title: 'Национальный парк Паанаярви',
		description:
			'Это не только заповедник биоразнообразия, но и исторический памятник, рассказывающий о	тысячелетия соседства человека и природы',
	},
	{
		'first-image': NatureSecondSliderSolFirstImage,
		'second-image': NatureSecondSliderSolSecondImage,
		title: 'Соловки',
		description:
			'История, величие природы и	духовность сливаются в удивительном сочетании на этом архипелаге',
	},
	{
		'first-image': NatureSecondSliderRusFirstImage,
		'second-image': NatureSecondSliderRusSecondImage,
		title: 'Парк Рускеала',
		description:
			'Подарите себе невероятное	путешествие в мир уникальных форм и цветов, дарованных	природой Карелии',
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
			xl:mt-[269px] sm:mt-[219px] mt-[100px]
			select-none
		`}
		>
			<div className="relative h-max">
				<h2
					className="absolute 
					lg:text-[220px] sm:text-[160px] text-[96px]
					leading-[78%] 
					font-mirra 
					-tracking-[11px] text-accent 
					xl:left-[220px] lg:left-[100px] sm:left-[40px] left-[30px]
					lg:top-0 sm:-top-[13px] top-[26px]
					"
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
								xl:pl-[220px] 
								lg:pl-[100px] 
								sm:pl-[40px]
								pl-[30px]
							"
							>
								<div
									className="flex flex-row items-end 
									xl:ml-[377px] lg:ml-[292px] sm:ml-[112px] ml-0
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
										priority
										className="
										xl:w-[753px] xl:h-[497px]
										lg:w-[596px] lg:h-[393px]
										sm:w-[456px] sm:h-[301px]
										w-[330px] h-[247px]
										"
									/>
									<div
										className="relative bg-accent w-full 
										xl:h-[478px] lg:h-[393px] sm:h-[300px] h-[247px]
									"
									>
										<Image
											src={item['second-image']}
											width={slideWidth || 356}
											height={slideHeight || 375}
											alt={`Nature second slider image ${index}`}
											priority
											className="
											xl:w-[356px] xl:h-[375px] 
											lg:w-[277px] lg:h-[291px] 
											w-[194px] h-[203px]
											object-cover
											xl:-top-[91px] lg:-top-[88px] top-0
											absolute z-30
											"
										/>
									</div>
								</div>

								<div
									className=" 
									xl:left-[240px] lg:left-[100px] 
									xl:w-[1116px] lg:w-[870px] sm:w-[547px] w-[332px]
									flex 
									lg:flex-row flex-col
									justify-between items-start 
									sm:pt-[18px] pt-[70px]
									gap-[20px]"
								>
									<h2
										className="
										xl:text-[90px] sm:text-[78px] text-[56px]
										leading-[96%] font-mirra 
										-tracking-[4.5px]"
									>
										{item.title}
									</h2>
									<p
										className="
										xl:w-[357px] lg:w-[277px] w-[280px]
										xl:text-[20px] text-[16px] 
										sm:self-center
										leading-[140%]"
									>
										{item.description}
									</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className={styles.control}>
					<div
						className="pagination 
						w-[356px] 
						flex 
						sm:justify-end 
						leading-[80%] font-poiret 
						xl:text-[66px] sm:text-[48px] text-[44px]						
						select-none"
					>
						<div className={styles['swiper-pagination']}></div>
					</div>
				</div>
				<div
					className={`${styles['swiper-navigation']} lg:block hidden`}
				>
					<div className={styles['swiper-button-prev']}>
						<NavigationArrow className="fillArrow xl:w-[38px] xl:h-[38px] w-[26px] h-[26px] lg:block hidden" />
					</div>
					<div className={styles['swiper-button-next']}>
						<NavigationArrow className="fillArrow xl:w-[38px] xl:h-[38px] w-[26px] h-[26px] lg:block hidden" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default NatureSecondSlider;
