import Link from 'next/link';
import Container from '../container';
import RecipeList from '../recipe-list';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

export default function PopularSection({ recipes }) {
	const searchParams = useSearchParams();
	const page = searchParams.get('page') || 1;

	const prevPage = Number(page) > 1 ? Number(page) - 1 : Number(page);
	const nextPage = Number(page) + 1;

	const isPrevPageDisabled = Number(page) === 1;

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
				<nav className='mt-16'>
					<ul className='flex items-center flex-wrap gap-5 justify-center'>
						{isPrevPageDisabled ? null : (
							<li className='group'>
								<Link
									href={`?page=${prevPage}`}
									className={clsx(
										'flex items-center justify-center px-6 py-3 rounded-md border border-[#EFC81A]',
										'group-hover:-translate-x-1 transition-transform'
									)}
									scroll={false}
								>
									Sebelumnya
								</Link>
							</li>
						)}
						{isPrevPageDisabled ? null : (
							<li>
								<p>{page}</p>
							</li>
						)}
						<li className='group'>
							<Link
								href={`?page=${nextPage}`}
								className={clsx(
									'flex items-center justify-center px-6 py-3 rounded-md border border-[#EFC81A]',
									'group-hover:translate-x-1 transition-transform'
								)}
							>
								Selanjutnya
							</Link>
						</li>
					</ul>
				</nav>
			</Container>
		</section>
	);
}
