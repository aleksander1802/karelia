import LogoLink from '@/app/assets/svg/Logo-link-svg';
import Image from 'next/image';

const masterHouseHearthImage = '/karelia/images/master_house/master_house_hearth.png';

export default function MasterHouseHearth() {
	const masterHouseHearthWidth = 481;
	const masterHouseHearthHeight = 642;

	return (
		<div
			className="absolute 
			xl:top-[738px] lg:top-[489px] sm:top-[1270px] top-[660px]
			sm:left-1/2 left-[120px]
			xl:translate-x-4 lg:translate-x-1 lg2:-translate-x-12 sm:-translate-x-1/2			
			flex flex-col 
			xl:gap-[18px] gap-[10px] w-max
		 "
		>
			<Image
				src={masterHouseHearthImage}
				width={masterHouseHearthWidth}
				height={masterHouseHearthHeight}
				alt="Master house hearth"
				priority
				className="z-30 
				xl:w-[481px] xl:h-[642px] 
				lg:w-[378px] lg:h-[504px]
				sm:w-[437px] sm:h-[582px]
				w-[248px] h-[330px]
				"
			/>
			<p
				className="
				lg:w-[144px] w-[115px] 
				xl:text-[20px] text-[16px]
			"
			>
				Премиальный камин Tulikivi.
			</p>
			<LogoLink
				className="absolute 
				xl:top-[545px] lg:top-[379px]
				xl:left-[375px] lg:left-[245px]
				sm:top-[460px] sm:left-[305px]
			"
			/>
		</div>
	);
}
