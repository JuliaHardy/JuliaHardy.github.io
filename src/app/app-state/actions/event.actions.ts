import { createAction, props } from '@ngrx/store';
import { Event } from '../entity';

export const GET_EVENT = 'Get event';
export const GET_EVENT_SUCCESS = 'Get event success';
export const GET_EVENT_FAILURE = 'Get event failure';

export const CREATE_EVENT = 'Create event';
export const CREATE_EVENT_SUCCESS = 'Create event success';
export const CREATE_EVENT_FAILURE = 'Create event failure';

export const getEventData = createAction(
  GET_EVENT
);

export const getEventDataSuccess = createAction(
  GET_EVENT_SUCCESS,
  props<any>()
);

export const getEventDataFailure = createAction(
  GET_EVENT_FAILURE,
  props<any>()
);

export const createEvent = createAction(
  CREATE_EVENT,
  props<Event>()
);

export const createEventSuccess = createAction(
  CREATE_EVENT_SUCCESS,
  props<any>()
);

export const createEventFailure = createAction(
  CREATE_EVENT_FAILURE,
  props<{any}>()
);
