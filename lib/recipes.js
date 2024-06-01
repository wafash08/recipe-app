import { RECIPES_URL } from '@/constants/url';
import { uploadImage } from './upload';

export async function getRecipeList() {
	try {
		const res = await fetch(RECIPES_URL);
		const recipes = await res.json();
		return recipes;
	} catch (error) {
		console.log('Error: ', error);
	}
}

export async function addRecipe(recipe) {
	try {
		const resUploadImage = await uploadImage(recipe.image);
		if (resUploadImage.ok) {
			const image = await resUploadImage.json();
			recipe.image = image.data.file_url;
		}
		const res = await fetch(RECIPES_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
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
