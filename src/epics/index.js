import { combineEpics } from 'redux-observable';
import AuthEpics from './auth';
import ArchiveEpics from './archive';

export default combineEpics(AuthEpics, ArchiveEpics);
