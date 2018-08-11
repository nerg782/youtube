import { combineReducers } from 'redux';
import videos from './VideoListReducer';
import searchResult from './SearchReducer';
import comments from './VideoViewReducer';

const reducers = combineReducers({
  list: videos,
  result: searchResult,
  commentList: comments,  
})

export default reducers;