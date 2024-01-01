import Image from 'next/image';

export default function SpaHousePool() {
	const spaHousePoolWidth = 607;
	const spaHousePoolHeight = 809;

	const spaHousePoolStyle = {
		width: spaHousePoolWidth || 607,
		height: spaHousePoolHeight || 809,
	};
	return (
		<div className="flex flex-col justify-between h-[883px] absolute -bottom-[707px] left-[595px] z-40">
			<Image
				src="/images/spa_house/spa_pool.png"
				width={spaHousePoolWidth || 607}
				height={spaHousePoolHeight || 809}
				alt="Spa house Pool"
				priority={false}
				style={spaHousePoolStyle}
				className="z-30"
			/>
			<p className="w-[145px] text-[20px] leading-[140%]">12 футовый элитный стол</p>
		</div>
	);
}
