import Link from 'next/link';
import Container from './container';

export default function Layout({ children }) {
	return (
		<main className='font-airbnb bg-[#FFF5EC] min-h-screen flex flex-col w-full'>
			<header className='fixed top-0 left-0 w-full h-24 flex items-center bg-white/20 z-50 backdrop-blur'>
				<Container>
					<nav className='flex justify-between'>
						<ul className='flex items-center gap-20'>
							<li>
								<Link
									href='/'
									className='text-lg text-[#2E266F] font-medium hover:underline'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='/recipes/add'
									className='text-lg text-[#2E266F] font-medium hover:underline'
								>
									Add Recipe
								</Link>
							</li>
							<li>
								<Link
									href='/profile'
									className='text-lg text-[#2E266F] font-medium hover:underline'
								>
									Profile
								</Link>
							</li>
						</ul>

						<div>
							<Link href='/login' className='flex items-center gap-3'>
								<div className='relative'>
									<svg
										width='52'
										height='52'
										viewBox='0 0 52 52'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										aria-hidden='true'
									>
										<circle cx='26' cy='26' r='26' fill='white' />
										<path
											d='M36.6066 27.1611C34.9729 25.7997 33.0283 24.7918 30.9066 24.1817C33.179 22.8775 34.6719 20.6947 34.6719 18.2266C34.6719 14.2418 30.7817 11 26 11C21.2183 11 17.3281 14.2418 17.3281 18.2266C17.3281 20.6947 18.821 22.8775 21.0935 24.1817C18.9718 24.7918 17.0272 25.7997 15.3934 27.1611C12.5603 29.5221 11 32.6611 11 36H13.3438C13.3438 30.1844 19.0213 25.4531 26 25.4531C32.9787 25.4531 38.6562 30.1844 38.6562 36H41C41 32.6611 39.4397 29.5221 36.6066 27.1611ZM26 23.5C22.5107 23.5 19.6719 21.1344 19.6719 18.2266C19.6719 15.3187 22.5107 12.9531 26 12.9531C29.4893 12.9531 32.3281 15.3187 32.3281 18.2266C32.3281 21.1344 29.4893 23.5 26 23.5Z'
											fill='#2E266F'
										/>
									</svg>
									<div className='w-4 h-4 rounded-full bg-[#31A24C] absolute right-0 top-0' />
								</div>
								<span className='text-[#2E266F]'>Login</span>
							</Link>
						</div>
					</nav>
				</Container>
			</header>
			{children}
		</main>
	);
}
