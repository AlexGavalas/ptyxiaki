import rxjs from 'rxjs';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { FETCH_USER_INFO, AUTH_USER } from './constants';
import { setUserInfo } from './actions'

const firstEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_USER_INFO),
    switchMap(() =>
      ajax
        .getJSON('/user')
        .map((response) => {
          console.log(response);
          return response.data.username
        })
        .map((response) => {
          console.log(response);
          return setUserInfo(response.data);
        })
    ));

const authUser = (action$) =>
  action$.pipe(
    ofType(AUTH_USER),
    switchMap((action) => {
      console.log(action);
      return ajax.getJSON('/login')
        .map((response) => {
          console.log(response);
          return response.data.username
        })
        .map((response) => {
          console.log(response);
          return setUserInfo(response.data);
        })
    }));

export const rootEpic = combineEpics(firstEpic, authUser);
