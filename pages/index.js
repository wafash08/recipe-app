import Container from '@/components/container';
import ForYouSection from '@/components/sections/for-you-section';
import HeroSection from '@/components/sections/hero-section';
import NewRecipeSection from '@/components/sections/new-recipe-section';
import PopularSection from '@/components/sections/popular-section';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<HeroSection />
			<ForYouSection />
			<NewRecipeSection />
			<PopularSection />
		</>
	);
}
