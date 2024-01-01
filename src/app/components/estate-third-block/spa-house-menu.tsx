import LogoLink from '@/app/assets/svg/Logo-link-svg';

export default function SpaHouseMenu() {
	const menuItems = [
		{ title: 'Круговая терасса' },
		{ title: 'Джакузи с выходом к озеру' },
		{ title: 'Баня на дровах' },
		{ title: 'Соляная пещера' },
		{ title: 'Мастер спальня' },
		{ title: 'Библиотека' },
		{ title: 'Бильярд' },
		{ title: 'Хамам' },
	];

	return (
		<div className="h-[608px] w-[608px] relative ">
			<div className="h-[608px] w-[608px] absolute top-0 left-0 rounded-full bg-accent z-10"></div>

			<p className="absolute top-[100px] -left-[11px] z-30 w-[229px] font-poiret text-[56px] leading-[80.5%]">
				2 этажа элитного отдыха
			</p>

			<ul className="relative z-30 flex flex-col gap-[26px] text-[24px] font-light pl-[238px] pt-[105px] ">
				{menuItems.map((item, idx) => (
					<li
						key={idx}
						className="lineheight-normal"
					>
						{item.title}
					</li>
				))}
			</ul>

			<LogoLink
				width="227"
				height="227"
				className="absolute -bottom-[29px] -left-[14px] z-0"
			/>
		</div>
	);
}
