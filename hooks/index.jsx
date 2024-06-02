import { RECIPES_URL } from '@/constants/url';
import { getTokenFromLocalStorage } from '@/helpers';
import { getProfile } from '@/lib/profile';
import { getLikedRecipe, getMyRecipe, getSavedRecipe } from '@/lib/recipes';
import { useEffect, useState } from 'react';

export function useRecipe(keyword) {
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		let ignore = false;

		fetch(`${RECIPES_URL}?search=${keyword}`)
			.then(res => res.json())
			.then(recipes => {
				setStatus('loading');
				if (!ignore) {
					setData(recipes.data);
				}
				setTimeout(() => {
					setStatus('success');
				}, [300]);
			})
			.catch(err => {
				setStatus('failed');
				setError(err);
			})
			.finally(() => {
				setTimeout(() => {
					setStatus('idle');
				}, [500]);
			});

		return () => {
			ignore = true;
		};
	}, [keyword]);

	return {
		data,
		status,
		error,
	};
}

export function useProfile() {
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const token = getTokenFromLocalStorage();

	useEffect(() => {
		let ignore = false;

		async function loadProfile() {
			try {
				setStatus('loading');
				const profile = await getProfile(token);
				if (!ignore) {
					setData(profile);
				}
				setTimeout(() => {
					setStatus('success');
				}, 300);
			} catch (error) {
				setStatus('failed');
				setError(error);
			}
		}
		loadProfile();

		return () => {
			ignore = true;
		};
	}, []);

	return {
		data,
		status,
		error,
	};
}

export function useMyRecipe() {
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const token = getTokenFromLocalStorage();

	useEffect(() => {
		async function loadRecipes() {
			try {
				setStatus('loading');
				const recipe = await getMyRecipe(token);
				setData(recipe);
				setStatus('success');
			} catch (error) {
				setStatus('failed');
				setError(error);
			}
		}
		loadRecipes();
	}, []);

	return {
		data,
		status,
		error,
	};
}

export function useSavedRecipe() {
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const token = getTokenFromLocalStorage();

	useEffect(() => {
		async function loadRecipes() {
			try {
				setStatus('loading');
				const recipe = await getSavedRecipe(token);
				setData(recipe);
				setStatus('success');
			} catch (error) {
				setStatus('failed');
				setError(error);
			}
		}
		loadRecipes();
	}, []);

	return {
		data,
		status,
		error,
	};
}

export function useLikedRecipe() {
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const token = getTokenFromLocalStorage();

	useEffect(() => {
		async function loadRecipes() {
			try {
				setStatus('loading');
				const recipe = await getLikedRecipe(token);
				setData(recipe);
				setStatus('success');
			} catch (error) {
				setStatus('failed');
				setError(error);
			}
		}
		loadRecipes();
	}, []);

	return {
		data,
		status,
		error,
	};
}
