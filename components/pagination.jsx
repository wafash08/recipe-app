import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Pagination() {
	const searchParams = useSearchParams();
	const page = searchParams.get('page') || 1;

	const prevPage = Number(page) > 1 ? Number(page) - 1 : Number(page);
	const nextPage = Number(page) + 1;

	const isPrevPageDisabled = Number(page) === 1;

	return (
		<nav>
			<ul className='flex items-center flex-wrap gap-5 justify-center'>
				{isPrevPageDisabled ? null : (
					<li className='group'>
						<Link
							href={`?page=${prevPage}`}
							className={clsx(
								'flex items-center justify-center px-6 py-3 rounded-md bg-yellow-400 text-white',
								'transition-colors group-hover:bg-yellow-500'
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
							'flex items-center justify-center px-6 py-3 rounded-md bg-yellow-400 text-white',
							'transition-colors group-hover:bg-yellow-500'
						)}
					>
						Selanjutnya
					</Link>
				</li>
			</ul>
		</nav>
	);
}
