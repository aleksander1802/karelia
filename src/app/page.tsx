import Estate from './components/estate-first-block/estate';
import MasterHouse from './components/estate-second-block/master-house';
import ReelsSlider from './components/sliders/reels/Reels';

export default function Home() {
	return (
		<main>
			<Estate />
			<ReelsSlider />
			<MasterHouse />
		</main>
	);
}
