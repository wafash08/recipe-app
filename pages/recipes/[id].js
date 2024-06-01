import Container from '@/components/container';
import clsx from 'clsx';
import { useState } from 'react';

export default function RecipeDetail() {
	const [comment, setComment] = useState('');
	return (
		<section className='py-40 bg-white'>
			<Container>
				<div className='mb-16'>
					<h1 className='text-center text-5xl md:text-7xl text-[#2E266F] font-bold'>
						Loream Sandwich
					</h1>
				</div>
				<div className='relative w-full max-w-6xl aspect-auto md:aspect-video mx-auto rounded-2xl overflow-hidden mb-16'>
					<img
						src='/images/bomb-chicken.png'
						alt='Bomb Chicken'
						className='w-full h-full object-cover'
					/>
					<div className='absolute bottom-5 md:bottom-10 right-5 md:right-10 flex items-center gap-4'>
						<button
							type='button'
							className='group w-12 md:w-14 aspect-square rounded-xl bg-[#EFC81A] flex items-center justify-center text-white'
						>
							<span className='sr-only'>Simpan</span>
							<svg
								width='24'
								height='28'
								viewBox='0 0 24 28'
								fill='transparent'
								xmlns='http://www.w3.org/2000/svg'
								aria-hidden
								className='group-hover:fill-white transition-colors w-6'
							>
								<path
									d='M22.1104 26.9994L11.9993 19.7772L1.88818 26.9994V3.88828C1.88818 3.1221 2.19255 2.3873 2.73432 1.84553C3.27609 1.30375 4.01089 0.99939 4.77707 0.99939H19.2215C19.9877 0.99939 20.7225 1.30375 21.2643 1.84553C21.806 2.3873 22.1104 3.1221 22.1104 3.88828V26.9994Z'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
						<button
							type='button'
							className='group w-12 md:w-14 aspect-square rounded-xl bg-white flex items-center justify-center text-[#EFC81A] border border-[#EFC81A]'
						>
							<span className='sr-only'>Suka</span>
							<svg
								width='36'
								height='36'
								viewBox='0 0 36 36'
								fill='transparent'
								xmlns='http://www.w3.org/2000/svg'
								aria-hidden
								className='group-hover:fill-[#EFC81A] transition-colors w-6'
							>
								<path
									d='M9.63705 34.9998H4.45482C3.53854 34.9998 2.6598 34.6416 2.01189 34.004C1.36399 33.3663 1 32.5015 1 31.5998V19.6999C1 18.7981 1.36399 17.9334 2.01189 17.2957C2.6598 16.6581 3.53854 16.2999 4.45482 16.2999H9.63705M21.7289 12.8999V6.09997C21.7289 4.74737 21.1829 3.45018 20.2111 2.49375C19.2392 1.53732 17.9211 1 16.5467 1L9.63705 16.2999V34.9998H29.1222C29.9554 35.0091 30.7639 34.7217 31.3988 34.1906C32.0337 33.6595 32.4521 32.9205 32.5771 32.1098L34.9609 16.8099C35.036 16.3226 35.0026 15.8251 34.863 15.3517C34.7234 14.8784 34.4808 14.4406 34.1522 14.0687C33.8236 13.6968 33.4167 13.3996 32.9598 13.1978C32.5029 12.996 32.0068 12.8943 31.5061 12.8999H21.7289Z'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>

				<section className='space-y-8 mb-24 w-full max-w-6xl mx-auto'>
					<h2 className='text-3xl md:text-5xl text-[#3F3A3A]'>Ingredients</h2>
					<ul className='list-decimal list-inside grid gap-2'>
						<li className='text-lg md:text-xl'>2 Eggs</li>
						<li className='text-lg md:text-xl'>2 Eggs</li>
						<li className='text-lg md:text-xl'>2 Eggs</li>
						<li className='text-lg md:text-xl'>2 Eggs</li>
						<li className='text-lg md:text-xl'>2 Eggs</li>
					</ul>
				</section>

				<section className='mb-14'>
					<h2 className='sr-only'>Beri komentar pada resep ini</h2>
					<form className='space-y-10'>
						<div className='relative w-full max-w-6xl mx-auto'>
							<textarea
								name='comment'
								id='comment'
								className={clsx(
									'peer bg-[#F6F5F4] w-full rounded-lg px-4 py-4',
									'outline outline-2 outline-transparent outline-offset-0 transition-all',
									'focus:outline-yellow-400 focus:outline-offset-4',
									'hover:outline-yellow-400 hover:outline-offset-4'
								)}
								required
								rows={10}
								value={comment}
								onChange={e => setComment(e.target.value)}
							/>
							<label
								htmlFor='comment'
								className={clsx(
									'absolute top-0 left-0 transition-transform',
									'peer-focus:-translate-y-10 peer-focus:translate-x-0',
									comment
										? '-translate-y-10 translate-x-0'
										: 'translate-y-4 translate-x-4'
								)}
							>
								Comment
							</label>
						</div>
						<div className='flex justify-start lg:justify-center'>
							<button
								type='submit'
								className={clsx(
									'w-full max-w-md bg-yellow-400 text-white rounded-md px-4 py-5 transition-all outline',
									'hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-yellow-400'
								)}
							>
								Post
							</button>
						</div>
					</form>
				</section>

				<section className='w-full max-w-6xl mx-auto space-y-10'>
					<h2 className='text-3xl md:text-5xl text-[#3F3A3A]'>Comments</h2>
					<ul>
						<li className='flex items-start gap-4 md:gap-6 border border-slate-200 p-5 rounded-md'>
							<div className='w-16 aspect-square rounded-full overflow-hidden'>
								<img
									src='/images/avatar-comment.png'
									alt='Ayudia'
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='space-y-2'>
								<p className='text-2xl font-bold'>Ayudia</p>
								<p>Nice recipe. simple and delicious, thank you.</p>
							</div>
						</li>
					</ul>
				</section>
			</Container>
		</section>
	);
}
