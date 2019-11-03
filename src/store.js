import { applyMiddleware,compose,createStore} from 'redux';
import {configureStore} from 'redux-starter-kit'
import allReducers from './reducers';

import BucketReducer from './reducers/bucket';

const store = configureStore({
  reducer: allReducers
}, BucketReducer())

export default store