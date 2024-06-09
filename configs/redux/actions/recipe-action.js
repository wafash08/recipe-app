import {
	addLikedRecipe,
	addSavedRecipe,
	getLikedRecipe,
	getSavedRecipe,
	removeLikedRecipe,
	removeSavedRecipe,
} from '@/lib/recipes';

export function recipeLoading() {
	return {
		type: 'recipe/recipeLoading',
	};
}

export function recipeFailed(error) {
	return {
		type: 'recipe/recipeFailed',
		payload: error,
	};
}

export function recipeLoaded(token, recipe_id) {
	return async dispatch => {
		try {
			dispatch(recipeLoading());
			const savedRecipeList = await getSavedRecipe(token);
			const likedRecipeList = await getLikedRecipe(token);

			const savedRecipe = savedRecipeList.find(recipe => {
				return recipe.recipe_id === recipe_id;
			});
			const likedRecipe = likedRecipeList.find(recipe => {
				return recipe.recipe_id === recipe_id;
			});

			const wasThisRecipeSaved = savedRecipe ? savedRecipe.id : '';
			const wasThisRecipeLiked = likedRecipe ? likedRecipe.id : '';

			const payload = {
				saved_id: wasThisRecipeSaved,
				liked_id: wasThisRecipeLiked,
			};

			dispatch({
				type: 'recipe/recipeLoaded',
				payload,
			});
		} catch (error) {
			recipeFailed(error);
		}
	};
}

export function savedIdAdded(token, recipe_id) {
	return async dispatch => {
		try {
			dispatch(recipeLoading());
			const savedRecipe = await addSavedRecipe(token, recipe_id);
			const payload = savedRecipe ? savedRecipe.id : '';

			dispatch({
				type: 'recipe/savedIdAdded',
				payload,
			});
		} catch (error) {
			recipeFailed(error);
		}
	};
}

export function savedIdRemoved(token, saved_id) {
	return async dispatch => {
		try {
			dispatch(recipeLoading());
			await removeSavedRecipe(token, saved_id);
			dispatch({
				type: 'recipe/savedIdRemoved',
			});
		} catch (error) {
			recipeFailed(error);
		}
	};
}

export function likedIdAdded(token, recipe_id) {
	return async dispatch => {
		try {
			dispatch(recipeLoading());
			const savedRecipe = await addLikedRecipe(token, recipe_id);
			const payload = savedRecipe ? savedRecipe.id : '';

			dispatch({
				type: 'recipe/likedIdAdded',
				payload,
			});
		} catch (error) {
			recipeFailed(error);
		}
	};
}

export function likedIdRemoved(token, liked_id) {
	return async dispatch => {
		try {
			dispatch(recipeLoading());
			await removeLikedRecipe(token, liked_id);
			dispatch({
				type: 'recipe/likedIdRemoved',
			});
		} catch (error) {
			recipeFailed(error);
		}
	};
}
