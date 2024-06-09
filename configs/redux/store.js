import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducers';
import { thunk } from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';

export const store = createStore(rootReducer, applyMiddleware(thunk));
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
