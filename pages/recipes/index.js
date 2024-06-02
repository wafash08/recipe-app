import Container from '@/components/container';
import RecipeList from '@/components/recipe-list';
import SearchBar from '@/components/search-bar';
import { RecipeListSkeleton } from '@/components/skeleton';
import { useRecipe } from '@/hooks';
import { useSearchParams } from 'next/navigation';

export default function Recipes() {
	const searchParams = useSearchParams();
	const search = searchParams.get('search');
	const { data: recipes, status } = useRecipe(search);

	return (
		<section className='py-32'>
			<Container>
				<div className='w-full max-w-xl mx-auto mb-20'>
					<SearchBar />
				</div>

				{search ? (
					status === 'loading' ? (
						<RecipeListSkeleton />
					) : recipes.length > 0 ? (
						<RecipeList recipes={recipes} />
					) : (
						<p className='text-center text-xl'>
							Tidak ada hasil untuk{' '}
							<strong className='font-bold'>"{search}"</strong>
						</p>
					)
				) : null}
			</Container>
		</section>
	);
}
