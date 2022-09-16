import { combineReducers } from 'redux';
import AuthReducer from './auth';
import ArchiveReducer from './archive/archive';
import ArchivesReducer from './archive/archives';

export default combineReducers({
  auth: AuthReducer,
  archive: ArchiveReducer,
  archives: ArchivesReducer,
});
