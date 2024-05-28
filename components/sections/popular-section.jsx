import Link from 'next/link';
import Container from '../container';

export default function PopularSection() {
	return (
		<section className='mt-24 mb-40'>
			<Container>
				<div className='mb-20'>
					<div className='flex items-center gap-5'>
						<div className='bg-[#EFC81A] w-6 h-32' />
						<h2 className='text-5xl text-[#2E266F]'>Popular Recipe</h2>
					</div>
				</div>

				<ul className='grid grid-cols-3 gap-10'>
					<li className='group rounded-2xl h-[450px] overflow-hidden flex'>
						<Link href='/recipes/mantap' className='block relative'>
							<div className='overflow-hidden h-full'>
								<img
									src='/images/popular-recipe-1.png'
									alt='Pizza Lamoa'
									className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-white/50 flex items-end p-10'>
								<p className='text-4xl text-[#3F3A3A] font-bold'>Pizza Lamoa</p>
							</div>
						</Link>
					</li>
					<li className='group rounded-2xl h-[450px] overflow-hidden flex'>
						<Link href='/recipes/mantap' className='block relative'>
							<div className='overflow-hidden h-full'>
								<img
									src='/images/popular-recipe-1.png'
									alt='Pizza Lamoa'
									className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-white/50 flex items-end p-10'>
								<p className='text-4xl text-[#3F3A3A] font-bold'>Pizza Lamoa</p>
							</div>
						</Link>
					</li>
					<li className='group rounded-2xl h-[450px] overflow-hidden flex'>
						<Link href='/recipes/mantap' className='block relative'>
							<div className='overflow-hidden h-full'>
								<img
									src='/images/popular-recipe-1.png'
									alt='Pizza Lamoa'
									className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-white/50 flex items-end p-10'>
								<p className='text-4xl text-[#3F3A3A] font-bold'>Pizza Lamoa</p>
							</div>
						</Link>
					</li>
					<li className='group rounded-2xl h-[450px] overflow-hidden flex'>
						<Link href='/recipes/mantap' className='block relative'>
							<div className='overflow-hidden h-full'>
								<img
									src='/images/popular-recipe-1.png'
									alt='Pizza Lamoa'
									className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-white/50 flex items-end p-10'>
								<p className='text-4xl text-[#3F3A3A] font-bold'>Pizza Lamoa</p>
							</div>
						</Link>
					</li>
					<li className='group rounded-2xl h-[450px] overflow-hidden flex'>
						<Link href='/recipes/mantap' className='block relative'>
							<div className='overflow-hidden h-full'>
								<img
									src='/images/popular-recipe-1.png'
									alt='Pizza Lamoa'
									className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-white/50 flex items-end p-10'>
								<p className='text-4xl text-[#3F3A3A] font-bold'>Pizza Lamoa</p>
							</div>
						</Link>
					</li>
					<li className='group rounded-2xl h-[450px] overflow-hidden flex'>
						<Link href='/recipes/mantap' className='block relative'>
							<div className='overflow-hidden h-full'>
								<img
									src='/images/popular-recipe-1.png'
									alt='Pizza Lamoa'
									className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-white/50 flex items-end p-10'>
								<p className='text-4xl text-[#3F3A3A] font-bold'>Pizza Lamoa</p>
							</div>
						</Link>
					</li>
				</ul>
			</Container>
		</section>
	);
}
