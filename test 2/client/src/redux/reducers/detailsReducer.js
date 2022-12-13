/* eslint-disable default-param-last */
import { SET_DETAILS } from '../types';

export default function detailsReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_DETAILS:
      return payload;
    default:
      return state;
  }
}
