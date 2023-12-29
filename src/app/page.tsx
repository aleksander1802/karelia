import Image from 'next/image';
import Estate from './components/estate-first-block/estate';
import LogoLink from './assets/svg/Logo-link-svg';
import ReelsSlider from './components/Sliders/Reels';

export default function Home() {
	return (
		<main>
			<Estate />
			<ReelsSlider />
		</main>
	);
}
