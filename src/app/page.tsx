import Estate from './components/estate-first-block/estate';
import NatureHouse from './components/estate-fourth-block/nature-house';
import MasterHouse from './components/estate-second-block/master-house';
import SpaHouse from './components/estate-third-block/spa-house';
import MasterHouseSlider from './components/sliders/master-house-slider/MasterHouseSlider';
import NatureFirstSlider from './components/sliders/nature-house-sliders/first-slider/NatureFirstSlider';
import ReelsSlider from './components/sliders/reels/Reels';
import SpaHouseSlider from './components/sliders/spa-house-slider/SpaHouseSlider';

export default function Home() {
	return (
		<main>
			<Estate />
			<ReelsSlider />
			<MasterHouse />
			<MasterHouseSlider />
			<SpaHouse />
			<SpaHouseSlider />
			<NatureHouse />
			<NatureFirstSlider />
		</main>
	);
}
