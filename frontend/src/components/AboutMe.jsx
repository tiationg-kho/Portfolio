import { useState, useEffect, useRef } from 'react';
import {
	Container,
	Typography,
	List,
	ListItem,
	ListItemText,
	Chip,
} from '@mui/material';
import {
	DiPython,
	DiJava,
	DiJavascript,
	DiHtml5,
	DiCss3,
} from 'react-icons/di';
import {
	SiSpringboot,
	SiReact,
	SiNextdotjs,
	SiExpress,
	SiFlask,
	SiFastapi,
	SiMysql,
	SiPostgresql,
	SiMongodb,
	SiAmazonaws,
	SiApachemaven,
	SiDocker,
	SiGit,
	SiGithubactions,
	SiTerraform,
	SiPacker,
} from 'react-icons/si';

const skills = [
	{
		id: 1,
		name: 'Python',
		icon: <DiPython style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 2,
		name: 'Java',
		icon: <DiJava style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 3,
		name: 'JavaScript',
		icon: <DiJavascript style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 4,
		name: 'HTML',
		icon: <DiHtml5 style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 5,
		name: 'CSS',
		icon: <DiCss3 style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 6,
		name: 'Spring Boot',
		icon: <SiSpringboot style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 7,
		name: 'React.js',
		icon: <SiReact style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 8,
		name: 'Next.js',
		icon: <SiNextdotjs style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 9,
		name: 'Express.js',
		icon: <SiExpress style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 10,
		name: 'Flask',
		icon: <SiFlask style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 11,
		name: 'FastAPI',
		icon: <SiFastapi style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 12,
		name: 'MySQL',
		icon: <SiMysql style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 13,
		name: 'PostgreSQL',
		icon: <SiPostgresql style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 14,
		name: 'MongoDB',
		icon: <SiMongodb style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 15,
		name: 'AWS',
		icon: <SiAmazonaws style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 16,
		name: 'Maven',
		icon: <SiApachemaven style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 17,
		name: 'Docker',
		icon: <SiDocker style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 18,
		name: 'Git',
		icon: <SiGit style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 19,
		name: 'GitHub Actions',
		icon: <SiGithubactions style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 20,
		name: 'Terraform',
		icon: <SiTerraform style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
	{
		id: 21,
		name: 'Packer',
		icon: <SiPacker style={{ fontSize: '1.5rem', color: 'white' }} />,
	},
];

const AboutMe = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const skillItemRefs = useRef([]);
	const isMobile = window.innerWidth <= 500;

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		skillItemRefs.current = skillItemRefs.current.slice(0, skills.length);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{
				threshold: 0.8,
			}
		);

		skillItemRefs.current.forEach((ref) => ref && observer.observe(ref));

		return () => {
			skillItemRefs.current.forEach((ref) => ref && observer.unobserve(ref));
		};
	}, []);

	return (
		<Container id='about' className='about-container'>
			<Typography variant='h2' gutterBottom fontWeight='500'>
				About Me
			</Typography>
			<Typography variant='h4' gutterBottom>
				🚀 Experience
			</Typography>
			<Typography variant='body1' paragraph className='about-context'>
				During my internship at Amazon, I had the privilege of contributing to
				groundbreaking projects that are shaping the future of e-commerce and
				fintech. My expertise lies in harnessing AWS cloud services to optimize
				performance and boost reliability. I excel in building robust backend
				services, crafting seamless user experiences, and orchestrating CI/CD
				pipelines for seamless deployments.
			</Typography>

			<Typography variant='h4' gutterBottom>
				🌟 Unique Qualities
			</Typography>
			<Typography variant='body1' paragraph className='about-context'>
				What truly sets me apart is my unwavering commitment to collaborative
				success. I thrive in team environments, combining effective
				communication with innovative problem-solving. Overcoming challenges and
				delivering impactful solutions is what motivates me every day.
			</Typography>

			<Typography variant='h4' gutterBottom>
				🌍 Advocacy & Design
			</Typography>
			<Typography variant='body1' paragraph className='about-context'>
				Beyond coding, I am a strong advocate for user-centric design. My
				background in sociology has given me a deep appreciation for technology
				seamlessly integrated into people&apos;s lives. My goal is to engineer
				solutions that not only work flawlessly but also enhance the human
				experience.
			</Typography>
			<Typography variant='h4' gutterBottom>
				💡 Tech Skills
			</Typography>
			<List
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(12, 1fr)',
					gap: '0.2rem',
					marginBottom: '2rem',
				}}
			>
				{skills.map((skill, idx) => (
					<ListItem
						className='skill-item-container'
						key={skill.id + skill.name}
						style={
							windowWidth < 600
								? { gridColumn: 'span 6', textAlign: 'center' }
								: { gridColumn: 'span 4', textAlign: 'center' }
						}
					>
						<ListItemText>
							<Chip
								className='skill-item'
								ref={(element) => (skillItemRefs.current[idx] = element)}
								icon={skill.icon}
								label={skill.name}
								color='default'
								style={{
									backgroundColor: '#9C442D',
									padding: '1rem',
									color: 'white',
									fontSize: isMobile ? '10px' : '13px',
								}}
							/>
						</ListItemText>
					</ListItem>
				))}
			</List>
		</Container>
	);
};

export default AboutMe;
