import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import Input from '@/components/input';
import CustomCheckbox from '@/components/custom-checkbox';
import Button from '@/components/button';

export default function Login() {
	const [agree, setAgree] = useState(false);
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
			} else if (response.status === 401) {
				throw 'Email or password is incorrect';
			}
		} catch (error) {
			setError(error);
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
							{error && (
								<p className='text-red-500 mt-6' role='alert'>
									{error}
								</p>
							)}
							<CustomCheckbox agree={agree} onAgree={() => setAgree(!agree)} />
						</div>

						<div className='mt-10 space-y-6 text-center'>
							<Button type='submit' disabled={!agree}>
								login
							</Button>
							<div className='flex justify-end'>
								<Link
									href='/forgot-password'
									className='inline-block text-[#999999] hover:underline'
								>
									Forgot Password ?
								</Link>
							</div>
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
