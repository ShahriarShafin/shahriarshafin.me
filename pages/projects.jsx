import Project1 from '../assets/images/project1.png';
import Project2 from '../assets/images/project2.png';
import Description from '../utils/Description';
import Heading from '../utils/Heading';
import ProjectCard from '../utils/ProjectCard';
const projectInfo = [
	{
		title: 'RTX Server',
		des: 'SMATA IS AN ALLINONE CLOUDBASED SOLUTION INTEGRATING MANAGEMENT, COMMUNICATION ACCOUNTING FUNCTIONS',
		tech1: 'React',
		tech2: 'Node',
		tech3: 'Tailwind',
		image: Project1,
	},
	{
		title: 'RTX Server',
		des: 'SMATA IS AN ALLINONE CLOUDBASED SOLUTION INTEGRATING MANAGEMENT, COMMUNICATION ACCOUNTING FUNCTIONS',
		tech1: 'React',
		tech2: 'Node',
		tech3: 'Tailwind',
		image: Project2,
	},
	{
		title: 'RTX Server',
		des: 'SMATA IS AN ALLINONE CLOUDBASED SOLUTION INTEGRATING MANAGEMENT, COMMUNICATION ACCOUNTING FUNCTIONS',
		tech1: 'React',
		tech2: 'Node',
		tech3: 'Tailwind',
		image: Project1,
	},
	{
		title: 'RTX Server',
		des: 'SMATA IS AN ALLINONE CLOUDBASED SOLUTION INTEGRATING MANAGEMENT, COMMUNICATION ACCOUNTING FUNCTIONS',
		tech1: 'React',
		tech2: 'Node',
		tech3: 'Tailwind',
		image: Project2,
	},
];
const projects = () => {
	return (
		<section>
			<Heading text='Projects' />
			<Description text='A selection of projects ve worked on, during my career as a software developer.' />

			<div className='space-y-10'>
				{projectInfo.map((project, index) => {
					return (
						<ProjectCard key={index} leftAlign={index % 2 !== 0} {...project} />
					);
				})}
			</div>
		</section>
	);
};

export default projects;