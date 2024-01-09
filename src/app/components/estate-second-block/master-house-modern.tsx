import Image from 'next/image';

export default function MasterHouseModern() {
	const masterHouseModernWidth = 733;
	const masterHouseModernHeight = 619;

	return (
		<div className="xl:w-[1110px] lg:w-[868px]
		 absolute 
		 xl:top-[701px] lg:top-[589px]
		 left-0 gap-[18px] flex flex-row justify-between items-center">
			<p className="
			xl:w-[231px] lg:w-[194px]
			 xl:text-[20px] lg:text-[16px]">
				Дом оснащен современной техникой и изысканной мебелью известных
				брендов
			</p>

			<Image
				src="/images/master_house/master_house_tv.png"
				width={masterHouseModernWidth}
				height={masterHouseModernHeight}
				alt="Master house modern"
				className="relative z-0 xl:w-[733px] xl:h-[619px] lg:w-[572px] lg:h-[483px]"
			/>
		</div>
	);
}
