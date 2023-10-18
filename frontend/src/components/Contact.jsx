import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
	const clickHandle = (e) => {
		e.stopPropagation();
	};
	return (
		<>
			<IconButton
				color='inherit'
				href='https://github.com/tiationg-kho'
				target='_blank'
				onClick={clickHandle}
			>
				<GitHubIcon />
			</IconButton>
			<IconButton
				color='inherit'
				href='https://www.linkedin.com/in/tiationgkho'
				target='_blank'
				onClick={clickHandle}
			>
				<LinkedInIcon />
			</IconButton>
			<IconButton
				color='inherit'
				href='mailto:tiationgkho@gmail.com'
				target='_blank'
				onClick={clickHandle}
			>
				<EmailIcon />
			</IconButton>
		</>
	);
};

export default Contact;
