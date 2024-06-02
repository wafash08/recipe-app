import Container from '@/components/container';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const links = [
	{
		href: '?category=mine',
		label: 'My Recipe',
	},
	{
		href: '?category=saved',
		label: 'Saved Recipe',
	},
	{
		href: '?category=liked',
		label: 'Liked Recipe',
	},
];

export default function Profile() {
	const searchParams = useSearchParams();
	console.log(searchParams);
	return (
		<section className='py-40 bg-white'>
			<Container>
				<div className='flex flex-col items-center gap-6 mb-20'>
					<div className='w-40 aspect-square rounded-full overflow-hidden'>
						<img src='/images/profile.png' alt='Garneta Sharina' />
					</div>
					<h1 className='text-2xl'>Garneta Sharina</h1>
				</div>

				<nav className='border-b border-b-[#DFDFDF] mb-10'>
					<ul className='flex items-center gap-4 flex-wrap'>
						{links.map(({ href, label }) => (
							<li key={href} className='group'>
								<Link
									href={href}
									className={clsx(
										'inline-block px-6 py-4 text-lg text-[#666666]',
										'group-hover:text-black focus:text-black transition-colors'
									)}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<li className='group rounded-2xl h-[400px] md:h-[450px] overflow-hidden flex'>
						<Link href={`/recipes/mdkakd`} className='block relative'>
							<div className='overflow-hidden h-full'>
								<img
									src={'/images/sugar-salmon.png'}
									alt={'Sugar salmon'}
									className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-black/50 flex items-end p-10'>
								<p className='text-3xl text-[#FFF5EC] font-bold capitalize'>
									Sugar Salmon
								</p>
							</div>
						</Link>
					</li>
					<li className='group rounded-2xl h-[400px] md:h-[450px] overflow-hidden flex'>
						<Link href={`/recipes/mdkakd`} className='block relative'>
							<div className='overflow-hidden h-full'>
								<img
									src={'/images/sugar-salmon.png'}
									alt={'Sugar salmon'}
									className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-black/50 flex items-end p-10'>
								<p className='text-3xl text-[#FFF5EC] font-bold capitalize'>
									Sugar Salmon
								</p>
							</div>
						</Link>
					</li>
					<li className='group rounded-2xl h-[400px] md:h-[450px] overflow-hidden flex'>
						<Link href={`/recipes/mdkakd`} className='block relative'>
							<div className='overflow-hidden h-full'>
								<img
									src={'/images/sugar-salmon.png'}
									alt={'Sugar salmon'}
									className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-black/50 flex items-end p-10'>
								<p className='text-3xl text-[#FFF5EC] font-bold capitalize'>
									Sugar Salmon
								</p>
							</div>
						</Link>
					</li>
				</ul>
			</Container>
		</section>
	);
}
