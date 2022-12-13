import { FETCH_DETAILS, SET_DETAILS } from '../types';

export const setDetails = (payload) => ({
  type: SET_DETAILS,
  payload,
});

export const fetchDetails = (payload) => ({
  type: FETCH_DETAILS,
  payload,
});
