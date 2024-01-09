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

	const masterHouseHearthWidth = 607;
	const masterHouseHearthHeight = 811;

	const masterHouseHearthStyle = {
		width: masterHouseHearthWidth || 607,
		height: masterHouseHearthHeight || 811,
	};

	const FirstLevelRender = () => {
		return (
			<ul
				className="flex flex-col relative z-30 
			xl:gap-[26px] lg:gap-[22px]
			xl:pt-[66px] lg:pt-[38px]
			xl:pl-[38px] lg:pl-[23px]
			font-light"
			>
				{firstLevel.map((level, idx) => (
					<li key={idx}>{level.title}</li>
				))}
			</ul>
		);
	};

	const SecondLevelRender = () => {
		return (
			<ul
				className="flex flex-col 
			xl:gap-[26px] lg:gap-[22px]
			xl:pt-[66px] lg:pt-[38px]
			xl:pl-[38px] lg:pl-[23px]
			font-light"
			>
				{secondLevel.map((level, idx) => (
					<li key={idx}>{level.title}</li>
				))}
			</ul>
		);
	};

	return (
		<div
			className="master-house relative min-h-screen cursor-default 
			xl:mt-[300px] lg:mt-[180px]
			
			"
			id="Основной дом"
		>
			<div
				className="flex flex-row justify-between 
				xl:mb-[200px] lg:mb-[120px]
			xl:pl-[154px] xl:pr-[237px]
			lg2:pl-[134px] lg2:pr-[256px]
			lg:pl-[95px] lg:pr-[75px]
			"
			>
				<div
					className="master-description flex flex-col justify-between 

				xl:h-[316px]
				lg:h-[232px]
				"
				>
					<span
						className="
					xl:text-[90px] 
					lg:text-[78px] 
					font-mirra -tracking-[4.5px]"
					>
						Master house
					</span>

					<p
						className="
					xl:w-[440px] lg:w-[373px] 
					xl:text-[20px] lg:text-[16px]
					"
					>
						Основной дом из рубленного бревна (толстомер), площадью
						200 м2 с <br /> видовой террасой В доме реализован{' '}
						<br /> уникальный дизайн проект в стиле фьюжн.
					</p>
				</div>

				<div
					className="master-level 
				xl:[&>div]:w-[347px] lg:[&>div]:w-[297px] 				
				[&>div>span]:-tracking-[3.3px] 
				[&>div>span]:leading-[54px]
				 flex flex-row"
				>
					<div className="first-level relative">
						<span
							className="relative 
						xl:text-[66px] lg:text-[56px]
						font-poiret pl-[2px] z-30"
						>
							1 этаж
						</span>
						<FirstLevelRender />
						<div
							className="first-level-back absolute top-0 left-0 
						xl:w-[347px] lg:w-[297px]
						xl:h-[1579px] lg:h-[1210px] 
						 bg-accent"
						>
							<div
								className="absolute flex justify-center items-center left-0 
								xl:top-[683px] lg:top-[553px]

							xl:w-[347px] xl:h-[395px]
							lg2:w-[297px] lg2:h-[345px]
							lg:w-[297px] lg:h-[345px]
							"
							>
								<span
									className="font-mirra 
								xl:text-[171px] lg:text-[121px] 
								xl:leading-[52px] lg:leading-[36px]"
								>
									M
								</span>
								<LogoMaster
									className="absolute 
								xl:-top-2 lg:top-5 lg2:top-3 
								xl:w-[396px] xl:h-[396px] 
								lg2:w-[300px] lg2:h-[300px]
								lg:w-[280px] lg:h-[280px]"
								/>
							</div>
						</div>
					</div>
					<div className="second-level">
						<span
							className="
							xl:text-[66px] lg:text-[56px]
							font-poiret 
							pl-[4px]"
						>
							2 этаж
						</span>
						<SecondLevelRender />
					</div>
				</div>
			</div>

			<div className="flex justify-between items-start relative z-0">
				<Image
					src="/images/master_house/master_house.png"
					width={masterHouseWidth}
					height={masterHouseHeight}
					alt="Master house"
					className="xl:w-[972px] xl:h-[1049px] lg2:w-[750px] lg2:h-[783px] lg:w-[698px] lg:h-[743px]"
				/>
				<Image
					src="/images/master_house/master_house_fence.png"
					width={masterHouseFenceWidth}
					height={masterHouseFenceHeight}
					alt="Master house fense"
					className="xl:w-[584px] xl:h-[809px] lg2:w-[553px] lg2:h-[516px] lg:w-[372px] lg:h-[516px]"
				/>
				<MasterHouseHearth />
			</div>

			<div
				className="relative 
			xl:ml-[528px] lg:ml-[392px] 
			xl:mt-[570px] lg:mt-[535px] 
			xl:w-[1005px] lg:w-[790px] 
			xl:h-[811px] lg:h-[631px] 
			flex flex-row justify-between items-center "
			>
				<span
					className="w-[3628px] 
				leading-[92%] font-mirra 
				xl:text-[538px] lg:text-[428px]
				xl:-tracking-[27px] lg:-tracking-[21px]
				 text-secondary_slider 
				absolute -top-[105px] 
				xl:-left-[41%] 
				lg:-left-[41%] 
				lg2:-left-[10%] 
				-translate-x-[20%] z-0"
				>
					Master house
				</span>

				<Image
					src="/images/master_house/master_house_glasshouse.png"
					width={607}
					height={811}
					alt="Master house glasshouse"
					className="z-30 xl:w-[607px] xl:h-[811px] lg:w-[472px] lg:h-[631px]"
				/>

				<p
					className="
				xl:w-[252px] lg:w-[196px]
				xl:text-[20px] lg:text-[16px]"
				>
					Видовая оранжерея на стеклянном полу <br /> с сохранением
					эффекта второго света
				</p>

				<MasterHouseModern />
			</div>
		</div>
	);
}
