import LogoLink from '@/app/assets/svg/Logo-link-svg';
import Image from 'next/image';

export default function MasterHouseHearth() {
	const masterHouseHearthWidth = 481;
	const masterHouseHearthHeight = 642;

	const masterHouseHearthStyle = {
		width: masterHouseHearthWidth || 481,
		height: masterHouseHearthHeight || 642,
	};

	return (
		<div className="absolute top-[738px] left-1/2 translate-x-4 flex flex-col gap-[18px] ">
			<Image
				src="/images/master_house/master_house_hearth.png"
				width={481}
				height={642}
				alt="Master house hearth"
				priority={true}
				style={masterHouseHearthStyle}
				className="z-30"
			/>
			<p className="w-[144px] text-[20px]">Премиальный камин Tulikivi.</p>
			<LogoLink className="absolute top-[545px] left-[375px] z-0" />
		</div>
	);
}
