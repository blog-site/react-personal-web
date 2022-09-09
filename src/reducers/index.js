import { combineReducers } from 'redux';
import ArchiveReducer from './archive';

export default combineReducers({
  archive: ArchiveReducer,
});
