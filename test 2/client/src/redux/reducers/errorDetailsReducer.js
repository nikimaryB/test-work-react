/* eslint-disable default-param-last */
import { ERROR_DETAILS } from '../types';

export default function errorDetailsReducer(state = false, action) {
  const { type, payload } = action;
  switch (type) {
    case ERROR_DETAILS:
      return payload;
    default:
      return state;
  }
}
