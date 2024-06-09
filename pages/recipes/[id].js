import CommentForm from '@/components/comment-form';
import Container from '@/components/container';
import Layout from '@/components/layout';
import CommentSection from '@/components/sections/comment-section';
import { isImageValid } from '@/helpers';
import {
	addLikedRecipe,
	addSavedRecipe,
	getLikedRecipe,
	getRecipeById,
	getSavedRecipe,
	removeLikedRecipe,
	removeSavedRecipe,
} from '@/lib/recipes';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function RecipeDetail({
	recipe,
	token,
	wasThisRecipeLiked,
	wasThisRecipeSaved,
}) {
	const { title, description, image, id } = recipe;

	const [saved, setSaved] = useState(() => (wasThisRecipeSaved ? true : false));
	const [liked, setLiked] = useState(() => (wasThisRecipeLiked ? true : false));
	const { push } = useRouter();
	const listOfDescription = description.split('\n');

	const handleSave = async id => {
		if (!token) {
			push('/login');
		} else {
			try {
				if (saved) {
					await removeSavedRecipe(token, wasThisRecipeSaved.id);
					setSaved(false);
					toast(`${title} berhasil dihapus`, {
						position: 'bottom-right',
						icon: '🤗',
						style: { backgroundColor: '#4ade80', color: '#fff' },
					});
				} else {
					await addSavedRecipe(token, id);
					setSaved(true);
					toast(`${title} berhasil disimpan`, {
						position: 'bottom-right',
						icon: '🤗',
						style: { backgroundColor: '#4ade80', color: '#fff' },
					});
				}
			} catch (error) {
				console.log('error handleSave > ', error);
				if (saved) {
					toast(`Gagal menghapus ${title}`, {
						position: 'bottom-right',
						icon: '🤗',
						style: { backgroundColor: '#ef4444', color: '#fff' },
					});
				} else {
					toast(`Gagal menyimpan ${title}`, {
						position: 'bottom-right',
						icon: '🤗',
						style: { backgroundColor: '#ef4444', color: '#fff' },
					});
				}
			}
		}
	};

	const handleLike = async id => {
		if (!token) {
			push('/login');
		} else {
			try {
				if (liked) {
					await removeLikedRecipe(token, wasThisRecipeLiked.id);
					setLiked(false);
					toast(`Kamu batal menyukai ${title}`, {
						position: 'bottom-right',
						icon: '🤗',
						style: { backgroundColor: '#4ade80', color: '#fff' },
					});
				} else {
					await addLikedRecipe(token, id);
					setLiked(true);
					toast(`Kamu menyukai ${title}`, {
						position: 'bottom-right',
						icon: '🤗',
						style: { backgroundColor: '#4ade80', color: '#fff' },
					});
				}
			} catch (error) {
				console.log('error handleLike > ', error);
				if (liked) {
					toast(`Gagal batal menyukai ${title}`, {
						position: 'bottom-right',
						icon: '🤗',
						style: { backgroundColor: '#ef4444', color: '#fff' },
					});
				} else {
					toast(`Gagal menyukai ${title}`, {
						position: 'bottom-right',
						icon: '🤗',
						style: { backgroundColor: '#ef4444', color: '#fff' },
					});
				}
			}
		}
	};

	return (
		<Layout hasLoggedIn={!!token}>
			<section className='py-40 bg-white'>
				<Container>
					<div className='mb-16'>
						<h1 className='text-center text-5xl md:text-7xl text-[#2E266F] font-bold'>
							{title}
						</h1>
					</div>
					<div className='relative w-full max-w-6xl aspect-square md:aspect-video mx-auto rounded-2xl overflow-hidden mb-16'>
						<img
							src={isImageValid(image) ? image : '/images/sugar-salmon.png'}
							alt={title}
							className='w-full h-full object-cover'
						/>
						<div className='absolute bottom-5 md:bottom-10 right-5 md:right-10 flex items-center gap-4'>
							<button
								type='button'
								className='group w-12 md:w-14 aspect-square rounded-xl bg-white flex items-center justify-center text-[#EFC81A] border border-[#EFC81A]'
								onClick={() => handleSave(id)}
							>
								<span className='sr-only'>Simpan</span>
								<svg
									width='24'
									height='28'
									viewBox='0 0 24 28'
									fill='transparent'
									xmlns='http://www.w3.org/2000/svg'
									aria-hidden
									className={clsx(
										'group-hover:fill-[#EFC81A] transition-colors w-6',
										saved && 'fill-[#EFC81A]'
									)}
								>
									<path
										d='M22.1104 26.9994L11.9993 19.7772L1.88818 26.9994V3.88828C1.88818 3.1221 2.19255 2.3873 2.73432 1.84553C3.27609 1.30375 4.01089 0.99939 4.77707 0.99939H19.2215C19.9877 0.99939 20.7225 1.30375 21.2643 1.84553C21.806 2.3873 22.1104 3.1221 22.1104 3.88828V26.9994Z'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</button>
							<button
								type='button'
								className='group w-12 md:w-14 aspect-square rounded-xl bg-white flex items-center justify-center text-[#EFC81A] border border-[#EFC81A]'
								onClick={() => handleLike(id)}
							>
								<span className='sr-only'>Suka</span>
								<svg
									width='36'
									height='36'
									viewBox='0 0 36 36'
									fill='transparent'
									xmlns='http://www.w3.org/2000/svg'
									aria-hidden
									className={clsx(
										'group-hover:fill-[#EFC81A] transition-colors w-6',
										liked && 'fill-[#EFC81A]'
									)}
								>
									<path
										d='M9.63705 34.9998H4.45482C3.53854 34.9998 2.6598 34.6416 2.01189 34.004C1.36399 33.3663 1 32.5015 1 31.5998V19.6999C1 18.7981 1.36399 17.9334 2.01189 17.2957C2.6598 16.6581 3.53854 16.2999 4.45482 16.2999H9.63705M21.7289 12.8999V6.09997C21.7289 4.74737 21.1829 3.45018 20.2111 2.49375C19.2392 1.53732 17.9211 1 16.5467 1L9.63705 16.2999V34.9998H29.1222C29.9554 35.0091 30.7639 34.7217 31.3988 34.1906C32.0337 33.6595 32.4521 32.9205 32.5771 32.1098L34.9609 16.8099C35.036 16.3226 35.0026 15.8251 34.863 15.3517C34.7234 14.8784 34.4808 14.4406 34.1522 14.0687C33.8236 13.6968 33.4167 13.3996 32.9598 13.1978C32.5029 12.996 32.0068 12.8943 31.5061 12.8999H21.7289Z'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</button>
						</div>
					</div>

					<section className='space-y-8 mb-24 w-full max-w-6xl mx-auto'>
						<h2 className='text-3xl md:text-5xl text-[#3F3A3A]'>Ingredients</h2>
						<ul className='list-disc list-inside grid gap-2'>
							{listOfDescription.map((desc, idx) => (
								<li key={`${desc}-${idx}`} className='text-lg md:text-xl'>
									{desc}
								</li>
							))}
						</ul>
					</section>

					<section className='mb-14'>
						<h2 className='sr-only'>Beri komentar pada resep ini</h2>
						<CommentForm />
					</section>

					<CommentSection />
				</Container>
			</section>
		</Layout>
	);
}

export async function getServerSideProps({ params, req }) {
	const token = req.cookies.token || '';

	if (!token) {
		return {
			redirect: {
				permanent: false,
				destination: '/login',
			},
			props: {},
		};
	}
	const { id } = params;
	const recipe = await getRecipeById(id);
	const likedRecipeList = await getLikedRecipe(token);
	const savedRecipeList = await getSavedRecipe(token);

	const wasThisRecipeLiked =
		likedRecipeList.find(recipe => recipe.recipe_id === id) || null;
	const wasThisRecipeSaved =
		savedRecipeList.find(recipe => recipe.recipe_id === id) || null;

	// console.log('likedRecipe >> ', likedRecipeList);
	// console.log('savedRecipeList >> ', savedRecipeList);
	console.log('wasThisRecipeLiked >> ', wasThisRecipeLiked);
	console.log('wasThisRecipeSaved >> ', wasThisRecipeSaved);
	return {
		props: { recipe, token, wasThisRecipeLiked, wasThisRecipeSaved },
	};
}
