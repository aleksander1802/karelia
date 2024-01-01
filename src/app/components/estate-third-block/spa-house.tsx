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
		<div className="spa-house relative min-h-screen text-3xl cursor-default mt-[564px] pt-[924px]">
			<Image
				src="/images/spa_house/spa_tree.png"
				width={treeWidth || 408}
				height={treeHeight || 328}
				alt="Spa house tree"
				priority={false}
				className="absolute -top-[118px] left-0 z-30"
				style={treeStyle}
			/>

			<div className="w-[606px] h-[606px] border-[1px] rounded-full border-accent absolute -top-[294px] right-[471px] -z-10"></div>
			<span className="w-[606px] h-[606px] font-mirra text-[350px] text-accent absolute z-30 -top-[87px] right-[330px] leading-[261px] ">
				SPA HOUSE
			</span>

			<div className="relative pl-[220px] pr-[220px] flex flex-row gap-[146px]">
				<div className="h-[1126px] flex flex-col justify-between">
					<p className="w-[354px] text-[20px] leading-[140%]">
						Краткое описание спа комплекса. Особенное место
						сосредоточение всего наилучшего
					</p>

					<SpaHouseTub />
				</div>

				<div className="flex flex-col gap-[135px]">
					<SpaHouseMenu />
					<SpaHouseShower />
				</div>
				<SpaHousePool />
			</div>
			<p className="font-mirra text-[539px] leading-[163px] tracking-[-22px] absolute left-1/2 -translate-x-1/2 -bottom-[120px] w-max text-secondary_slider">
				SPA house
			</p>
		</div>
	);
}
