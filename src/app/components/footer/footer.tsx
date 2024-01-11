import AdaptiveNavLinksLeft, {
	AdaptiveNavLinksRight,
} from '../nav-links/adaptive-nav-links';
import AdaptiveNavLinks from '../nav-links/adaptive-nav-links';
import NavLinks from '../nav-links/nav-links';
import './footer.css';

export default function Footer() {
	return (
		<div
			className="
		xl:pt-[150px] lg:pt-[131px] sm:pt-[96px] pt-[84px]
		xl:pl-[220px] lg:pl-[100px] sm:pl-[41px] pl-[28px]
		xl:pb-[138px] lg:pb-[157px] sm:pb-[116px] pb-[100px]
		xl:pr-[291px] lg:pr-[100px] sm:pr-[41px] pr-[32px]
		w-full h-full footer"
		>
			<h2
				className="
				xl:text-[90px] sm:text-[78px] text-[58px]
				font-mirra 
				leading-[96%] 
				-tracking-[4.5px]
				footer__title				
				"
			>
				estate in Karelia
			</h2>

			<p className="xl:text-[20px] sm:text-[16px] footer__paragraph hidden sm:block">
				Приватность, природа <br /> и комфорт на высшем уровне
			</p>

			<div
				className="flex flex-col 
					xl:text-[24px] text-[18px] 
					xl:gap-[7px] gap-[27px]
					footer__feedback"
			>
				<span>+7 919 432 584 32</span>
				<span>EstateinKarelia@gmail.com</span>
			</div>

			<span className="footer__year">2024</span>

			<div className="hidden lg:block footer__links">
				<NavLinks />
			</div>

			<div className="sm:block lg:hidden footer__adaptive__links__left">
				<AdaptiveNavLinksLeft />
			</div>
			<div className="sm:block lg:hidden footer__adaptive__links__right">

				<AdaptiveNavLinksRight />
			</div>
		</div>
	);
}
