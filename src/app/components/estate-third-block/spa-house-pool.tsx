import Image from 'next/image';
import SpaPoolImage from '../../../../public/images/spa_house/spa_pool.png';

export default function SpaHousePool() {
	const spaHousePoolWidth = 607;
	const spaHousePoolHeight = 809;

	return (
		<div
			className="flex flex-col justify-between 		
			xl:h-[883px] lg:h-[683px] sm:h-[632px]
			absolute 
			xl:-bottom-[757px] lg:-bottom-[607px] sm:-bottom-[600px] -bottom-[680px]
			xl:left-[595px] lg:left-[402px] lg2:left-[572px]
			z-40"
		>
			<Image
				src={SpaPoolImage}
				width={spaHousePoolWidth || 607}
				height={spaHousePoolHeight || 809}
				alt="Spa house Pool"
				priority
				className="z-30
				xl:w-[607px] xl:h-[809px] 
				lg:w-[473px] lg:h-[629px]
				sm:w-[435px] sm:h-[578px]
				"
			/>
			<p
				className="w-[145px]
				xl:text-[20px] text-[16px] 
				leading-[140%]"
			>
				12 футовый элитный стол
			</p>
		</div>
	);
}
