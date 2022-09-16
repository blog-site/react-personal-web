import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  archiveActionType,
  onGetArchives,
  onGetArchivesFail,
} from '../actions';

const apiUrl = '/api/';
const archivesUrl = `${apiUrl}archive/`;
const archivesViewUrl = `${archivesUrl}view`;

const ArchivesEpic = (action$) =>
  action$.pipe(
    ofType(archiveActionType.GET_ARCHIVES),
    mergeMap((action) => {
      return ajax.getJSON(archivesViewUrl).pipe(
        map((res) => onGetArchives(res)),
        catchError((error) => of(onGetArchivesFail(error)))
      );
    })
  );

export default combineEpics(
  ArchivesEpic,
);
