import LogoLink from '@/app/assets/svg/Logo-link-svg';
import Image from 'next/image';

export default function MasterHouseHearth() {
	const masterHouseHearthWidth = 481;
	const masterHouseHearthHeight = 642;

	return (
		<div
			className="absolute 
		xl:top-[738px] lg:top-[489px]
		 left-1/2 
		 xl:translate-x-4 lg:translate-x-3 lg2:-translate-x-10
		 flex flex-col 
		 xl:gap-[18px] lg:gap-[10px]
		 "
		>
			<Image
				src="/images/master_house/master_house_hearth.png"
				width={masterHouseHearthWidth}
				height={masterHouseHearthHeight}
				alt="Master house hearth"
				className="z-30 xl:w-[481px] xl:h-[642px] lg:w-[378px] lg:h-[504px]"
			/>
			<p className="w-[144px] 
			xl:text-[20px] lg:text-[16px]
			">Премиальный камин Tulikivi.</p>
			<LogoLink className="absolute 
			xl:top-[545px] lg:top-[379px]
			xl:left-[375px] lg:left-[245px]
			z-0" />
		</div>
	);
}
