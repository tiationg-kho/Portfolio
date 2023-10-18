import { useState, useEffect } from 'react';
import {
	Container,
	Typography,
	Button,
	Box,
	CircularProgress,
	Alert,
} from '@mui/material';

import Contact from './Contact';

const FULL_TEXT = 'Software Development Engineer @ Seattle';

// eslint-disable-next-line react/prop-types
const HeroSection = ({ scrollToHandle }) => {
	const [text, setText] = useState('S');
	const [isLoading, setIsLoading] = useState(true);
	const [count, setCount] = useState(0);
	const [isBirdVisible, setIsBirdVisible] = useState(true);
	const [isBirdSecondVisible, setIsBirdSecondVisible] = useState(true);
	const [showAlert, setShowAlert] = useState(false);

	const delay = 150;

	useEffect(() => {
		let timerId;
		if (text.length < FULL_TEXT.length) {
			timerId = setTimeout(() => {
				setText(FULL_TEXT.substring(0, text.length + 1));
			}, delay);
		}

		return () => clearTimeout(timerId);
	}, [text]);

	useEffect(() => {
		if (count > 0 && count % 5 == 0) {
			setShowAlert(true);
		}
	}, [count]);

	const handleImageLoad = () => {
		setIsLoading(false);
	};

	const birdHit = (e) => {
		const circle = document.createElement('div');
		circle.style.width = '15px';
		circle.style.height = '15px';
		circle.style.borderRadius = '50%';
		circle.style.backgroundColor = '#99422E';
		circle.style.position = 'absolute';
		circle.style.left = `${e.clientX}px`;
		circle.style.top = `${e.clientY}px`;
		circle.style.zIndex = '10';
		return circle;
	};

	const handleBirdClick = (e) => {
		if (isBirdVisible) {
			const hitPoint = birdHit(e);
			document.body.appendChild(hitPoint);
			setTimeout(() => {
				hitPoint.remove();
			}, 800);

			setIsBirdVisible(false);
			setCount((prev) => prev + 1);
			setTimeout(() => {
				setIsBirdVisible(true);
			}, 3000);
		}
	};

	const handleBirdSecondClick = (e) => {
		if (isBirdSecondVisible) {
			const hitPoint = birdHit(e);
			document.body.appendChild(hitPoint);
			setTimeout(() => {
				hitPoint.remove();
			}, 800);

			setIsBirdSecondVisible(false);
			setCount((prev) => prev + 1);
			setTimeout(() => {
				setIsBirdSecondVisible(true);
			}, 2500);
		}
	};

	return (
		<>
			{showAlert && (
				<Alert
					style={{
						position: 'absolute',
						width: '250px',
						top: 0,
						left: '50%',
						transform: 'translate(-50%, 0)',
					}}
					severity='error'
					action={
						<Button
							color='inherit'
							size='small'
							onClick={() => setShowAlert(false)}
						>
							X
						</Button>
					}
				>
					Stop it! You have killed {count} birds.
				</Alert>
			)}
			<div className='bird-container'>
				<div
					onClick={(e) => handleBirdClick(e)}
					className={isBirdVisible ? 'bird' : 'bird bird-hidden'}
				></div>
			</div>
			<div className='bird-container-second'>
				<div
					onClick={(e) => handleBirdSecondClick(e)}
					className={
						isBirdSecondVisible ? 'bird-second' : 'bird-second bird-hidden'
					}
				></div>
			</div>
			{isLoading && <CircularProgress />}
			<Box
				onLoad={handleImageLoad}
				sx={{
					backgroundImage: `url('background.png')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '110vh',
					display: isLoading ? 'none' : 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Container maxWidth='sm'>
					<img
						onLoad={handleImageLoad}
						onContextMenu={(e) => e.preventDefault()}
						onMouseDown={(e) => e.preventDefault()}
						src='tiationg.png'
						alt='Tiationg Kho'
						style={{
							borderRadius: '50%',
							width: '150px',
							height: '150px',
							marginBottom: '20px',
							display: isLoading ? 'none' : 'inline',
						}}
						className='photo'
					/>
					<Typography
						variant='h2'
						component='h2'
						gutterBottom
						color='white'
						fontWeight='700'
						sx={{ letterSpacing: '0.025em' }}
					>
						Tiationg Kho
					</Typography>
					<Typography
						className='intro-text'
						variant='h5'
						component='h2'
						gutterBottom
					>
						{text}
					</Typography>
					<Typography variant='h6'>
						<Contact />
					</Typography>
					<Button
						variant='contained'
						color='primary'
						onClick={scrollToHandle}
						sx={{ backgroundColor: '#4F9298', marginTop: '2rem' }}
					>
						Learn More
					</Button>
				</Container>
			</Box>
		</>
	);
};

export default HeroSection;
