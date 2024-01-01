import Image from 'next/image';

export default function SpaHouseTub() {
	const spaHouseTubWidth = 606;
	const spaHouseTubHeight = 807;

	const spaHouseTubStyle = {
		width: spaHouseTubWidth || 606,
		height: spaHouseTubHeight || 807,
	};

	return (
		<div className="flex flex-col justify-between h-[853px]">
			<Image
				src="/images/spa_house/spa_tub.png"
				width={spaHouseTubWidth || 606}
				height={spaHouseTubHeight || 807}
				alt="Spa house tub"
				priority={false}
				style={spaHouseTubStyle}
				className="z-30"
			/>
			<p className="w-[187px] text-[20px]">Открытая джакузи</p>
		</div>
	);
}
