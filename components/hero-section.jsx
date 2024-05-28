import Container from './container';

export default function HeroSection() {
	return (
		<section className='min-h-screen pt-32 relative'>
			<div className='bg-[#EFC81A] h-full w-96 absolute right-0 top-0' />
			<Container className='flex gap-5 items-center z-10'>
				<div className='flex-1'>
					<h1 className='mb-10 text-7xl text-[#2E266F]'>
						Discover Recipe & Delicious Food
					</h1>
					<form>
						<div className='relative h-20'>
							<input
								type='text'
								name='search'
								id='search'
								placeholder='Search Recipe'
								className='w-full h-full rounded pl-20 pr-5 placeholder:text-[#2E266F]/60 placeholder:text-lg'
							/>
							<button
								type='submit'
								className='absolute top-1/2 -translate-y-1/2 left-10'
							>
								<span className='sr-only'>Cari resep</span>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									aria-hidden='true'
								>
									<path
										d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z'
										stroke='#C4C4C4'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M18.9999 19L14.6499 14.65'
										stroke='#C4C4C4'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</button>
						</div>
					</form>
				</div>
				<div className='flex-1'>
					<div className='relative'>
						<img src='/images/hero.png' alt='Delicious Food' />
					</div>
				</div>
			</Container>
		</section>
	);
}
