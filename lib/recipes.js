import { RECIPES_URL } from '@/constants/url';

export async function getRecipeList() {
	try {
		const res = await fetch(RECIPES_URL);
		const recipes = await res.json();
		return recipes;
	} catch (error) {
		console.log('Error: ', error);
	}
}
