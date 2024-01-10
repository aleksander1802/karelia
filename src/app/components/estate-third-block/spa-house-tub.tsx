import Image from 'next/image';

export default function SpaHouseTub() {
	const spaHouseTubWidth = 606;
	const spaHouseTubHeight = 807;

	return (
		<div
			className="
			flex flex-col justify-between 
			xl:h-[853px] lg:h-[663px]
		"
		>
			<Image
				src="/images/spa_house/spa_tub.png"
				width={spaHouseTubWidth || 606}
				height={spaHouseTubHeight || 807}
				alt="Spa house tub"
				className="z-30 
				xl:w-[606px] xl:h-[807px] 
				lg:w-[474px] lg:h-[631px]"
			/>
			<p
				className="
			xl:w-[187px] lg:w-[149px]
			xl:text-[20px] lg:text-[16px]
			"
			>
				Открытая джакузи
			</p>
		</div>
	);
}
