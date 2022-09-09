import { combineEpics } from 'redux-observable';
import ArchiveEpics from './archive';

export default combineEpics(ArchiveEpics);
