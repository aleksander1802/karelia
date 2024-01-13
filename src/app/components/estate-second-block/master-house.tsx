import LogoMaster from '@/app/assets/svg/Logo-master-svg';
import Image from 'next/image';
import MasterHouseHearth from './master-house-hearth';
import MasterHouseModern from './master-house-modern';

export default function MasterHouse() {
	const firstLevel = [
		{ title: 'Веранда' },
		{ title: 'Прихожая' },
		{ title: 'Гостиная-столовая' },
		{ title: 'Кухня' },
		{ title: 'Кабинет' },
		{ title: 'Cанузел c душем' },
	];

	const secondLevel = [
		{ title: 'Мастер спальня с душем' },
		{ title: '2 спальни с балконом' },
		{ title: 'Cанузел и постирочная' },
		{ title: 'Видовая оранжерея' },
	];

	const masterHouseWidth = 972;
	const masterHouseHeight = 1049;

	const masterHouseFenceWidth = 584;
	const masterHouseFenceHeight = 809;

	const FirstLevelRender = () => {
		return (
			<ul
				className="flex flex-col relative z-30 
				xl:gap-[26px] sm:gap-[22px] gap-0
				xl:pt-[66px] lg:pt-[38px]
				xl:pl-[38px] lg:pl-[23px]
				sm:pl-[69px] sm:pt-[40px]
				sm:h-full h-[186px] flex-wrap				
				w-full
				sm:mt-0 mt-[36px]
				font-light
				sm:[&>li]:pb-0
				[&>li]:pb-[24px]
				[&>*:nth-child(3)]:pb-[0px]
				[&>*:nth-child(6)]:pb-[0px]				
				"
			>
				{firstLevel.map((level, idx) => (
					<li key={idx}>
						<span className="sm:w-full w-[90px] text-wrap inline-block">
							{level.title}
						</span>
					</li>
				))}
			</ul>
		);
	};

	const SecondLevelRender = () => {
		return (
			<ul
				className="flex flex-col relative 
				xl:gap-[26px] sm:gap-[22px]
				xl:pt-[66px] lg:pt-[38px]
				xl:pl-[38px] lg:pl-[23px]
				sm:pl-[28px] sm:pt-[40px]
				sm:h-full h-[156px] flex-wrap				
				w-full sm:w-full
				sm:mt-0 mt-[36px]				
				sm:[&>li]:pb-0
				[&>li]:pb-[24px]
				[&>*:nth-child(2)]:pb-[0px]
				[&>*:nth-child(4)]:pb-[0px]	
				[&>*:nth-child(3)]:w-[100px]	
				[&>*:nth-child(4)]:w-[100px]
				font-light"
			>
				{secondLevel.map((level, idx) => (
					<li key={idx}>
						<span className="sm:w-full w-[160px] text-wrap inline-block">
							{level.title}
						</span>
					</li>
				))}
			</ul>
		);
	};

	return (
		<div
			className="master-house relative min-h-screen cursor-default 
			xl:mt-[300px] lg:mt-[180px] sm:mt-[186px] mt-[105px]		
			"
			id="Основной дом"
		>
			<div
				className="flex 
				lg:flex-row flex-col
				lg:justify-between
				xl:mb-[200px] lg:mb-[120px]
				xl:pl-[154px] xl:pr-[301px]
				lg2:pl-[134px] lg2:pr-[285px]
				lg:pl-[95px] lg:pr-[104px]
				lg:gap-0 gap-[132px]
			"
			>
				<div
					className="master-description 
					flex 
					lg:flex-col sm:flex-row flex-col
					lg:pl-0 lg:pr-0
					pl-[44px] pr-[41px]
					justify-between 
					xl:h-[316px]
					lg:h-[232px]
					sm:h-full
					h-[287px]
				"
				>
					<span
						className="
						xl:text-[90px] text-[78px] 
						lg:w-max
						w-[226px]
						leading-[96%]
						lg:h-max h-[132px]
						inline-block
						font-mirra -tracking-[4.5px]"
					>
						Master house
					</span>

					<p
						className="
					xl:w-[440px] lg:w-[373px] sm:w-[317px] w-[341px]
					xl:text-[20px] text-[16px]
					"
					>
						Основной дом из рубленного бревна (толстомер), площадью
						200 м2 с <br /> видовой террасой В доме реализован{' '}
						<br /> уникальный дизайн проект в стиле фьюжн.
					</p>
				</div>

				<div
					className="master-level 
					xl:w-[630px] lg:w-[565px] sm:w-full		
					[&>div>span]:-tracking-[3.3px] 
					[&>div>span]:leading-[54px]
					lg:pr-0 sm:pr-[84px]
					flex sm:flex-row flex-col
					justify-between"
				>
					<div
						className="first-level 
						relative
						sm:block						
						px-[25px] sm:px-0
						pt-[30px] sm:pt-0						
						h-[350px] sm:h-full
					"
					>
						<span
							className="relative 
							xl:text-[66px] 
							text-[56px]
							font-poiret 
							lg:pl-[2px] 
							sm:pl-[46px]							
							z-30"
						>
							1 этаж
						</span>
						<FirstLevelRender />
						<div
							className="first-level-back absolute top-0 left-0 
							xl:w-[347px] lg:w-[297px]
							xl:h-[1579px] lg:h-[1210px] 
							sm:w-[385px] sm:h-[1745px] 
							w-full h-[350px]
						  bg-accent"
						>
							<div
								className="absolute flex justify-center items-center 
								sm:left-0 left-[192px]
								xl:top-[683px] lg:top-[553px] sm:top-[1350px] top-[1200px]								 
								xl:w-[347px] xl:h-[395px]
								lg2:w-[297px] lg2:h-[345px]
								lg:w-[297px] lg:h-[345px]
								sm:w-[385px] sm:h-[280px]
							"
							>
								<span
									className="font-mirra 
									xl:text-[171px] sm:text-[121px] text-[103px]
									xl:leading-[52px] lg:leading-[36px]"
								>
									M
								</span>
								<LogoMaster
									className="absolute 
									xl:-top-2 lg:top-5 lg2:top-3 sm:-top-2 -top-10
									xl:w-[396px] xl:h-[396px] 
									lg2:w-[300px] lg2:h-[300px]
									sm:w-[280px] sm:h-[280px]
									w-[240px] h-[240px]
								"
								/>
							</div>
						</div>
					</div>
					<div
						className="second-level
						px-[25px] sm:px-0
						pt-[30px] sm:pt-0						
						h-[286px] sm:h-full"
					>
						<span
							className="
							xl:text-[66px] text-[56px]
							font-poiret 
							pl-[4px]"
						>
							2 этаж
						</span>
						<SecondLevelRender />
					</div>
				</div>
			</div>

			<div
				className="flex 
				lg:flex-row flex-col 
				justify-between 
				lg:items-start items-end
				lg:mt-0 sm:mt-[53px] mt-[100px]
				relative z-0"
			>
				<Image
					src="/images/master_house/master_house.png"
					width={masterHouseWidth}
					height={masterHouseHeight}
					alt="Master house"
					className="
					xl:w-[972px] xl:h-[1049px] 
					lg2:w-[750px] lg2:h-[783px] 
					lg:w-[698px] lg:h-[743px]
					w-full sm:h-[809px]					
					"
				/>
				<div>
					<Image
						src="/images/master_house/master_house_fence.png"
						width={masterHouseFenceWidth}
						height={masterHouseFenceHeight}
						alt="Master house fense"
						className="
						sm:relative absolute
						sm:top-0 top-[348px] left-0
						xl:w-[584px] xl:h-[809px] 
						lg2:w-[553px] lg2:h-[516px] 
						lg:w-[372px] lg:h-[516px]
						sm:w-full sm:h-[506px]
						w-[154px] h-[213px]
						"
					/>
				</div>
				<MasterHouseHearth />
			</div>

			<div
				className="relative 				
				xl:ml-[528px] lg:ml-[392px] 
				xl:mt-[570px] lg:mt-[535px] 
				sm:mt-[806px] mt-[740px]
				xl:w-[1005px] lg:w-[790px]
				w-full 
				xl:h-[811px] lg:h-[631px] 
				sm:pr-[36px] lg:pr-0 pr-[30px]
				lg:pl-0 sm:pl-[45px] pl-[30px]
				flex 
				sm:flex-row flex-col
				justify-between items-center "
			>
				<span
					className="
					absolute 
					leading-[92%] font-mirra 
					xl:text-[538px] lg:text-[428px] text-[332px]
					xl:-tracking-[27px] lg:-tracking-[21px] sm:-tracking-[10px]
					text-secondary_slider 
					sm:-top-[105px] 
					top-[680px] w-max
					xl:-left-[41%] 
					lg:-left-[41%] 
					lg2:-left-[10%] 
					sm:-left-[16%]
					-left-1/2
					-translate-x-[20%] z-0"
				>
					Master house
				</span>

				<div
					className="flex  
					sm:flex-row flex-col-reverse					
					xl:w-[1005px] lg:w-[790px] w-full
					justify-between 
					sm:items-center sm:gap-0 gap-[10px]"
				>
					<Image
						src="/images/master_house/master_house_glasshouse.png"
						width={607}
						height={811}
						alt="Master house glasshouse"
						className="z-30 
						xl:w-[607px] xl:h-[811px] 
						lg:w-[472px] lg:h-[631px]
						sm:w-[436px] sm:h-[582px]					
					"
					/>

					<p
						className="
						xl:w-[252px] lg:w-[196px] sm:w-[204px] w-[245px]
						xl:text-[20px] text-[16px]"
					>
						Видовая оранжерея на стеклянном полу <br /> с
						сохранением эффекта второго света
					</p>
				</div>

				<MasterHouseModern />
			</div>
		</div>
	);
}
