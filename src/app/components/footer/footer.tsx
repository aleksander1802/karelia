import NavLinks from '../nav-links/nav-links';

export default function Footer() {
	return (
		<div
			className="
		xl:pt-[150px] lg:pt-[131px] 
		xl:pl-[220px] lg:pl-[100px] 
		xl:pb-[138px] lg:pb-[157px] 
		xl:pr-[291px] lg:pr-[100px]
		flex flex-row justify-between w-full"
		>
			<div
				className="
			xl:w-[355px] lg:w-[474px]
			 flex flex-col justify-between"
			>
				<h2
					className="
				xl:text-[90px] lg:text-[78px]
				font-mirra 
				leading-[96%] 
				-tracking-[4.5px]"
				>
					estate in Karelia
				</h2>
				<p className="xl:text-[20px] lg:text-[16px]">
					Приватность, природа <br /> и комфорт на высшем уровне
				</p>
			</div>

			<div className="flex flex-row xl:gap-[170px] lg:gap-[182px]">
				<div className="flex flex-col justify-between w-[330px]">
					<div
						className="flex flex-col 
					xl:text-[24px] lg:text-[18px] 
					xl:gap-[7px] lg:gap-[27px]"
					>
						<span>+7 919 432 584 32</span>
						<span>EstateinKarelia@gmail.com</span>
					</div>

					<span>2024</span>
				</div>

				<NavLinks />
			</div>
		</div>
	);
}
