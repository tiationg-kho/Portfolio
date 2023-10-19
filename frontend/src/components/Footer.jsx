import { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Contact from './Contact';

// eslint-disable-next-line react/prop-types
const Footer = ({ jumpHandle }) => {
	const [isExpanded, setIsExpanded] = useState(true);

	const expandHandle = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<Container
			style={{
				backgroundColor: '#4F9298',
				padding: isExpanded ? '1rem' : 0,
				color: 'white',
				position: 'relative',
				minWidth: '100%',
			}}
			sx={{ borderRadius: 2 }}
		>
			<Button
				variant='contained'
				color='primary'
				onClick={expandHandle}
				sx={{
					backgroundColor: '#4F9298',
					marginBottom: '0.25rem',
					position: 'absolute',
					top: 8,
					right: 8,
					minWidth: 'auto',
					width: '40px',
					height: '40px',
					borderRadius: '50%',
					border: '2px solid white',
				}}
			>
				{isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
			</Button>
			{isExpanded && (
				<>
					<Typography
						variant='body1'
						sx={{ fontWeight: 700, marginTop: '0.5rem' }}
					>
						© 2023 by Tiationg Kho
					</Typography>
					<Contact />
					<Typography
						variant='body2'
						sx={{ fontWeight: 500, marginTop: '0.1rem', cursor: 'pointer' }}
						onClick={jumpHandle}
					>
						Back to top ⬆
					</Typography>
				</>
			)}
		</Container>
	);
};

export default Footer;
