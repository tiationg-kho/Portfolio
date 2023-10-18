import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css';

function App() {
	const parallax = useRef(null);

	const scrollToHandle = () => {
		parallax.current.scrollTo(1);
	};

	return (
		<div className='app'>
			<Parallax ref={parallax} pages={3.5}>
				<ParallaxLayer offset={0} speed={-0.1}>
					<HeroSection scrollToHandle={scrollToHandle} />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.8}>
					<AboutMe />
				</ParallaxLayer>
				<ParallaxLayer
					offset={2.9}
					speed={0.15}
					onClick={() => parallax.current.scrollTo(0)}
				>
					<Footer />
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default App;
