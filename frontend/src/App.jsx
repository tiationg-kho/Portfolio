import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css';

function App() {
	const parallax = useRef(null);
	const isMobile = window.innerWidth <= 500;

	const scrollToHandle = () => {
		parallax.current.scrollTo(1);
	};

	return (
		<div className='app'>
			<Parallax ref={parallax} pages={isMobile ? 4.2 : 2.55}>
				<ParallaxLayer offset={0} speed={-0.1}>
					<HeroSection scrollToHandle={scrollToHandle} />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.8}>
					<AboutMe />
				</ParallaxLayer>
				<ParallaxLayer
					offset={isMobile ? 3.8 : 2.15}
					speed={0.2}
					onClick={() => parallax.current.scrollTo(0)}
				>
					<Footer />
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default App;
