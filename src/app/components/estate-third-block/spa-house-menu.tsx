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
		<div
			className="
		xl:h-[608px] xl:w-[608px] lg:h-[572px] lg:w-[572px]
		 relative "
		>
			<div
				className="
			xl:h-[608px] xl:w-[608px] lg:h-[572px] lg:w-[572px]
			absolute top-0 left-0 rounded-full bg-accent z-10"
			></div>

			<p
				className="absolute 
			xl:top-[100px] lg:top-[93px]
			-left-[11px] 
			z-30 
			w-[229px] 
			font-poiret 
			xl:text-[56px] lg:text-[48px] 
			leading-[80.5%]"
			>
				2 этажа элитного отдыха
			</p>

			<ul
				className="relative z-30 flex flex-col 
			xl:gap-[26px] lg:gap-[22px]
			xl:text-[24px] lg:text-[18px]
			font-light 
			xl:pl-[238px] lg:pl-[293px]
			pt-[105px] "
			>
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
				className="absolute 
				xl:-bottom-[29px] lg:-bottom-[18px]
				xl:-left-[14px] lg:left-[2px]
				z-0 
				xl:w-[227px] xl:h-[227px]
				lg:w-[178px] lg:h-[178px]
				"
			/>
		</div>
	);
}
