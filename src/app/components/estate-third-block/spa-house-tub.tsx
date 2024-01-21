import Image from 'next/image';
import SpaTubImage from '/karelia/images/spa_house/spa_tub.png';

export default function SpaHouseTub() {
	const spaHouseTubWidth = 606;
	const spaHouseTubHeight = 807;

	return (
		<div
			className="
			flex flex-col justify-between 
			xl:h-[853px] lg:h-[663px] sm:h-[611px] h-[475px]
		"
		>
			<Image
				src={SpaTubImage}
				width={spaHouseTubWidth || 606}
				height={spaHouseTubHeight || 807}
				alt="Spa house tub"
				priority
				className="z-30 
				xl:w-[606px] xl:h-[807px] 
				lg:w-[474px] lg:h-[631px]
				sm:w-[435px] sm:h-[679px]
				w-[333px] h-[443px]
				"
			/>
			<p
				className="
				xl:w-[187px] w-[149px]
				xl:text-[20px] text-[16px]
			"
			>
				Открытая джакузи
			</p>
		</div>
	);
}
