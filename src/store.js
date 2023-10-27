import { createStore, combineReducers } from 'redux';
import giphyReducer from './reducers/giphyReducer';

const rootReducer = combineReducers({
  giphyFinder: giphyReducer,
});

const store = createStore(rootReducer);

export default store;