import LogoLink from '@/app/assets/svg/Logo-link-svg';
import TerritorySlider from '../sliders/territory-slider/TerritorySlider';

export default function Territory() {
	const logoList = [
		{ title: 'Гриль домик' },
		{ title: 'Уличные тренажеры' },
		{ title: 'Эллинг с видовой террасой' },
		{ title: 'Гараж' },
	];

	return (
		<div
			className="relative 
			xl:pl-[220px] lg:pl-[96px]
			xl:pt-[146px] lg:pt-[145px]
			mb-[297px]"
			id="Територия"
		>
			<div
				className="flex flex-row justify-between 
			xl:w-[671px] lg:w-[511px]
			ml-[658px]
			"
			>
				<LogoLink className="xl:w-[231px] xl:h-[231px] lg:w-[178px] lg:h-[178px]" />

				<ul
					className="flex flex-col 
				xl:gap-[26px] lg:gap-[22px] 
				xl:text-[24px] lg:text-[18px]
				leading-[80%] 
				font-extralight 
				pt-[30px]"
				>
					{logoList.map((item, idx) => (
						<li key={idx}>{item.title}</li>
					))}
				</ul>
			</div>

			<h2
				className="absolute 
			xl:top-[193px] lg:top-[199px]
			font-mirra 
			xl:text-[90px] lg:text-[78px]
			leading-[96%] 
			-tracking-[4.5px]"
			>
				НА территории
			</h2>

			<div
				className="
				absolute top-[258px] left-0 
				xl:w-[699px] lg2:w-[544px] lg:w-[475px] 
				xl:h-[1208px] lg:h-[869px]
			  bg-accent"
			>
				<p
					className="absolute bottom-0 
				xl:w-[409px] lg:w-[325px]
				xl:left-[220px] lg:left-[136px] 
				xl:text-[20px] lg:text-[16px]
				pt-[297px] 
				leading-[140%] 
				"
				>
					Усадьба расположена на первой линии живописного озера
					Ушкозера, напротив дачи Б.Н.Ельцина по воде
				</p>
			</div>

			<TerritorySlider />
		</div>
	);
}
