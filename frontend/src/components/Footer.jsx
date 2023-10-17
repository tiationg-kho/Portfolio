import { Container, Typography } from '@mui/material';

import Contact from './Contact';

const Footer = () => {
	return (
		<Container
			style={{ backgroundColor: '#4F9298', color: 'white', padding: '1rem' }}
			sx={{ borderRadius: 2, marginTop: '2rem' }}
		>
			<Typography variant='body1' sx={{ fontWeight: 700, marginTop: '0.5rem' }}>
				© 2023 by Tiationg Kho
			</Typography>
			<Contact />
		</Container>
	);
};

export default Footer;
