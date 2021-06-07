import { combineReducers } from 'redux';
import users from './users.reducer';
import notifications from './notifications.reducer';
import assets from './assets.reducer';

const appReducers = combineReducers({
  users,
  notifications,
  assets,
});

export default appReducers;
