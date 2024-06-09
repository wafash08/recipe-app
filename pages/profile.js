import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import CategoryRecipeList from '@/components/category-recipe-list';
import Container from '@/components/container';
import RecipeList from '@/components/recipe-list';
import { ProfileSkeleton, RecipeListSkeleton } from '@/components/skeleton';
import {
	useLikedRecipe,
	useMyRecipe,
	useProfile,
	useSavedRecipe,
} from '@/hooks';
import Layout from '@/components/layout';

const links = [
	{
		href: 'mine',
		label: 'My Recipe',
	},
	{
		href: 'saved',
		label: 'Saved Recipe',
	},
	{
		href: 'liked',
		label: 'Liked Recipe',
	},
];

export default function Profile({ token }) {
	const { data: profile, status: profileStatus } = useProfile(token);
	const searchParams = useSearchParams();
	const category = searchParams.get('category') ?? 'mine';

	let categoryRecipeList = null;

	if (category === 'mine') {
		categoryRecipeList = <MineRecipeSection token={token} />;
	} else if (category === 'saved') {
		categoryRecipeList = <SavedRecipeSection token={token} />;
	} else if (category === 'liked') {
		categoryRecipeList = <LikedRecipeSection token={token} />;
	}

	return (
		<Layout hasLoggedIn={!!token}>
			<section className='py-40 bg-white'>
				<Container>
					{profileStatus === 'loading' ? (
						<ProfileSkeleton />
					) : (
						<div className='flex flex-col items-center gap-6 mb-20'>
							<div className='w-40 aspect-square rounded-full overflow-hidden'>
								<img src='/images/empty-profile.jpg' alt={profile.name} />
							</div>
							<h1 className='text-2xl font-bold'>{profile.name}</h1>
						</div>
					)}

					<nav className='border-b border-b-[#DFDFDF] mb-10'>
						<ul className='flex flex-row md:items-center gap-4 overflow-x-auto p-4'>
							{links.map(({ href, label }) => {
								const currentCategory = category === href;
								return (
									<li key={href} className='group shrink-0'>
										<Link
											href={`?category=${href}`}
											className={clsx(
												'inline-flex items-center justify-center w-full px-6 py-4 text-lg text-[#666666]',
												'group-hover:text-black focus:text-black transition-colors',
												currentCategory && 'underline text-black'
											)}
											scroll={false}
										>
											{label}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>

					{categoryRecipeList}
				</Container>
			</section>
		</Layout>
	);
}

function MineRecipeSection({ token }) {
	const { data: recipes, status } = useMyRecipe(token);
	let recipeList = null;

	if (status === 'loading') {
		recipeList = <RecipeListSkeleton />;
	} else if (status === 'success') {
		if (recipes.length === 0) {
			recipeList = (
				<p>
					Kamu belum membuat resep. Ayo{' '}
					<Link href='/recipes/add' className='underline'>
						tambahkan
					</Link>{' '}
					resepmu.
				</p>
			);
		} else {
			recipeList = <RecipeList recipes={recipes} />;
		}
	}

	return (
		<section>
			<h2 className='sr-only'>My Recipe</h2>

			{recipeList}
		</section>
	);
}

function SavedRecipeSection({ token }) {
	const { data: recipes, status } = useSavedRecipe(token);
	let recipeList = null;

	if (status === 'loading') {
		recipeList = <RecipeListSkeleton />;
	} else if (status === 'success') {
		if (recipes.length === 0) {
			recipeList = (
				<p>
					Kamu belum menyimpan resep. Ayo{' '}
					<Link href='/' className='underline'>
						simpan
					</Link>{' '}
					resep favoritmu.
				</p>
			);
		} else {
			recipeList = <CategoryRecipeList recipes={recipes} type='saved' />;
		}
	}

	return (
		<section>
			<h2 className='sr-only'>Saved Recipe</h2>

			{recipeList}
		</section>
	);
}

function LikedRecipeSection({ token }) {
	const { data: recipes, status } = useLikedRecipe(token);
	let recipeList = null;

	if (status === 'loading') {
		recipeList = <RecipeListSkeleton />;
	} else if (status === 'success') {
		if (recipes.length === 0) {
			recipeList = (
				<p>
					Kamu belum menyukai resep. Ayo{' '}
					<Link href='/' className='underline'>
						sukai
					</Link>{' '}
					resep favoritmu.
				</p>
			);
		} else {
			recipeList = <CategoryRecipeList recipes={recipes} type='liked' />;
		}
	}

	return (
		<section>
			<h2 className='sr-only'>Saved Recipe</h2>

			{recipeList}
		</section>
	);
}

export async function getServerSideProps({ req }) {
	const token = req.cookies.token || '';
	return {
		props: {
			token,
		},
	};
}
