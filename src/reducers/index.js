import { combineReducers } from 'redux';
import AuthReducer from './auth';
import ArchiveReducer from './archive';
import ArchivesReducer from './archives';

export default combineReducers({
  auth: AuthReducer,
  archive: ArchiveReducer,
  archives: ArchivesReducer,
});
