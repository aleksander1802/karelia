import Image from 'next/image';

const spaShowerImage = '/karelia/images/spa_house/spa_shower.png';

export default function SpaHouseShower() {
	const spaHouseShowerWidth = 606;
	const spaHouseShowerHeight = 722;

	return (
		<div
			className="relative z-30 flex flex-col justify-between		
			xl:h-[768px] lg:h-[596px] sm:h-[550px] h-[324px] self-end
		"
		>
			<p
				className="
				xl:text-[20px] text-[16px]"
			>
				Описание душа
			</p>
			<Image
				src={spaShowerImage}
				width={spaHouseShowerWidth || 606}
				height={spaHouseShowerHeight || 722}
				alt="Spa house Shower"
				priority
				className="z-30
				xl:w-[606px] xl:h-[722px] 
				lg:w-[473px] lg:h-[564px]
				sm:w-[435px] sm:h-[518px]
				w-[245px] h-[292px]
				"
			/>
		</div>
	);
}
