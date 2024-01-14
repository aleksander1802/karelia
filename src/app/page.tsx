import GuestHouse from './components/estate-fifth-block/guest-house';
import Estate from './components/estate-first-block/estate';
import Nature from './components/estate-fourth-block/nature';
import MasterHouse from './components/estate-second-block/master-house';
import EsatetLocation from './components/estate-seventh-block/estate-location';
import Territory from './components/estate-sixth-block/territory';
import SpaHouse from './components/estate-third-block/spa-house';
import Footer from './components/footer/footer';
import Menu from './components/menu-burger/menu';
import MasterHouseSlider from './components/sliders/master-house-slider/MasterHouseSlider';
import NatureFirstSlider from './components/sliders/nature-sliders/first-slider/NatureFirstSlider';
import NatureSecondSlider from './components/sliders/nature-sliders/second-slider/NatureSecondSlider';
import ReelsSlider from './components/sliders/reels/Reels';
import SpaHouseSlider from './components/sliders/spa-house-slider/SpaHouseSlider';

export default function Home() {
	return (
		<main className='relative'>
			{/* <Menu /> */}
			{/* <Estate /> */}
			{/* <ReelsSlider /> */}
			{/* <MasterHouse /> */}
			{/* <MasterHouseSlider /> */}
			{/* <SpaHouse /> */}
			{/* <SpaHouseSlider /> */}
			{/* <Nature /> */}
			<NatureFirstSlider />
			{/* <NatureSecondSlider /> */}
			{/* <GuestHouse /> */}
			{/* <Territory /> */}
			{/* <EsatetLocation /> */}
			{/* <Footer /> */}
		</main>
	);
}
