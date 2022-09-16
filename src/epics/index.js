import { combineEpics } from 'redux-observable';
import AuthEpics from './auth';
import ArchivesEpics from './archive';
import ArchiveEpics from './archive';

export default combineEpics(AuthEpics, ArchivesEpics, ArchiveEpics);
