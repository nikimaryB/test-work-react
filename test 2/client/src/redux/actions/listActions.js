import { FETCH_LIST, SET_LIST } from '../types';

export const setList = (payload) => ({
  type: SET_LIST,
  payload,
});

export const fetchList = (payload) => ({
  type: FETCH_LIST,
  payload,
});
