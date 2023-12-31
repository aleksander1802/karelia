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

	const masterHouseStyle = {
		width: masterHouseWidth || 972,
		height: masterHouseHeight || 1049,
	};

	const masterHouseFenceWidth = 584;
	const masterHouseFenceHeight = 809;

	const masterHouseFenceStyle = {
		width: masterHouseFenceWidth || 584,
		height: masterHouseFenceHeight || 809,
	};

	const masterHouseHearthWidth = 607;
	const masterHouseHearthHeight = 811;

	const masterHouseHearthStyle = {
		width: masterHouseHearthWidth || 607,
		height: masterHouseHearthHeight || 811,
	};

	const FirstLevelRender = () => {
		return (
			<ul className="flex flex-col relative z-30 gap-[26px] pt-[66px] pl-[38px] font-light">
				{firstLevel.map((level, idx) => (
					<li key={idx}>{level.title}</li>
				))}
			</ul>
		);
	};

	const SecondLevelRender = () => {
		return (
			<ul className="flex flex-col gap-[26px] pt-[66px] pl-[33px] font-light">
				{secondLevel.map((level, idx) => (
					<li key={idx}>{level.title}</li>
				))}
			</ul>
		);
	};

	return (
		<div className="master-house relative min-h-screen cursor-default mt-[300px]">
			<div className="flex flex-row justify-between mb-[200px] pl-[154px] pr-[237px]">
				<div className="master-description flex flex-col justify-between h-[316px]">
					<span className="text-[90px] font-mirra -tracking-[4.5px]">
						Master house
					</span>
					<p className="w-[440px]  text-[20px]">
						Основной дом из рубленного бревна (толстомер), площадью
						200 м2 с <br /> видовой террасой В доме реализован{' '}
						<br /> уникальный дизайн проект в стиле фьюжн.
					</p>
				</div>

				<div className="master-level [&>div]:w-[347px] [&>div>span]:-tracking-[3.3px] [&>div>span]:leading-[54px] flex flex-row">
					<div className="first-level relative">
						<span className="relative text-[66px] font-poiret  pl-[2px] z-30">
							1 этаж
						</span>
						<FirstLevelRender />
						<div className="first-level-back absolute top-0 left-0 w-[347px] h-[1579px] bg-accent">
							<div className="absolute flex justify-center items-center left-0 top-[683px] w-[347px] h-[395px]">
								<span className="font-mirra text-[171px] leading-[52px]">
									M
								</span>
								<LogoMaster className="absolute -top-2" />
							</div>
						</div>
					</div>
					<div className="second-level">
						<span className="text-[66px] font-poiret pl-[4px]">
							2 этаж
						</span>
						<SecondLevelRender />
					</div>
				</div>
			</div>

			<div className="flex justify-between items-start relative z-0">
				<Image
					src="/images/master_house/master_house.png"
					width={972}
					height={1049}
					alt="Master house"
					priority={true}
					style={masterHouseStyle}
				/>
				<Image
					src="/images/master_house/master_house_fence.png"
					width={584}
					height={809}
					alt="Master house"
					priority={true}
					style={masterHouseFenceStyle}
				/>
				<MasterHouseHearth />
			</div>

			<div className="relative ml-[528px] mt-[570px] w-[1005px] h-[811px] flex flex-row justify-between items-center">
				<span className="w-[3628px] leading-[92%] font-mirra text-[538px] -tracking-[27px] text-secondary_slider absolute -top-[105px] -left-[41%] -translate-x-[20%] z-0">
					Master house
				</span>

				<Image
					src="/images/master_house/master_house_glasshouse.png"
					width={607}
					height={811}
					alt="Master house"
					priority={true}
					style={masterHouseHearthStyle}
					className="z-30"
				/>

				<p className="w-[252px] text-[20px]">
					Видовая оранжерея на стеклянном полу <br /> с сохранением
					эффекта второго света
				</p>

				<MasterHouseModern />
			</div>
		</div>
	);
}
