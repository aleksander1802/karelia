import Image from 'next/image';
import SpaHouseTub from './spa-house-tub';
import SpaHouseMenu from './spa-house-menu';
import SpaHouseShower from './spa-house-shower';
import SpaHousePool from './spa-house-pool';

export default function SpaHouse() {
	const treeWidth = 408;
	const treeHeight = 328;
	const treeStyle = {
		width: treeWidth,
		height: treeHeight,
	};

	return (
		<div className="spa-house relative min-h-screen text-3xl cursor-default mt-[714px] xl:pt-[924px] lg:pt-[614px]">
			<Image
				src="/images/spa_house/spa_tree.png"
				width={treeWidth || 408}
				height={treeHeight || 328}
				alt="Spa house tree"
				className="absolute xl:-top-[118px] lg:-top-[100px] left-0 z-30 lg:w-[335px] lg:h-[258px] xl:w-[408px] xl:h-[328px]"
			/>

			<div
				className="
				xl:w-[606px] xl:h-[606px] lg:w-[473px] lg:h-[473px] 
				border-[1px] rounded-full border-accent absolute 
				xl:-top-[294px] lg:-top-[249px]
				xl:right-[471px] lg:right-[295px]
				-z-10"
				id="Спа-комплекс"
			></div>

			<span
				className="
			xl:w-[606px] xl:h-[606px] lg:w-[473px] lg:h-[473px] 
			font-mirra 
			xl:text-[350px] lg:text-[220px]
			 text-accent absolute 
			 z-30 
			 xl:-top-[87px] lg:-top-[141px]
			 xl:right-[330px]  lg:right-[190px] 
			 xl:leading-[261px] lg:leading-[171px] "
			>
				SPA HOUSE
			</span>

			<div
				className="relative 
			xl:pl-[220px] xl:pr-[332px] 
			lg2:pl-[180px] lg2:pr-[222px]
			lg:pl-[100px] lg:pr-[100px]

			 flex flex-row justify-between
			 "
			>
				<div
					className="
				xl:h-[1126px]
				lg:h-[861px]
				flex flex-col justify-between lg:pt-[50px]"
				>
					<p
						className="
					xl:w-[354px] lg:w-[277px]
					xl:text-[20px] lg:text-[16px] 
					leading-[140%]"
					>
						Краткое описание спа комплекса. Особенное место
						сосредоточение всего наилучшего
					</p>

					<SpaHouseTub />
				</div>

				<div className="flex flex-col xl:gap-[135px] lg:gap-[72px]">
					<SpaHouseMenu />
					<SpaHouseShower />
				</div>
				<SpaHousePool />
			</div>
			<p className="font-mirra 
			xl:text-[539px] lg:text-[428px]
			leading-[163px] 
			tracking-[-22px] 
			absolute left-1/2 -translate-x-1/2 -bottom-[120px] w-max text-secondary_slider">
				SPA house
			</p>
		</div>
	);
}
