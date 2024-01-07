import Image from 'next/image';

export default function MasterHouseModern() {
	const masterHouseModernWidth = 733;
	const masterHouseModernHeight = 619;

	const masterHouseModernStyle = {
		width: masterHouseModernWidth || 733,
		height: masterHouseModernHeight || 619,
	};

	return (
		<div className="w-[1110px] absolute top-[701px] left-0 gap-[18px] flex flex-row justify-between items-center">
			<p className="w-[231px] text-[20px]">
				Дом оснащен современной техникой и изысканной мебелью известных
				брендов
			</p>

			<Image
				src="/images/master_house/master_house_tv.png"
				width={masterHouseModernWidth}
				height={masterHouseModernHeight}
				alt="Master house modern"
				
				style={masterHouseModernStyle}
				className="relative z-0"
			/>
		</div>
	);
}
