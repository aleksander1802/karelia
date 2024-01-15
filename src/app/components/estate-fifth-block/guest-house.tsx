import GuestHouseSlider from '../sliders/guest-house-slider/GuestHouseSlider';

export default function GuestHouse() {
	return (
		<div
			className="flex 
			flex-row gap-[20px] 
			xl:mt-[243px] lg2:mt-[165px] lg:mt-[135px] sm:mt-[212px] mt-[126px]			
			xl:pt-[188px] lg:pt-[129px] sm:pt-[112px] pt-[151px]
			xl:pl-[220px] lg:pl-[100px] sm:pl-[45px] pl-[30px]
			xl:pb-[216px] lg:pb-[135px] sm:pb-[263px] pb-[244px]	
			border-y-[1px] border-secondary_slider "
			id="Гостевой дом"
		>
			<div
				className="flex 
					flex-col sm:flex-row lg:flex-col
					justify-between 
					xl:h-[660px] lg2:h-[560px] lg:h-[515px] h-[500px]
					xl:w-[357px] lg:w-[277px] sm:w-[664px] 
					lg:relative
					absolute
					sm:top-[730px] lg:top-0 top-[100px]
				"
			>
				<h2
					className="font-mirra 
						xl:text-[90px] sm:text-[78px] text-[70px]
						leading-[96%] 
						w-max sm:w-[211px]"
				>
					Guest house
				</h2>

				<div className="flex flex-col justify-between 
				 xl:h-[201px] lg:h-[141px] h-[121px]">
					<span
						className="font-poiret 
							xl:text-[65px] sm:text-[56px] text-[44px]
							leading-[80%] lg:leading-0
						"
					>
						2a
					</span>
					<p className="xl:text-[20px] text-[16px] text-secondary">
						Комфортабельные номера <br /> со всеми удобствами <br />{' '}
						и отдельными санузлами
					</p>
				</div>
			</div>

			<GuestHouseSlider />
		</div>
	);
}
