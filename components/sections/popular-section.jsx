import Link from 'next/link';
import Container from '../container';
import { POPULAR_LIST } from '@/data';

export default function PopularSection() {
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

				<ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
					{POPULAR_LIST.map(({ id, image, name, slug }) => {
						return (
							<li
								key={id}
								className='group rounded-2xl h-[400px] md:h-[450px] overflow-hidden flex'
							>
								<Link href={`/recipes/${slug}`} className='block relative'>
									<div className='overflow-hidden h-full'>
										<img
											src={image}
											alt={name}
											className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
										/>
									</div>
									<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-black/50 flex items-end p-10'>
										<p className='text-3xl text-[#FFF5EC] font-bold'>{name}</p>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</Container>
		</section>
	);
}
