import BUSMS from '../assets/images/busms.png';
import CPSCS from '../assets/images/cpscs.png';
import UAP from '../assets/images/uap.png';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import EduCard from '../utils/EduCard';
import Heading from '../utils/Heading';

const eduInfo = [
	{
		institution: 'University of Asia Pacific',
		logo: CPSCS,
		degree: 'Bachelor of Science, Computer Science & Engineering (CSE)',
		startDate: '2018',
		endDate: '2022',
	},
	{
		institution: 'Cantonment Public School & College, BUSMS',
		logo: BUSMS,
		degree: 'Higher Secondary Certificate, Science',
		startDate: '2016',
		endDate: '2018',
	},
	{
		institution: 'Cantonment Public School & College, Saidpur',
		logo: UAP,
		degree: 'Secondary School Certificate, Science',
		startDate: '2014',
		endDate: '2016',
	},
];

const about = () => {
	return (
		<>
			<NavBar />
			<main className='max-w-[50rem] mx-auto w-full py-3 px-10 md:px-0'>
				<section>
					<Heading text={'Education'} />
					<div className='space-y-4 mt-3'>
						{eduInfo.map((edu, index) => {
							return <EduCard key={index} {...edu} />;
						})}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default about;