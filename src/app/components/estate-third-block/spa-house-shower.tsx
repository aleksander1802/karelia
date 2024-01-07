import Image from 'next/image';
import SpaHousePool from './spa-house-pool';

export default function SpaHouseShower() {
	const spaHouseShowerWidth = 606;
	const spaHouseShowerHeight = 722;

	const spaHouseShowerStyle = {
		width: spaHouseShowerWidth || 606,
		height: spaHouseShowerHeight || 722,
	};
	return (
		<div className="relative z-30 flex flex-col justify-between h-[768px]">
			<p className="text-[20px]">Описание душа</p>
			<Image
				src="/images/spa_house/spa_shower.png"
				width={spaHouseShowerWidth || 606}
				height={spaHouseShowerHeight || 722}
				alt="Spa house Shower"
				style={spaHouseShowerStyle}
				className="z-30"
			/>
		</div>
	);
}
