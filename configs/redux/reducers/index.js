import { combineReducers } from 'redux';
import { recipeReducer } from './recipe-reducer';

export const rootReducer = combineReducers({
	recipe: recipeReducer,
});
