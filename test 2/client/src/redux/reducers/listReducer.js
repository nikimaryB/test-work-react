/* eslint-disable default-param-last */
import { SET_LIST } from '../types';

export default function listReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LIST:
      return payload;
    default:
      return state;
  }
}
