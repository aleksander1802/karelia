import NavLinks from '../nav-links/nav-links';
import './footer.css';

export default function Footer() {
	return (
		<div
			className="
		xl:pt-[150px] lg:pt-[131px] 
		xl:pl-[220px] lg:pl-[100px] 
		xl:pb-[138px] lg:pb-[157px] 
		xl:pr-[291px] lg:pr-[100px]
		 w-full footer"
		>
			<h2
				className="
				xl:text-[90px] lg:text-[78px]
				font-mirra 
				leading-[96%] 
				-tracking-[4.5px]
				footer__title				
				"
			>
				estate in Karelia
			</h2>

			<p className="xl:text-[20px] lg:text-[16px] footer__paragraph">
				Приватность, природа <br /> и комфорт на высшем уровне
			</p>

			<div
				className="flex flex-col 
					xl:text-[24px] lg:text-[18px] 
					xl:gap-[7px] lg:gap-[27px]
					footer__feedback"
			>
				<span>+7 919 432 584 32</span>
				<span>EstateinKarelia@gmail.com</span>
			</div>

			<span className="footer__year">2024</span>

			<div className='footer__links'>
				<NavLinks />
			</div>
		</div>
	);
}
