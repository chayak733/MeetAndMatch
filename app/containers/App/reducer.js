/*
 *
 * App reducer
 *
 */

import {
  // MEETINGS
  LOAD_MEETINGS,
  LOAD_MEETINGS_SUCCESS,
  LOAD_MEETINGS_ERROR,
  ADD_MEETING,
  ADD_MEETING_SUCCESS,
  ADD_MEETING_ERROR,
  DEL_MEETING,
  DEL_MEETING_SUCCESS,
  DEL_MEETING_ERROR,
  // PARTICIPANTS
  LOAD_PARTICIPANTS,
  LOAD_PARTICIPANTS_SUCCESS,
  LOAD_PARTICIPANTS_ERROR,
  GET_PARTICIPANT,
  GET_PARTICIPANT_SUCCESS,
  GET_PARTICIPANT_ERROR,
  ADD_PARTICIPANT,
  ADD_PARTICIPANT_SUCCESS,
  ADD_PARTICIPANT_ERROR,
  UPDATE_PARTICIPANT,
  UPDATE_PARTICIPANT_SUCCESS,
  UPDATE_PARTICIPANT_ERROR,
  DEL_PARTICIPANT,
  DEL_PARTICIPANT_SUCCESS,
  DEL_PARTICIPANT_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  meeting: false,
  participant: false,
  currentMeeting: false,
  currentParticipant: null,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOADING CASES:
    case LOAD_MEETINGS:
      return { ...state, loading: true, error: false, meeting: false };

    case LOAD_PARTICIPANTS:
      return { ...state, loading: true, error: false, participant: false };

    case GET_PARTICIPANT:
      return {
        ...state,
        loading: true,
        error: false,
        currentParticipant: false,
      };

    case ADD_MEETING:
    case DEL_MEETING:
    case ADD_PARTICIPANT:
    case UPDATE_PARTICIPANT:
    case DEL_PARTICIPANT:
      return { ...state, loading: true, error: false };

    // SUCCESS CASES:
    case LOAD_MEETINGS_SUCCESS:
      return { ...state, loading: false, meeting: action.meetings };

    case LOAD_PARTICIPANTS_SUCCESS:
      return { ...state, loading: false, participant: action.participants };

    case GET_PARTICIPANT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentParticipant: action.participant,
      };

    case ADD_MEETING_SUCCESS:
      return {
        ...state,
        loading: false,
        meeting: [...state.meeting, action.payload.meeting],
        currentMeeting: action.meeting,
      };

    case ADD_PARTICIPANT_SUCCESS:
    case UPDATE_PARTICIPANT_SUCCESS:
      return {
        ...state,
        loading: false,
        participant: [...state.participant, action.payload.participant],
        currentParticipant: action.participant,
      };

    case DEL_MEETING_SUCCESS: {
      // const newMeetingList = state.meeting.filter(
      //   meeting => meeting.id !== action.meeting.id,
      // );
      return {
        ...state,
        loading: false,
        error: false,
        meeting: action.meetings,
        currentMeeting: false,
      };
    }

    case DEL_PARTICIPANT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        participant: action.participants,
        currentParticipant: false,
      };
    }

    // ERROR CASES:
    case LOAD_MEETINGS_ERROR:
    case ADD_MEETING_ERROR:
    case DEL_MEETING_ERROR:
    case LOAD_PARTICIPANTS_ERROR:
    case GET_PARTICIPANT_ERROR:
    case ADD_PARTICIPANT_ERROR:
    case UPDATE_PARTICIPANT_ERROR:
    case DEL_PARTICIPANT_ERROR:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default globalReducer;
