'use client';

import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import { StudyOffer } from '@/components/sections/study-offer/study-offer';
import { NewsComponents } from '@/components/news-component/news-componet';
import { ScienceStudyCard } from '@/components/cards-science-secton/cards-science-section';
import { AboutTheSchoolComponents } from '@/components/about-the-school-component/about-the-school-componet';
import FixedImageScrollWithElastic from '@/components/sections/admissions-section/admissions-section';
import ConferenceComponent from './organic-unit/components/conference-component';

export default function Home() {
	return (
		<>
		<head>
			<title>Instituto Superior Politécnico São Martinho de Lima</title>
		</head> 
			<div>
				<Hero />
				<StudyOffer />
				<br />
				<NewsComponents />
				<br />
				<FixedImageScrollWithElastic />
				{/* <EducationComponents /> */}
				<br />
				<br />
				<br />
				<br />
				<br />
				<AboutTheSchoolComponents />
				<br />
				<br />
				<br />
				<br />
				<br />
				<ScienceStudyCard />
				<ConferenceComponent />
				<QuickLinks /> 
			</div>
		</>
	);
}
