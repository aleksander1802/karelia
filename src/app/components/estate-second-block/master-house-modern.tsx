import Image from 'next/image';
import MasterHouseTV from '../../../../public/images/master_house/master_house_tv.png';

export default function MasterHouseModern() {
	const masterHouseModernWidth = 733;
	const masterHouseModernHeight = 619;

	return (
		<div
			className="xl:w-[1110px] lg:w-[868px] sm:w-[663px]
		 absolute 
		 xl:top-[701px] lg:top-[589px] sm:top-[557px] top-[798px]
		 lg:left-0 gap-[18px] 
		 flex 
		 sm:flex-row flex-col-reverse
		 justify-between 
		 items-center"
		>
			<p
				className="
				xl:w-[231px] lg:w-[194px] sm:w-[208px] w-[250px]
			 	xl:text-[20px] text-[16px] sm:pl-0 pl-[60px]
				"
			>
				Дом оснащен современной техникой и изысканной мебелью известных
				брендов
			</p>

			<Image
				src={MasterHouseTV}
				width={masterHouseModernWidth}
				height={masterHouseModernHeight}
				alt="Master house modern"
				priority
				className="relative z-20 
				xl:w-[733px] xl:h-[619px] 
				lg:w-[572px] lg:h-[483px]
				sm:w-[435px] sm:h-[367px]
				w-[333px] h-[280px]
				"
			/>
		</div>
	);
}
