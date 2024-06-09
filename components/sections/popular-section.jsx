import Link from 'next/link';
import Container from '../container';
import RecipeList from '../recipe-list';
import clsx from 'clsx';

export default function PopularSection({ recipes }) {
	return (
		<section className='mt-24 mb-32 lg:mb-40'>
			<Container>
				<div className='mb-14 md:mb-20'>
					<div className='flex items-center gap-5'>
						<div className='bg-[#EFC81A] w-2 lg:w-6 h-16 lg:h-32' />
						<h2 className='text-3xl lg:text-5xl text-[#2E266F]'>
							Popular Recipe
						</h2>
					</div>
				</div>

				<RecipeList recipes={recipes} />
				<div className='mt-16 flex justify-center'>
					<Link
						href='/recipes'
						className={clsx(
							'bg-yellow-400 text-white flex items-center justify-center px-6 py-4 rounded outline outline-1 outline-yellow-400',
							'transition-all hover:outline-offset-2 focus:outline-offset-2'
						)}
					>
						Lihat Selengkapnya
					</Link>
				</div>
			</Container>
		</section>
	);
}
