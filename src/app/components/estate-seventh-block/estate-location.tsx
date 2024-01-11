'use client';

import LocationButtonSvg from '@/app/assets/svg/Location-button-svg';
import PlaneSvg from '@/app/assets/svg/Plane-svg';
import TrainSvg from '@/app/assets/svg/Train-svg';
import React from 'react';

interface LocationRangeInterface {
	range: string;
	description: string;
}

export default function EsatetLocation() {
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
				xl:gap-[18px] lg:gap-[20px]
				xl:w-[356px] lg2:w-[330px] lg:w-[277px]"
			>
				<span
					className="font-poiret 
				xl:text-[65px] lg:text-[56px]
				leading-[50px] 
				-tracking-[3.25px]"
				>
					{item.range}
				</span>
				<span
					className="
				xl:text-[24px] lg:text-[18px]
				font-extralight 
				leading-[80%] text-secondary"
				>
					{item.description}
				</span>
			</li>
		));

		return <ul className="mt-[186px] flex flex-row gap-[20px]">{range}</ul>;
	};

	return (
		<div id="Расположение">
			<div
				className="
			xl:pl-[220px] xl:pr-[220px]
			lg:pl-[100px] lg:pr-[100px]
			"
			>
				<h2
					className="h2 
				xl:pl-[745px] lg2:pl-[695px] lg:pl-[590px]
				pt-[11px]"
				>
					Расположение
				</h2>

				<LocationRange locationRange={locationRange} />
			</div>

			<div className="relative mt-[196px]">
				<div
					className="absolute -top-1/2 -translate-y-1/2 
				xl:left-[220px] lg:left-[100px] 
				"
				>
					<div
						className="flex flex-row bg-[#151E2D] 
					xl:[&>div]:h-[74px] lg:[&>div]:h-[54px]
					"
					>
						<button
							className="
							pl-[29px] 
							xl:w-[481px] lg:w-[375px]
							 bg-accent flex items-center"
							onClick={redirectToMap}
						>
							<div className="flex flex-row items-center gap-[18px]">
								<LocationButtonSvg
									className="
								xl:w-[60px] xl:h-[60px] 
								lg:w-[40px] lg:h-[40px] 
								"
								/>
								<span className="xl:text-[20px] lg:text-[18px]">
									Проложить маршрут
								</span>
							</div>
						</button>

						<div
							className="flex items-center 
						xl:w-[272px] lg:w-[218px]
						h-full justify-center"
						>
							<span className="xl:text-[20px] lg:text-[16px]">
								Москва
							</span>
						</div>

						<div
							className="pl-[29px] 
						xl:w-[355px] lg:w-[275px]
						flex items-center border-l-[1px] border-secondary"
						>
							<div className="flex items-center gap-[18px]">
								<PlaneSvg
									className="
								xl:w-[47px] xl:h-[47px] 
								lg:w-[32px] lg:h-[32px]"
								/>
								<span className="xl:text-[20px] lg:text-[16px]">
									1,5 часа
								</span>
							</div>
						</div>

						<div
							className="pl-[29px] 
						xl:w-[355px] lg:w-[275px]
						 flex items-center border-l-[1px] border-secondary"
						>
							<div className="flex items-center gap-[18px]">
								<TrainSvg
									className="
								xl:w-[46px] xl:h-[45px] 
								lg:w-[30px] lg:h-[30px]"
								/>
								<span className="xl:text-[20px] lg:text-[16px]">
									8 часов
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="location-map 
			 xl:h-[684px] lg:h-[485px] lg2:h-[569px]
			"
			></div>

			<div
				className="location-estate 
			xl:pt-[164px] lg:pt-[82px] lg2:pt-[142px]
			xl:pb-[141px] lg:pb-[100px] lg2:pb-[142px] "
			>
				<div
					className="
				xl:ml-[1105px] lg:ml-[793px] lg2:ml-[964px]
				xl:w-[482px] lg:w-[375px]
				xl:h-[706px] lg:h-[547px]
				flex flex-col justify-between 
				xl:pt-[55px] lg:pt-[38px]
				bg-accent select-none"
				>
					<div
						className="
					xl:pl-[66px] lg:pl-[38px]
					xl:pr-[42px] lg:pr-[30px]
					"
					>
						<h2
							className="font-mirra leading-[103%] 
						xl:text-[50px] lg:text-[41px] 
						"
						>
							Приватная усадьба в Карелии к Вашим услугам
						</h2>
						<p
							className="
						 xl:mt-[34px] lg:mt-[20px]
						 xl:w-[355px] lg:w-[300px]
						 xl:text-[24px] lg:text-[18px]
						 font-light 
						 lineheight-normal"
						>
							Мы доступны 24/7 и готовы ответить на интересующие
							Вас вопросы
						</p>

						<form
							className="
						xl:mt-[63px] lg:mt-[34px]
						flex flex-col 
						gap-[40px] 
						xl:w-[349px] lg:w-[300px]
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
						xl:mt-[70px] lg:mt-[40px]
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
					xl:h-[57px] lg:h-[47px]
					xl:text-[24px] lg:text-[18px]
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
