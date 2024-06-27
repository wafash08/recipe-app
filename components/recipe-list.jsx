import { isImageValid } from '@/helpers';
import { deleteRecipe } from '@/lib/recipes';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function RecipeList({ recipes, isMine = false, token }) {
	const router = useRouter();
	const handleDeleteRecipe = async (id, title) => {
		try {
			const confirmation = confirm(`Apakah anda ingin menghapus ${title}`);
			if (confirmation) {
				await deleteRecipe({ id, token });
				toast(`${title} berhasil dihapus`, {
					position: 'bottom-right',
					icon: '🤗',
					style: { backgroundColor: '#4ade80', color: '#fff' },
				});
				router.reload();
			}
		} catch (error) {
			toast(
				`Other user might save/like "${title}", thus you can't delete this recipe`,
				{
					position: 'bottom-right',
					style: { backgroundColor: '#ef4444', color: '#fff' },
				}
			);
		}
	};

	return (
		<ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
			{recipes.map(({ id, image, title }) => {
				const isValid = image ? isImageValid(image) : false;

				return (
					<li
						key={id}
						className='group rounded-2xl h-[400px] overflow-hidden flex relative'
					>
						<Link
							href={`/recipes/${id}`}
							className='block w-full relative rounded-2xl'
						>
							<div className='overflow-hidden w-full h-full'>
								<img
									src={isValid ? image : '/images/sugar-salmon.png'}
									alt={title}
									className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-black/50 flex items-end p-10'>
								<p className='text-3xl text-[#FFF5EC] font-bold capitalize'>
									{title}
								</p>
							</div>
						</Link>
						{isMine ? (
							<div className='absolute top-6 right-6 z-10 flex items-center gap-3'>
								<Link
									href={`recipes/${id}/edit`}
									className={clsx(
										'text-[#EFC81A] bg-white',
										'flex items-center justify-center w-12 aspect-square rounded-full'
									)}
								>
									<span className='sr-only'>Edit {title}</span>
									<svg
										width='20'
										height='20'
										viewBox='0 0 20 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10 19H19'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M14.5 2.49998C14.8978 2.10216 15.4374 1.87866 16 1.87866C16.2786 1.87866 16.5544 1.93353 16.8118 2.04014C17.0692 2.14674 17.303 2.303 17.5 2.49998C17.697 2.69697 17.8532 2.93082 17.9598 3.18819C18.0665 3.44556 18.1213 3.72141 18.1213 3.99998C18.1213 4.27856 18.0665 4.55441 17.9598 4.81178C17.8532 5.06915 17.697 5.303 17.5 5.49998L5 18L1 19L2 15L14.5 2.49998Z'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</Link>
								<button
									type='button'
									className='flex items-center justify-center w-12 aspect-square rounded-full bg-red-500 text-white'
									onClick={() => handleDeleteRecipe(id, title)}
								>
									<span className='sr-only'>Hapus {title}</span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 512 512'
										className='w-6 h-6'
									>
										<path
											d='M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='32'
										/>
										<path
											stroke='currentColor'
											strokeLinecap='round'
											strokeliterlimit='10'
											strokeWidth='32'
											d='M80 112h352'
										/>
										<path
											d='M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='32'
										/>
									</svg>
								</button>
							</div>
						) : null}
					</li>
				);
			})}
		</ul>
	);
}
