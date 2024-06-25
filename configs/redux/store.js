import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducers';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk, logger))
);
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
