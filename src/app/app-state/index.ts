import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromEvent from './reducers/event.reducer';

export interface State {
  eventData: fromEvent.State;
}

export const reducers: ActionReducerMap<State> = {
  eventData: fromEvent.reducer
}

const reducerKeys = ['eventData'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];

export const getCurrentEventState = createFeatureSelector<fromEvent.State>('eventData');

export const getCurrentEvent = createSelector(
  getCurrentEventState,
  fromEvent.getEventData
);
