import Image from 'next/image';
import SpaHousePool from './spa-house-pool';

export default function SpaHouseShower() {
	const spaHouseShowerWidth = 606;
	const spaHouseShowerHeight = 722;

	return (
		<div
			className="relative z-30 flex flex-col justify-between 
		
		xl:h-[768px] lg:h-[596px]
		"
		>
			<p
				className="
			xl:text-[20px] lg:text-[16px]"
			>
				Описание душа
			</p>
			<Image
				src="/images/spa_house/spa_shower.png"
				width={spaHouseShowerWidth || 606}
				height={spaHouseShowerHeight || 722}
				alt="Spa house Shower"
				className="z-30
				xl:w-[606px] xl:h-[722px] 
				lg:w-[473px] lg:h-[564px]"
			/>
		</div>
	);
}
