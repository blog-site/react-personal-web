import { combineEpics } from 'redux-observable';
import AuthEpics from './auth';
import ArchivesEpics from './archive/archive';
import ArchiveEpics from './archive/archive';

export default combineEpics(AuthEpics, ArchivesEpics, ArchiveEpics);
