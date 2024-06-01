import ForYouSection from '@/components/sections/for-you-section';
import HeroSection from '@/components/sections/hero-section';
import NewRecipeSection from '@/components/sections/new-recipe-section';
import PopularSection from '@/components/sections/popular-section';
import { getRecipeList } from '@/lib/recipes';

export default function Home({ recipes }) {
	return (
		<>
			<HeroSection />
			<ForYouSection />
			<NewRecipeSection />
			<PopularSection recipes={recipes} />
		</>
	);
}

export async function getServerSideProps() {
	const recipes = await getRecipeList();
	return {
		props: {
			recipes: recipes.data,
		},
	};
}
