import {
	LIKED_RECIPE_URL,
	MY_RECIPE_URL,
	RECIPES_URL,
	SAVED_RECIPE_URL,
} from '@/constants/url';
import { uploadImage } from './upload';

export async function getRecipes() {
	try {
		const res = await fetch(RECIPES_URL);
		const recipes = await res.json();
		return recipes;
	} catch (error) {
		console.log('Error: ', error);
	}
}

export async function addRecipe({ title, description, image, token }) {
	try {
		const headers = new Headers();
		headers.set('Authorization', `Bearer ${token}`);
		headers.set('Content-Type', 'application/json');
		const recipe = { title, description, image };
		const res = await fetch(RECIPES_URL, {
			method: 'POST',
			headers,
			body: JSON.stringify(recipe),
		});
		if (!res.ok) {
			throw res.status;
		}
		return res;
	} catch (error) {
		console.log('Error: ', error);
		throw error;
	}
}

export async function getRecipeById(id) {
	try {
		const res = await fetch(`${RECIPES_URL}/${id}`);
		const recipe = await res.json();
		return recipe.data;
	} catch (error) {
		console.log(error);
	}
}

export async function getMyRecipe(token) {
	try {
		const headers = new Headers();
		headers.set('Authorization', `Bearer ${token}`);
		const res = await fetch(MY_RECIPE_URL, { headers });
		const recipe = await res.json();
		return recipe.data;
	} catch (error) {
		throw error;
	}
}

export async function getLikedRecipe(token) {
	try {
		const headers = new Headers();
		headers.set('Authorization', `Bearer ${token}`);
		const res = await fetch(LIKED_RECIPE_URL, { headers });
		const recipe = await res.json();
		return recipe.data;
	} catch (error) {
		throw error;
	}
}

export async function getSavedRecipe(token) {
	try {
		const headers = new Headers();
		headers.set('Authorization', `Bearer ${token}`);
		const res = await fetch(SAVED_RECIPE_URL, { headers });
		const recipe = await res.json();
		return recipe.data;
	} catch (error) {
		throw error;
	}
}
