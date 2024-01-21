import Image from 'next/image';
import SpaHouseTub from './spa-house-tub';
import SpaHouseMenu from './spa-house-menu';
import SpaHouseShower from './spa-house-shower';
import SpaHousePool from './spa-house-pool';

export default function SpaHouse() {
	const treeWidth = 408;
	const treeHeight = 328;

	return (
		<div
			className="spa-house relative min-h-screen cursor-default 
			xl:mt-[714px] lg2:mt-[600px] lg:mt-[500px] sm:mt-[404px] mt-[347px]
			xl:pt-[924px] lg:pt-[614px] sm:pt-[350px] pt-[300px]
			pl-[30px] sm:pl-0
			pr-[30px] sm:pr-0
			"
		>
			<Image
				src="/karelia/images/spa_house/spa_tree.png"
				width={treeWidth || 408}
				height={treeHeight || 328}
				alt="Spa house tree"
				priority
				className="absolute 
				xl:-top-[118px] lg:-top-[107px] sm:-top-[77px] -top-[54px] 
				xl:-left-[155px] lg:-left-[109px] sm:-left-[145px] -left-[93px]
				z-30 
				xl:w-[564px] lg:w-[445px] sm:w-[321px] w-[232px]
				xl:h-[328px] lg:h-[258px] sm:h-[186px] h-[134px]
				
				"
			/>

			<div
				className="
				xl:w-[606px] xl:h-[606px] 
				lg:w-[473px] lg:h-[473px] 
				sm:w-[436px] sm:h-[436px]
				w-[339px] h-[339px]
				border-[1px] rounded-full border-accent absolute 
				xl:-top-[294px] lg:-top-[249px] sm:-top-[218px] -top-[228px] 
				xl:right-[471px] lg:right-[295px] sm:right-[153px]
				-z-10"
				id="Спа-комплекс"
			></div>

			<span
				className="
				xl:w-[606px] xl:h-[606px] 
				lg:w-[473px] lg:h-[473px] 
				sm:w-[431px] h-[271px]
				w-[339px]
				font-mirra 
				xl:text-[350px] lg:text-[220px] sm:text-[194px] text-[160px]
				text-accent absolute 
				z-30 
				xl:-top-[87px] lg:-top-[141px] sm:-top-[120px] -top-[217px]
				xl:right-[330px] lg:right-[190px] sm:right-[39px]
				xl:leading-[261px] lg:leading-[171px] leading-[74%]
				-tracking-[4px] sm:tracking-[0px]
				"
			>
				SPA HOUSE
			</span>

			<div
				className="relative 
				xl:pl-[220px] xl:pr-[332px] 
				lg2:pl-[180px] lg2:pr-[222px]
				lg:pl-[100px] lg:pr-[100px]
				sm:px-[40px]
				flex 
				lg:flex-row flex-col				
				justify-between
			 "
			>
				<div
					className="
					xl:h-[1126px] lg:h-[861px]
					lg:relative absolute
					lg:gap-0 gap-[670px]
					flex flex-col justify-between lg:pt-[50px]"
				>
					<p
						className="
						xl:w-[354px] lg:w-[277px] w-[321px]
						xl:text-[20px] text-[16px] 
						leading-[140%]"
					>
						Краткое описание спа комплекса. Особенное место
						сосредоточение всего наилучшего
					</p>

					<SpaHouseTub />
				</div>

				<div
					className="flex flex-col sm:items-end				
					xl:gap-[135px] lg:gap-[72px] sm:gap-[964px] gap-[740px]
				 	xl:mt-0 sm:mt-[94px] mt-[124px]
					lg:pr-0 
					
					"
				>
					<SpaHouseMenu />
					<SpaHouseShower />
				</div>

				<SpaHousePool />
			</div>

			<span
				className="font-mirra 
				xl:text-[539px] text-[428px]
				leading-[163px] 
				tracking-[-22px] 
				absolute 
				left-1/2 sm:-translate-x-1/2  -translate-x-[30%]									
				sm:-bottom-[120px] -bottom-[200px] 
				w-max								
				text-secondary_slider"
			>
				SPA house
			</span>
		</div>
	);
}
