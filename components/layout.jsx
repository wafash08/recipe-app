import Link from 'next/link';
import Container from './container';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function Layout({ children, hasLoggedIn }) {
	return (
		<main className='font-airbnb bg-[#FFF5EC] min-h-screen flex flex-col w-full'>
			<Header hasLoggedIn={hasLoggedIn} />
			{children}
			<Footer />
		</main>
	);
}

const links = [
	{
		href: '/',
		label: 'Home',
	},
	{
		href: '/recipes/add',
		label: 'Add Recipe',
	},
	{
		href: '/profile',
		label: 'Profile',
	},
];

function Header({ hasLoggedIn }) {
	const pathname = usePathname();
	const { push } = useRouter();
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const controlNavbar = () => {
			if (window.scrollY > lastScrollY) {
				setShow(false);
			} else {
				setShow(true);
			}

			setLastScrollY(window.scrollY);
		};

		window.addEventListener('scroll', controlNavbar);

		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	const logout = async () => {
		try {
			fetch('/api/auth/logout', { method: 'POST' });
			push('/', undefined, { scroll: false });
		} catch (error) {
			console.log('error logout', error);
		}
	};

	return (
		<header
			className={clsx(
				'fixed top-0 left-0 w-full h-24 flex items-center bg-white/50 z-50 backdrop-blur transition-transform duration-500',
				show ? 'translate-y-0' : '-translate-y-full'
			)}
		>
			<Container>
				<nav className='flex justify-between gap-8'>
					<ul className='flex items-center gap-4 lg:gap-20'>
						{links.map(({ href, label }) => (
							<li key={label}>
								<Link
									href={href}
									className={clsx(
										'text-lg text-[#2E266F] font-medium hover:underline',
										pathname === href && 'underline'
									)}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>

					<div>
						{hasLoggedIn ? (
							<div className='flex items-center gap-5'>
								<Link href='/profile'>
									<div className='w-14 aspect-square rounded-full relative'>
										<div className='w-14 aspect-square rounded-full overflow-hidden'>
											<img
												src='/images/empty-profile.jpg'
												alt='Your profile'
												className='w-full h-full object-cover'
											/>
										</div>
										<div className='w-4 h-4 rounded-full bg-[#31A24C] absolute right-0 top-0' />
									</div>
									<span className='sr-only'>Your Profile</span>
								</Link>
								<button
									onClick={logout}
									className={clsx(
										'bg-red-400 text-white flex items-center justify-center px-4 py-2 rounded outline outline-1 outline-red-400',
										'transition-all hover:outline-offset-2 focus:outline-offset-2'
									)}
								>
									Logout
								</button>
							</div>
						) : (
							<Link
								href='/login'
								className={clsx(
									'bg-yellow-400 text-white flex items-center justify-center px-4 py-2 rounded outline outline-1 outline-yellow-400',
									'transition-all hover:outline-offset-2 focus:outline-offset-2'
								)}
							>
								Login
							</Link>
						)}
					</div>
				</nav>
			</Container>
		</header>
	);
}

function Footer() {
	return (
		<footer className='bg-[#EFC81A] w-full h-[600px] pt-14 pb-24 lg:pb-14 relative'>
			<Container className='flex flex-col items-center justify-center h-full'>
				<section className='text-center'>
					<h3 className='text-[#2E266F] text-7xl font-bold mb-14'>
						Eat, Cook, Repeat
					</h3>
					<p className='text-[#707070] text-2xl'>
						Share your best recipe by uploading here !
					</p>
				</section>

				<nav className='text-[#707070] absolute bottom-10 lg:bottom-14 left-1/2 -translate-x-1/2'>
					<ul className='flex items-center flex-wrap justify-center gap-10'>
						<li>
							<Link className='hover:underline' href='/products'>
								Product
							</Link>
						</li>
						<li>
							<Link className='hover:underline' href='/about'>
								Company
							</Link>
						</li>
						<li>
							<Link className='hover:underline' href='/learn-more'>
								Learn More
							</Link>
						</li>
						<li>
							<Link className='hover:underline' href='/contact'>
								Get in Touch
							</Link>
						</li>
					</ul>
				</nav>
			</Container>
		</footer>
	);
}
