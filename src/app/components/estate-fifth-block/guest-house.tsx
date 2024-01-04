import GuestHouseSlider from '../sliders/guest-house-slider/GuestHouseSlider';

export default function GuestHouse() {
	return (
		<div className="flex flex-row gap-[20px] mt-[243px] pt-[188px] pl-[220px] pb-[216px] border-y-[1px] border-secondary_slider w-full" id='Гостевой дом'>
			<div >
				<div className="flex flex-col justify-between h-[660px] w-[357px] ">
					<h2 className="font-mirra text-[90px] leading-[96%] ">
						Guest house
					</h2>

					<div className="flex flex-col">
						<span className="font-poiret text-[65px]">2a</span>
						<p>
							Комфортабельные номера <br /> со всеми удобствами{' '}
							<br /> и отдельными санузлами
						</p>
					</div>
				</div>
			</div>

			<div className="w-full">
				<GuestHouseSlider />
			</div>
		</div>
	);
}
