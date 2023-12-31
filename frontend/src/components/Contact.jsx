import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
	return (
		<>
			<IconButton
				className='icon-button'
				color='inherit'
				href='https://github.com/tiationg-kho'
				target='_blank'
			>
				<GitHubIcon />
			</IconButton>
			<IconButton
				className='icon-button'
				color='inherit'
				href='https://www.linkedin.com/in/tiationgkho'
				target='_blank'
			>
				<LinkedInIcon />
			</IconButton>
			<IconButton
				className='icon-button'
				color='inherit'
				href='mailto:tiationgkho@gmail.com'
				target='_blank'
			>
				<EmailIcon />
			</IconButton>
		</>
	);
};

export default Contact;
