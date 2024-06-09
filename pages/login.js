import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import Input from '@/components/input';

export default function Login() {
	const [error, setError] = useState(null);
	const router = useRouter();

	const handleLogin = async e => {
		try {
			e.preventDefault();
			const formData = new FormData(e.target);
			const email = formData.get('email');
			const password = formData.get('password');
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				router.push('/');
			} else {
				// Handle errors
			}
		} catch (error) {
			setError(error.message);
			setTimeout(() => {
				setError(null);
			}, 3000);
		}
	};

	return (
		<div className='flex min-h-screen'>
			<div
				className='relative flex-1 hidden lg:flex items-center justify-center bg-no-repeat bg-cover bg-center bg-[#EFC81A]/20'
				style={{
					backgroundImage: 'url("/images/bg-auth.png")',
				}}
			>
				<div className='bg-[#EFC81A]/40 absolute inset-0' />
				<img
					src='/images/logo.png'
					alt='Mama recipe logo'
					className='relative'
				/>
			</div>

			<section className='flex-1 px-10 py-20'>
				<div className='text-center mb-12'>
					<h1 className='text-[#EFC81A] text-3xl font-bold mb-5'>Welcome!</h1>
					<p className='text-[#8692A6] text-lg'>
						Log in into your exiting account
					</p>
				</div>

				<div className='flex justify-center'>
					<form className='w-full max-w-lg' onSubmit={handleLogin}>
						<div className='space-y-6'>
							<Input
								label='Email'
								type='email'
								id='email'
								name='email'
								placeholder='Enter your email address'
								required
							/>
							<Input
								label='Password'
								type='password'
								id='password'
								name='password'
								placeholder='Password'
								required
							/>
							{/* <div className='flex items-center gap-4'>
								<input
									type='checkbox'
									name='term_and_condition'
									id='term_and_condition'
									className='cursor-pointer appearance-none bg-white m-0 rounded-sm'
								/>
								<label
									htmlFor='term_and_condition'
									className='text-[#696F79] cursor-pointer'
								>
									I agree to terms & conditions
								</label>
							</div> */}
						</div>

						{error && (
							<p className='text-red-500 mt-6' role='alert'>
								{error}
							</p>
						)}

						<div className='mt-10 space-y-6 text-center'>
							<button
								type='submit'
								className={clsx(
									'inline-flex items-center justify-center px-5 py-5 bg-[#EFC81A] rounded-md text-white w-full'
								)}
							>
								Login
							</button>
							<Link
								href='/forgot-password'
								className='block text-[#999999] text-right hover:underline'
							>
								Forgot Password ?
							</Link>
							<p className='text-[#8692A6]'>
								Don't have an account?{' '}
								<Link
									href='/register'
									className='text-[#EFC81A] hover:underline'
								>
									Sign Up Here
								</Link>
							</p>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}
