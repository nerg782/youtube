import { combineReducers } from 'redux';
import videos from './VideoListReducer';
import searchResult from './SearchReducer';

const reducers = combineReducers({
  list:videos,
  result:searchResult,
})

export default reducers