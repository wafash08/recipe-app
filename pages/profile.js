import CategoryRecipeList from '@/components/category-recipe-list';
import Container from '@/components/container';
import RecipeList from '@/components/recipe-list';
import { ProfileSkeleton, RecipeListSkeleton } from '@/components/skeleton';
import {
	useLikedRecipe,
	useMyRecipe,
	useProfile,
	useRecipebyCategory,
	useSavedRecipe,
} from '@/hooks';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

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

export default function Profile() {
	const { data: profile, status: profileStatus } = useProfile();
	const searchParams = useSearchParams();
	const category = searchParams.get('category') ?? 'mine';

	let categoryRecipeList = null;

	if (category === 'mine') {
		categoryRecipeList = <MineRecipeSection />;
	} else if (category === 'saved') {
		categoryRecipeList = <SavedRecipeSection />;
	} else if (category === 'liked') {
		categoryRecipeList = <LikedRecipeSection />;
	}

	return (
		<section className='py-40 bg-white'>
			<Container>
				{profileStatus === 'loading' ? (
					<ProfileSkeleton />
				) : (
					<div className='flex flex-col items-center gap-6 mb-20'>
						<div className='w-40 aspect-square rounded-full overflow-hidden'>
							<img src='/images/empty-profile.jpg' alt={profile.name} />
						</div>
						<h1 className='text-2xl'>{profile.name}</h1>
					</div>
				)}

				<nav className='border-b border-b-[#DFDFDF] mb-10'>
					<ul className='flex flex-col md:flex-row md:items-center gap-4 flex-wrap'>
						{links.map(({ href, label }) => {
							const currentCategory = category === href;
							return (
								<li key={href} className='group'>
									<Link
										href={`?category=${href}`}
										className={clsx(
											'inline-flex items-center justify-center w-full px-6 py-4 text-lg text-[#666666]',
											'group-hover:text-black focus:text-black transition-colors',
											currentCategory && 'underline text-black'
										)}
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
	);
}

function MineRecipeSection() {
	const { data: recipes, status } = useMyRecipe();
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

function SavedRecipeSection() {
	const { data: recipes, status } = useSavedRecipe();
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
			recipeList = <CategoryRecipeList recipes={recipes} />;
		}
	}

	return (
		<section>
			<h2 className='sr-only'>Saved Recipe</h2>

			{recipeList}
		</section>
	);
}

function LikedRecipeSection() {
	const { data: recipes, status } = useLikedRecipe();
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
			recipeList = <CategoryRecipeList recipes={recipes} />;
		}
	}

	return (
		<section>
			<h2 className='sr-only'>Saved Recipe</h2>

			{recipeList}
		</section>
	);
}
