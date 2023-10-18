import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css';

function App() {
	const parallax = useRef(null);
	const isMobile = window.innerWidth <= 600;

	const scrollToHandle = () => {
		parallax.current.scrollTo(1);
	};

	return (
		<div className='app'>
			<Parallax ref={parallax} pages={isMobile ? 4.5 : 3.6}>
				<ParallaxLayer offset={2.2} speed={1.2} style={{ opacity: 0.4 }}>
					<img
						src='fav-green.svg'
						style={{ display: 'block', width: '20%', marginLeft: '5%' }}
					/>
					<img
						src='fav-green.svg'
						style={{ display: 'block', width: '20%', marginLeft: '85%' }}
					/>
				</ParallaxLayer>
				<ParallaxLayer offset={2.4} speed={-0.4} style={{ opacity: 0.4 }}>
					<img
						src='fav-green.svg'
						style={{ display: 'block', width: '10%', marginLeft: '35%' }}
					/>
					<img
						src='fav-green.svg'
						style={{ display: 'block', width: '20%', marginLeft: '65%' }}
					/>
				</ParallaxLayer>
				<ParallaxLayer offset={3.1} speed={0.8} style={{ opacity: 0.4 }}>
					<img
						src='fav-green.svg'
						style={{ display: 'block', width: '20%', marginLeft: '15%' }}
					/>
					<img
						src='fav-green.svg'
						style={{ display: 'block', width: '10%', marginLeft: '95%' }}
					/>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-0.1}>
					<HeroSection scrollToHandle={scrollToHandle} />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.8}>
					<AboutMe />
				</ParallaxLayer>
				<ParallaxLayer
					offset={isMobile ? 4 : 3}
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
