import { combineReducers } from 'redux';
import AuthReducer from './auth';
import ArchiveReducer from './archive';

export default combineReducers({
  auth: AuthReducer,
  archive: ArchiveReducer,
});
