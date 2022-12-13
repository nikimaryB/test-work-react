/* eslint-disable default-param-last */
import { ERROR_LIST } from '../types';

export default function errorListReducer(state = false, action) {
  const { type, payload } = action;
  switch (type) {
    case ERROR_LIST:
      return payload;
    default:
      return state;
  }
}
