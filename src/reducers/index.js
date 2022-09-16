import { combineReducers } from 'redux';
import AuthReducer from './auth';
import ArchivesReducer from './archive/archives';
import ArchiveReducer from './archive/archive';
import CatalogReducer from './archive/catalog';

export default combineReducers({
  auth: AuthReducer,
  archive: ArchiveReducer,
  archives: ArchivesReducer,
  catalog: CatalogReducer,
});
