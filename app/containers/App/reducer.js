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
  GET_MM_MEETINGS,
  GET_MM_MEETINGS_SUCCESS,
  GET_MM_MEETINGS_ERROR,
  GET_MEETING,
  GET_MEETING_SUCCESS,
  GET_MEETING_ERROR,
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
  GET_STATISTICS,
  GET_STATISTICS_SUCCESS,
  GET_STATISTICS_ERROR,
  // MATCHMAKERS
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_UNAPRROVED_MATCHMAKERS,
  GET_UNAPRROVED_MATCHMAKERS_SUCCESS,
  GET_UNAPRROVED_MATCHMAKERS_ERROR,
  ADD_MATCHMAKER,
  ADD_MATCHMAKER_SUCCESS,
  ADD_MATCHMAKER_ERROR,
  APPROVE_MATCHMAKER,
  APPROVE_MATCHMAKER_SUCCESS,
  APPROVE_MATCHMAKER_ERROR,
  DEL_MATCHMAKER,
  DEL_MATCHMAKER_SUCCESS,
  DEL_MATCHMAKER_ERROR,
  SIGNOUT,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  meeting: false,
  participant: false,
  statistics: false,
  matchmakers: false,
  user: false,
  currentMeeting: false,
  currentParticipant: null,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOADING CASES:
    case LOAD_MEETINGS:
    case GET_MM_MEETINGS:
      return { ...state, loading: true, error: false, meeting: false };

    case GET_MEETING:
      return {
        ...state,
        loading: true,
        error: false,
        currentMeeting: false,
      };

    case LOAD_PARTICIPANTS:
      return { ...state, loading: true, error: false, participant: false };

    case GET_UNAPRROVED_MATCHMAKERS:
      return { ...state, loading: true, error: false, matchmakers: false };

    case GET_PARTICIPANT:
      return {
        ...state,
        loading: true,
        error: false,
        currentParticipant: false,
      };

    case GET_STATISTICS:
      return { ...state, loading: true, error: false, statistics: false }

    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: false,
        user: false,
      };

    case SIGNOUT:
      return {
        ...state, user: false,
      }
    case ADD_MEETING:
    case DEL_MEETING:
    case ADD_PARTICIPANT:
    case UPDATE_PARTICIPANT:
    case DEL_PARTICIPANT:
    case ADD_MATCHMAKER:
    case APPROVE_MATCHMAKER:
    case DEL_MATCHMAKER:
      return { ...state, loading: true, error: false };

    // SUCCESS CASES:
    case LOAD_MEETINGS_SUCCESS:
    case GET_MM_MEETINGS_SUCCESS:
      return { ...state, loading: false, meeting: action.meetings };

    case GET_MEETING_SUCCESS:
      return {
        ...state,
        loading: false,
        currentMeeting: action.meeting,
      };

    case LOAD_PARTICIPANTS_SUCCESS:
      return { ...state, loading: false, participant: action.participants };
      ז
      return {
        ...state,
        loading: false,
        currentParticipant: action.participant,
      };

    case GET_STATISTICS_SUCCESS:
      return { ...state, loading: false, statistics: כבהכהג }

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
      };

    case GET_UNAPRROVED_MATCHMAKERS_SUCCESS:
      return { ...state, loading: false, matchmakers: action.matchmakers };

    case ADD_MEETING_SUCCESS:
      return {
        ...state,
        loading: false,
        meeting: [...state.meeting, action.meeting],
        currentMeeting: action.meeting,
      };

    case ADD_MATCHMAKER_SUCCESS:
      return {
        ...state,
        loading: false,
        matchmakers: [...state.matchmakers, action.matchmaker],
      };

    case ADD_PARTICIPANT_SUCCESS:
    case UPDATE_PARTICIPANT_SUCCESS:
      return {
        ...state,
        loading: false,
        participant: [...state.participant, action.participant],
        currentParticipant: action.participant,
      };

    case DEL_MEETING_SUCCESS: {
      const newMeetingList = state.meeting.filter(
        meeting => meeting.id !== action.mId,
      );
      return {
        ...state,
        loading: false,
        error: false,
        meeting: [...state.meeting, newMeetingList],
        currentMeeting: false,
      };
    }

    case DEL_PARTICIPANT_SUCCESS: {
      const newParticipantList = state.participant.filter(
        participant => participant.id !== action.pId,
      );
      return {
        ...state,
        loading: false,
        error: false,
        participant: newParticipantList,
        currentParticipant: false,
      };
    }

    case DEL_MATCHMAKER_SUCCESS:
    case APPROVE_MATCHMAKER_SUCCESS: {
      const newMatchmakersList = state.matchmakers.filter(
        matchmaker => matchmaker.id !== action.mmId,
      );
      return {
        ...state,
        loading: false,
        error: false,
        matchmakers: newMatchmakersList,
      };
    }

    // ERROR CASES:
    case LOAD_MEETINGS_ERROR:
    case GET_MM_MEETINGS_ERROR:
    case GET_MEETING_ERROR:
    case ADD_MEETING_ERROR:
    case DEL_MEETING_ERROR:
    case LOAD_PARTICIPANTS_ERROR:
    case GET_PARTICIPANT_ERROR:
    case ADD_PARTICIPANT_ERROR:
    case UPDATE_PARTICIPANT_ERROR:
    case DEL_PARTICIPANT_ERROR:
    case GET_STATISTICS_ERROR:
    case LOGIN_USER_ERROR:
    case GET_UNAPRROVED_MATCHMAKERS_ERROR:
    case ADD_MATCHMAKER_ERROR:
    case APPROVE_MATCHMAKER_ERROR:
    case DEL_MATCHMAKER_ERROR:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default globalReducer;
