'use client';

import LocationButtonSvg from '@/app/assets/svg/Location-button-svg';
import PlaneSvg from '@/app/assets/svg/Plane-svg';
import TrainSvg from '@/app/assets/svg/Train-svg';
import React from 'react';

interface LocationRangeInterface {
	range: string;
	description: string;
}

export default function EsateLocation() {
	const redirectToMap = () => {
		window.open('https://yandex.ru/maps', '_blank');
	};

	const locationRange = [
		{
			range: '1000 км',
			description: 'От Москвы',
		},
		{
			range: '400 км',
			description: 'От Санкт-Петербурга',
		},
		{
			range: '30 км',
			description: 'от Петрозаводска',
		},
		{
			range: '10 км',
			description: 'Аэропорт Бесовец',
		},
	];

	const LocationRange = ({
		locationRange,
	}: {
		locationRange: LocationRangeInterface[];
	}) => {
		const range = locationRange.map((item, index) => (
			<li
				key={index}
				className="flex flex-col 
				xl:gap-[18px] lg:gap-5 gap-2
				xl:w-[356px] lg2:w-[330px] lg:w-[277px] sm:w-[209px] w-[244px]"
			>
				<span
					className="font-poiret 
				xl:text-[65px] sm:text-[56px] text-[44px]
				leading-[50px] 
				-tracking-[3.25px]"
				>
					{item.range}
				</span>
				<span
					className="
				xl:text-[24px] text-[18px]
				font-extralight 
				leading-[80%] text-secondary"
				>
					{item.description}
				</span>
			</li>
		));

		return (
			<ul
				className="lg:mt-[186px] sm:mt-[84px] mt-[75px]
				flex flex-row flex-wrap 
				lg:gap-[20px] sm:gap-x-[134px] sm:gap-y-[58px] lg:gap-x-0 gap-[32px] "
			>
				{range}
			</ul>
		);
	};

	return (
		<div id="Расположение">
			<div
				className="
				xl:pl-[220px] lg:pl-[100px] sm:px-[40px] px-[30px]
				xl:pr-[220px] lg:pr-[100px] 
				xl:mt-[285px] lg:mt-[170px] sm:mt-[202px] mt-[50px]
			"
			>
				<div
					className="relative z-50
					flex 
					lg:flex-row 
					flex-col-reverse
					lg:gap-0 sm:gap-[65px] gap-[49px]		
					justify-between"
				>
					<p
						className="relative z-30
						xl:w-[409px] lg:w-[325px] sm:w-[319px]							 
						xl:text-[20px] text-[16px]							
						leading-[140%] 
						"
					>
						Усадьба расположена на первой линии живописного озера
						Ушкозера, напротив дачи Б.Н.Ельцина по воде
					</p>
					<h2
						className="h2 lg:-tracking-[4.5px] -tracking-[2px]
						lg:text-[90px] sm:text-[78px] text-[58px]
					"
					>
						Расположение
					</h2>
				</div>

				<LocationRange locationRange={locationRange} />
			</div>

			<div
				className="relative lg:mt-[196px] sm:mt-[137px] mt-[294px]			
			"
			>
				<div
					className="absolute 
					-top-1/2 -translate-y-[90%]
					lg:-translate-y-1/2 sm:-translate-y-[75%]					
					
					left-1/2 -translate-x-1/2
					xl:w-[1500px] lg:w-[1150px] lg2:w-[1200px] sm:w-[664px] w-[333px]
					lg:h-max sm:h-[108px] h-[152px]
				"
				>
					<div
						className="flex flex-row flex-wrap						
						bg-[#151E2D] 
						xl:[&>div]:h-[74px] [&>div]:h-[54px]
					"
					>
						<button
							className="
							lg:pl-[29px] pl-0
							xl:w-[481px] lg:w-[375px] 
							w-full
							xl:h-[74px] h-[54px]
							lg:justify-start justify-center
							bg-accent flex items-center
							lg:order-first order-last"
							onClick={redirectToMap}
						>
							<div className="flex flex-row items-center gap-[18px]">
								<LocationButtonSvg
									className="
								xl:w-[60px] xl:h-[60px]  
								w-[40px] h-[40px] 
								"
								/>
								<span className="xl:text-[20px] text-[18px]">
									Проложить маршрут
								</span>
							</div>
						</button>

						<div
							className="flex items-center 
						xl:w-[272px] lg:w-[218px] sm:w-[340px] w-full 
						border-b-[1px] sm:border-none border-secondary
						h-full justify-center"
						>
							<span className="xl:text-[20px] text-[16px]">
								Москва
							</span>
						</div>

						<div
							className="lg:pl-[29px] 
							lg:justify-start justify-center
							xl:w-[355px] lg:w-[275px] sm:w-[159px] w-[165px]
							flex items-center sm:border-l-[1px] border-secondary"
						>
							<div className="flex items-center gap-[18px]">
								<PlaneSvg
									className="
									xl:w-[47px] xl:h-[47px] 
									w-[32px] h-[32px]								
								"
								/>
								<span className="xl:text-[20px] text-[16px]">
									1,5 часа
								</span>
							</div>
						</div>

						<div
							className="lg:pl-[29px] 
							lg:justify-start justify-center
							xl:w-[355px] lg:w-[275px] sm:w-[159px] w-[165px]
						 	flex items-center border-l-[1px] border-secondary"
						>
							<div className="flex items-center gap-[18px]">
								<TrainSvg
									className="
									xl:w-[46px] xl:h-[45px] 
									w-[30px] h-[30px]
								 "
								/>
								<span className="xl:text-[20px] text-[16px]">
									8 часов
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="location-map 
				lg:bg-contain bg-cover 
				lg:bg-left sm:bg-[-730px] exception:bg-[-850px]
				xl:h-[684px] lg2:h-[569px] lg:h-[485px] sm:h-[690px] h-[565px]
			"
			></div>

			<div
				className="location-estate lg:bg-contain bg-cover
				lg:block flex
				flex-col items-center
				xl:pt-[152px] lg:pt-[82px] lg2:pt-[142px] sm:pt-[74px] pt-[82px]
				xl:pb-[141px] lg:pb-[100px] lg2:pb-[142px] pb-[100px]
				
				"
			>
				<div
					className="
					xl:ml-[1105px] lg:ml-[793px] lg2:ml-[964px]
					xl:w-[482px] sm:w-[375px] w-[336px]
					xl:h-[706px] sm:h-[547px] h-[574px]
					flex flex-col justify-between 
					
					bg-accent select-none"
				>
					<div
						className="
						xl:pt-[55px] pt-[38px]
						xl:pl-[66px] sm:pl-[38px] px-[18px]
						xl:pr-[42px] sm:pr-[30px]
					"
					>
						<h2
							className="font-mirra leading-[103%] 
							xl:text-[50px] lg:text-[41px] text-[44px] 
							sm:-tracking-[2px] -tracking-[2px]
						"
						>
							Приватная усадьба в Карелии к Вашим услугам
						</h2>
						<p
							className="
						 xl:mt-[34px] lg:mt-[20px] mt-[30px]
						 xl:w-[355px] lg:w-[300px] w-[270px]
						 xl:text-[24px] text-[18px]
						 font-light 
						 lineheight-normal"
						>
							Мы доступны 24/7 и готовы ответить на интересующие
							Вас вопросы
						</p>

						<form
							className="
							xl:mt-[63px] mt-[34px]
							flex flex-col 
							lg:gap-[40px] sm:gap-[20px] gap-[22px]
							xl:w-[349px] w-[300px] 
							[&>input]:bg-accent "
						>
							<input
								type="text"
								placeholder="Ваше имя"
								className="w-full pt-[7px] pl-[27px] pb-[12px] placeholder:text-font_light input-feedback outline-none text-[16px] border-l-[1px] border-b-[1px]"
							/>
							<input
								type="number"
								placeholder="Телефон"
								name="feedback number"
								id="feedback number"
								className="w-full pt-[7px] pl-[27px] pb-[12px] placeholder:text-font_light input-number input-feedback outline-none text-[16px] border-l-[1px] border-b-[1px]"
							/>
						</form>

						<p
							className="w-full 
							xl:mt-[70px] sm:mt-[40px] mt-[68px]
							text-[13px] 
							font-light 
							leading-[17.8px]"
						>
							Нажимая на кнопку вы соглашаетесь с политикой
							обработки данных
						</p>
					</div>

					<button
						className="w-full 
					xl:h-[57px] h-[47px]
					xl:text-[24px] text-[18px]
					flex justify-center items-center bg-font_light text-accent 
					font-medium hover:bg-white"
					>
						Получить ответ
					</button>
				</div>
			</div>
		</div>
	);
}
