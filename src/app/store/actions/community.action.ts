import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/store/actions/community.actiontypes';
import { getUsersResponseInterface } from 'src/app/models/types/responses/getUsersResponse.interface';
import { ErrorInterface } from 'src/app/models/types/errors/error.interface';
import { FilterDataInterface } from 'src/app/models/types/filterData.interface';

// Get Users Actions
export const getUsersAction = createAction(
  ActionTypes.GETUSERS,
  props<{ filterData: FilterDataInterface }>()
);

export const getUsersSuccessAction = createAction(
  ActionTypes.GETUSERS_SUCCESS,
  props<{ payload: getUsersResponseInterface }>()
);

export const getUsersFailureAction = createAction(
  ActionTypes.GETUSERS_FAILURE,
  props<{ error: ErrorInterface }>()
);

// Get Users With Offset Actions
export const getUsersWithOffsetAction = createAction(
  ActionTypes.GETUSERS_WITH_OFFSET,
  props<{ filterData: FilterDataInterface; offset: number }>()
);

export const getUsersWithOffsetSuccessAction = createAction(
  ActionTypes.GETUSERS_WITH_OFFSET_SUCCESS,
  props<{ payload: getUsersResponseInterface }>()
);

export const getUsersWithOffsetFailureAction = createAction(
  ActionTypes.GETUSERS_WITH_OFFSET_FAILURE,
  props<{ error: ErrorInterface }>()
);

// Get Room Actions
export const getRoomAction = createAction(
  ActionTypes.GET_ROOM,
  props<{ id: string }>()
);

export const getRoomSuccessAction = createAction(
  ActionTypes.GET_ROOM_SUCCESS,
  props<{ payload: any }>()
);

export const getRoomFailureAction = createAction(
  ActionTypes.GET_ROOM_FAILURE,
  props<{ error: ErrorInterface }>()
);
