import { createStore, combineReducers } from 'redux';
import giphyReducer from './reducers/giphyReducer';

const rootReducer = combineReducers({
  giphyFinder: giphyReducer,
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;