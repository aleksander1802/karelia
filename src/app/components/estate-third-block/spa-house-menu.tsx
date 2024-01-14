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
		 	relative sm:pr-[75px] lg:pr-0
			 "
		>
			<div
				className="
				xl:h-[608px] xl:w-[608px] 
				lg:h-[572px] lg:w-[572px]
				sm:w-[547px] sm:h-[547px]
				w-[488px] h-[488px]
				absolute top-0 sm:left-0 -left-1/2 translate-x-[22%] sm:translate-x-0 rounded-full bg-accent z-10"
			></div>

			<span
				className="absolute 
				xl:top-[100px] lg:top-[93px] sm:top-[70px]
				sm:-left-[11px] 
				z-30 
				lg:w-[229px] sm:w-[254px] w-[340px]
				font-poiret 
				xl:text-[56px] text-[48px] 
				leading-[80.5%]"
			>
				2 этажа элитного отдыха
			</span>

			<ul
				className="relative z-30 flex flex-col 
				xl:gap-[26px] gap-[22px]
				xl:text-[24px] text-[18px]
				font-light 
				xl:pl-[238px] lg:pl-[293px] sm:pl-[229px] pl-[80px]
				lg:pt-[105px] sm:pt-[81px] pt-[106px]"
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
				xl:-bottom-[29px] lg:-bottom-[18px] sm:top-[418px] top-[410px]
				xl:-left-[14px] lg:left-[2px] left-0
				z-0 
				xl:w-[227px] xl:h-[227px]
				lg:w-[178px] lg:h-[178px]
				sm:w-[206px] sm:h-[206px]
				w-[157px] h-[157px]
				"
			/>
		</div>
	);
}
