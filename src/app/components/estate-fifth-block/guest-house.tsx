import GuestHouseSlider from '../sliders/guest-house-slider/GuestHouseSlider';

export default function GuestHouse() {
	return (
		<div
			className="flex flex-row gap-[20px] 
		xl:mt-[243px] lg2:mt-[165px] lg:mt-[135px]
		xl:pt-[188px] lg:pt-[129px] 
		xl:pl-[220px] lg:pl-[100px]
		xl:pb-[216px] lg:pb-[135px] 
		border-y-[1px] border-secondary_slider "
			id="Гостевой дом"
		>
			<div>
				<div
					className="flex flex-col justify-between 
				xl:h-[660px] lg2:h-[560px] lg:h-[515px]
				xl:w-[357px] lg:w-[277px]
				"
				>
					<h2
						className="font-mirra 
					xl:text-[90px] lg:text-[78px]
					leading-[96%] "
					>
						Guest house
					</h2>

					<div className="flex flex-col">
						<span
							className="font-poiret 
						xl:text-[65px] lg:text-[56px]
						"
						>
							2a
						</span>
						<p className="xl:text-[20px] lg:text-[16px]">
							Комфортабельные номера <br /> со всеми удобствами{' '}
							<br /> и отдельными санузлами
						</p>
					</div>
				</div>
			</div>

			<GuestHouseSlider />
		</div>
	);
}
