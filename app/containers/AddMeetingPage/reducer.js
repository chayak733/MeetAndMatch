/*
 *
 * AddMeetingPage reducer
 *
 */
import { DEFAULT_ACTION } from './constants';

export const initialState = [
  {
    id: '',
    address: '',
    date: new Date(),
    firstParticipant: {
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
    },
    secondParticipant: {
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
    },
  },
];

/* eslint-disable default-case, no-param-reassign */
const addMeetingReducer = (state = initialState, action) => {
  if (action.type === DEFAULT_ACTION) return state;
  return state;
};

export default addMeetingReducer;
