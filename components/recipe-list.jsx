import { isImageValid } from '@/helpers';
import clsx from 'clsx';
import Link from 'next/link';

export default function RecipeList({ recipes, isMine = false }) {
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
							<Link
								href={`recipes/${id}/edit`}
								className={clsx(
									'absolute top-6 right-6 z-10 text-[#EFC81A] bg-white',
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
						) : null}
					</li>
				);
			})}
		</ul>
	);
}
