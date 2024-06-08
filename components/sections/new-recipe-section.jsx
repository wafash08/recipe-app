import Link from 'next/link';
import Container from '../container';
import clsx from 'clsx';
import { isImageValid } from '@/helpers';

export default function NewRecipeSection({ recipe }) {
	return (
		<section className='mt-24'>
			<Container>
				<div className='mb-24'>
					<div className='flex items-center gap-5'>
						<div className='bg-[#EFC81A] w-2 lg:w-5 h-16 lg:h-32' />
						<h2 className='text-3xl lg:text-5xl text-[#2E266F]'>New Recipe!</h2>
					</div>
				</div>

				<section className='flex flex-col md:flex-row md:items-center gap-10'>
					<div className='relative flex-1 h-[600px]'>
						<div className='absolute -top-14 -left-1/2 w-full h-full bg-[#EFC81A]' />
						<div className='w-full h-full overflow-hidden rounded-xl'>
							<img
								src={
									isImageValid(recipe.image)
										? recipe.image
										: '/images/bone-broth-ramen.png'
								}
								alt={recipe.title}
								className='relative z-10 w-full h-full object-cover'
							/>
						</div>
					</div>

					<div className='flex-1 text-[#3F3A3A]'>
						<h3 className='text-4xl md:text-[56px] font-medium mb-6 leading-tight'>
							{recipe.title}
						</h3>
						<div className='w-24 h-[2px] bg-[#6F6A40] mb-6 md:mb-9' />
						<Link
							href={`/recipes/${recipe.id}`}
							className={clsx(
								'inline-flex items-center justify-center w-52 h-16 bg-[#EFC81A] rounded-lg font-medium text-white border border-transparent',
								'transition-colors hover:bg-transparent hover:text-[#EFC81A] hover:border-[#EFC81A]'
							)}
						>
							Learn More
						</Link>
					</div>
				</section>
			</Container>
		</section>
	);
}
