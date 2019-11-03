import {combineReducers} from 'redux';
import BucketReducer from './bucket';
import ActiveBucket from './activeBucket';
const allReducers = combineReducers({
    todoList:ActiveBucket
});
export default allReducers;