import {
	applyMiddleware,
	legacy_createStore as createStore,
	compose,
} from 'redux';
import { rootReducer } from './reducers';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import { createWrapper } from 'next-redux-wrapper';

export const store = createStore(
	rootReducer,
	compose(applyMiddleware(thunk, logger))
);
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
