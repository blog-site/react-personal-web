import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  archivesActionType,
  onGetArchives,
  onGetArchivesFail,
} from '../../actions';

const apiUrl = '/api/';
const archiveUrl = `${apiUrl}archive/`;
const archiveViewUrl = `${archiveUrl}view/`;

const ArchivesEpic = (action$) =>
  action$.pipe(
    ofType(archivesActionType.GET_ARCHIVES),
    mergeMap((action) => {
      return ajax.getJSON(archiveViewUrl).pipe(
        map((res) => onGetArchives(res)),
        catchError((error) => of(onGetArchivesFail(error)))
      );
    })
  );

export default combineEpics(
  ArchivesEpic,
);
