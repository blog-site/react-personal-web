import { combineEpics } from 'redux-observable';
import AuthEpics from './auth';
import ArchivesEpics from './archive/archives';
import ArchiveEpics from './archive/archive';
import CatalogEpics from './archive/catalog';

export default combineEpics(AuthEpics, ArchivesEpics, ArchiveEpics, CatalogEpics);
