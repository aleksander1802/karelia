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
			xl:pl-[220px] lg:pl-[100px] sm:pl-[40px] pl-[30px]
			xl:pt-[193px] lg:pt-[198px] sm:pt-[187px] pt-[250px]						
			"
			id="Територия"
		>
			<div
				className="flex 
				sm:flex-row flex-col
				justify-between 
				xl:pr-[280px] lg:pr-[130px] sm:pr-[43px]
				sm:h-full h-[254px]
			"
			>
				<h2
					className="					
					font-mirra 
					xl:text-[90px] sm:text-[78px] text-[70px]
					leading-[96%] 
					sm:-tracking-[4.5px] -tracking-[3px]"
				>
					НА территории
				</h2>
				<ul
					className="relative z-50
					flex flex-col 
					lg:w-max sm:w-[206px]
					xl:gap-[26px] gap-[22px] 
					xl:text-[24px] text-[18px]
					lineheight-normal
					font-extralight 
					"
				>
					{logoList.map((item, idx) => (
						<li key={idx}>{item.title}</li>
					))}
				</ul>
			</div>

			<LogoLink
				className="
				xl:w-[231px] xl:h-[231px] 
				lg:w-[178px] lg:h-[178px]
				sm:w-[205px] sm:h-[205px]
				w-[157px] h-[157px]
				absolute z-50
				xl:left-[973px] lg:top-[165px] sm:top-[281px] top-[390px]
				xl:top-[156px] lg:left-[693px] sm:left-[270px] left-[279px]
				"
			/>

			<TerritorySlider />
			<div
				className="absolute left-0 z-0
					xl:top-[258px] lg2:top-[255px] lg:top-[255px] sm:top-[243px] top-[302px]		 
					xl:w-[699px] lg2:w-[552px] lg:w-[483px] sm:w-[360px] w-full
					xl:h-[1208px] lg:h-[869px] sm:h-[980px] h-[895px]
					bg-accent"
			></div>
		</div>
	);
}
