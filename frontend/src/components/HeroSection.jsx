import { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

import Contact from './Contact';

const FULL_TEXT = 'Software Development Engineer @ Seattle';

const HeroSection = () => {
	const [text, setText] = useState('S');
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

	return (
		<>
			<div className='bird-container'>
				<div className='bird'></div>
			</div>
			<div className='bird-container-second'>
				<div className='bird-second'></div>
			</div>
			<Box
				sx={{
					backgroundImage: `url('background.png')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '110vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Container maxWidth='sm'>
					<img
						src='tiationg.png'
						alt='Tiationg Kho'
						style={{
							borderRadius: '50%',
							width: '150px',
							height: '150px',
							marginBottom: '20px',
						}}
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
					<Typography variant='h5' component='h2' gutterBottom>
						{text}
					</Typography>
					<Typography variant='h6'>
						<Contact />
					</Typography>
					<Button
						variant='contained'
						color='primary'
						href='#about'
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
