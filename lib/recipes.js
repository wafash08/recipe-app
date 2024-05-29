const URL = process.env.BACKEND_URL;
const recipesUrl = `${URL}/v1/recipes`;

export async function getRecipeList() {
	const res = await fetch(recipesUrl);
	const recipes = await res.json();
	return recipes;
}
