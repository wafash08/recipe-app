import ForYouSection from '@/components/sections/for-you-section';
import HeroSection from '@/components/sections/hero-section';
import NewRecipeSection from '@/components/sections/new-recipe-section';
import PopularSection from '@/components/sections/popular-section';
import { getRecipes } from '@/lib/recipes';

export default function Home({ recipes }) {
	return (
		<>
			<HeroSection />
			<ForYouSection recipes={recipes.slice(0, 2)} />
			<NewRecipeSection />
			<PopularSection recipes={recipes} />
		</>
	);
}

export async function getServerSideProps() {
	const recipes = await getRecipes();
	return {
		props: {
			recipes: recipes.data,
		},
	};
}
