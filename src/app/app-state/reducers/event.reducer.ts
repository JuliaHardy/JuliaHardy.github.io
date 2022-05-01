import { Action, createReducer, on } from '@ngrx/store'
import { Event } from '../entity'
import * as storage from '../state/storage'
import * as eventActions from '../actions'
import * as _ from 'lodash'

export interface State {
  currentEvent?: Event
  isLoading?: boolean
  isLoadingSuccess?: boolean
  isLoadingFailure?: boolean
}

export const initialState: State = {
  currentEvent: storage.getItem('eventData').currentEvent,
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false,
}

const eventReducer = createReducer(
  initialState,
  on(eventActions.getEventData, (state) => ({ ...state, isLoading: true })),
  on(eventActions.getEventDataSuccess, (state, result) => ({
    currentEvent: result.response,
    isLoading: false,
    isLoadingSuccess: true,
  })),
  on(eventActions.createEvent, (state, event) => ({
    ...state,
    isLoading: true,
    currentEvent: event,
  })),
  on(eventActions.createEventSuccess, (state, result) => {
    const currentEvent =
      undefined !== state.currentEvent
        ? _.cloneDeep(state.currentEvent)
        : undefined
    return {
      currentEvent,
      isLoading: false,
      isLoadingSuccess: true,
    }
  }),
)

export function reducer(state: State | undefined, action: Action): any {
  return eventReducer(state, action)
}

export const getEventData = (state: State) => {
  return {
    currentEvent: state.currentEvent,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess,
  }
}
