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
		<div className="relative pl-[220px] pt-[146px] mb-[297px]">
			<div className="flex flex-row justify-between w-[671px] ml-[658px]">
				<LogoLink />

				<ul className="flex flex-col gap-[26px] text-[24px] leading-[80%] font-extralight pt-[30px]">
					{logoList.map((item, idx) => (
						<li key={idx}>{item.title}</li>
					))}
				</ul>
			</div>

			<h2 className="absolute top-[193px] font-mirra text-[90px] leading-[96%] -tracking-[4.5px]">
				НА территории
			</h2>

			<div className="absolute top-[258px] left-0 w-[700px] h-[1208px] bg-accent">
				<p className="absolute bottom-0 left-[220px] pt-[297px] leading-[140%] w-[409px]">
					Усадьба расположена на первой линии живописного озера
					Ушкозера, напротив дачи Б.Н.Ельцина по воде
				</p>
			</div>

			<TerritorySlider />
		</div>
	);
}
