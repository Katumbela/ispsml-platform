'use client';

import Navbar from '../components/Navbar';
import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import Footer from '@/components/Footer';
import { StudyOffer } from '@/components/sections/study-offer/study-offer';
import { NewsComponents } from '@/components/news-component/news-componet';
import { EducationComponents } from '@/components/education-component/education-componet';
import { ScienceStudyCard } from '@/components/cards-science-secton/cards-science-section';
import { AboutTheSchoolComponents } from '@/components/about-the-school-component/about-the-school-componet';

export default function Home() {
	return (
		<div>
			<Navbar />
			<div>
				<Hero />
				<StudyOffer />
				<br />
				<NewsComponents />
				<br />
				<EducationComponents />
				<br />
				<AboutTheSchoolComponents />
				<br />
				<br />
				<br />
				<br />
				<br />
				{/* <AdmissionsSection /> */}
				<ScienceStudyCard />
				<QuickLinks />
				<Footer />
			</div>
		</div>
	);
}
