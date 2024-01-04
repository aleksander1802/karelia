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
				className="flex flex-col gap-[18px] w-[356px]"
			>
				<span className="font-poiret text-[65px] leading-[50px] -tracking-[3.25px]">
					{item.range}
				</span>
				<span className="text-[24px] font-extralight leading-[80%] text-secondary">
					{item.description}
				</span>
			</li>
		));

		return <ul className="mt-[186px] flex flex-row gap-[20px]">{range}</ul>;
	};

	return (
		<div id='Расположение'>
			<div className="pl-[220px] pr-[220px]">
				<h2 className="h2 pl-[745px] pt-[11px]">Расположение</h2>

				<LocationRange locationRange={locationRange} />
			</div>

			<div className="relative mt-[196px]">
				<div className="absolute -top-1/2 -translate-y-1/2 left-[220px] ">
					<div className="flex flex-row bg-[#151E2D]  [&>div]:h-[74px]">
						<button
							className="pl-[29px] w-[481px] bg-accent flex items-center"
							onClick={redirectToMap}
						>
							<div className="flex flex-row items-center gap-[18px]">
								<LocationButtonSvg />
								<span className="text-[20px]">
									Проложить маршрут
								</span>
							</div>
						</button>

						<div className="flex items-center w-[272px] h-full justify-center">
							<span className="text-[20px]">Москва</span>
						</div>

						<div className="pl-[29px] w-[355px] flex items-center border-l-[1px] border-secondary">
							<div className="flex items-center gap-[18px]">
								<PlaneSvg />
								<span className="text-[20px]">1,5 часа</span>
							</div>
						</div>

						<div className="pl-[29px] w-[355px] flex items-center border-l-[1px] border-secondary">
							<div className="flex items-center gap-[18px]">
								<TrainSvg />
								<span className="text-[20px]">8 часов</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="location-map h-[684px]"></div>
			<div className="location-estate pt-[164px] pb-[141px]">
				<div className="ml-[1105px] w-[482px] h-[706px] flex flex-col justify-between pt-[55px] bg-accent select-none">
					<div className="pl-[66px] pr-[42px]">
						<h2 className="font-mirra leading-[103%] text-[50px]">
							Приватная усадьба в Карелии к Вашим услугам
						</h2>
						<p className="mt-[34px] w-[355px] text-[24px] font-light lineheight-normal">
							Мы доступны 24/7 и готовы ответить на интересующие
							Вас вопросы
						</p>

						<form className="mt-[63px] flex flex-col gap-[40px] w-[349px] [&>input]:bg-accent ">
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

						<p className="w-full mt-[70px] text-[13px] font-light leading-[17.8px]">
							Нажимая на кнопку вы соглашаетесь с политикой
							обработки данных
						</p>
					</div>

					<button className="w-full h-[57px] flex justify-center items-center bg-font_light text-accent text-[24px] font-medium hover:bg-white">
						Получить ответ
					</button>
				</div>
			</div>
		</div>
	);
}
