import { combineReducers } from 'redux';
import auth from './reducers/auth';
import global from './reducers/global';

export default function createReducer(asynReducers = {}) {
  return combineReducers({
    auth,
    global,
    ...asynReducers
  });
}
