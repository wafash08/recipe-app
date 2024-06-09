const initialState = {
	data: {
		liked_id: '',
		saved_id: '',
	},
	error: null,
	status: 'idle', // idle, success, failed, loading
};

export function recipeReducer(state = initialState, action) {
	switch (action.type) {
		case 'recipe/recipeLoaded': {
			return {
				...state,
				status: 'success',
				data: { ...action.payload },
			};
		}
		case 'recipe/savedIdAdded': {
			return {
				...state,
				status: 'success',
				data: {
					...state.data,
					saved_id: action.payload,
				},
			};
		}
		case 'recipe/savedIdRemoved': {
			return {
				...state,
				status: 'success',
				data: {
					...state.data,
					saved_id: '',
				},
			};
		}
		case 'recipe/likedIdAdded': {
			return {
				...state,
				status: 'success',
				data: {
					...state.data,
					liked_id: action.payload,
				},
			};
		}
		case 'recipe/likedIdRemoved': {
			return {
				...state,
				status: 'success',
				data: {
					...state.data,
					liked_id: '',
				},
			};
		}
		case 'recipe/recipeLoading': {
			return {
				...state,
				status: 'loading',
			};
		}
		case 'recipe/recipeFailed': {
			return {
				...state,
				status: 'failed',
				error: action.payload,
			};
		}
		default: {
			return state;
		}
	}
}
