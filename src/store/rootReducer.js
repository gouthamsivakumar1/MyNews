import {combineReducers} from '@reduxjs/toolkit';
import {newsReducer} from '../redux/news.slice';

const RootReducer = combineReducers({
  newsReducer,
});

export default RootReducer;
