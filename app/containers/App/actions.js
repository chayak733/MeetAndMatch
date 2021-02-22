/*
 *
 * App actions
 *
 */

import {
  // GET ALL MEETINGS
  LOAD_MEETINGS,
  LOAD_MEETINGS_SUCCESS,
  LOAD_MEETINGS_ERROR,
  // GET MEETINGS BY MM ID
  GET_MM_MEETINGS,
  GET_MM_MEETINGS_SUCCESS,
  GET_MM_MEETINGS_ERROR,
  // GET MEETING
  GET_MEETING,
  GET_MEETING_SUCCESS,
  GET_MEETING_ERROR,
  // ADD MEEETING
  ADD_MEETING,
  ADD_MEETING_SUCCESS,
  ADD_MEETING_ERROR,
  // DELETE MEETING
  DEL_MEETING,
  DEL_MEETING_SUCCESS,
  DEL_MEETING_ERROR,
  // GET PARTICIPANTS LIST
  LOAD_PARTICIPANTS,
  LOAD_PARTICIPANTS_SUCCESS,
  LOAD_PARTICIPANTS_ERROR,
  // GET MEETING BY ID
  GET_PARTICIPANT,
  GET_PARTICIPANT_SUCCESS,
  GET_PARTICIPANT_ERROR,
  // ADD PARTICIPANT
  ADD_PARTICIPANT,
  ADD_PARTICIPANT_SUCCESS,
  ADD_PARTICIPANT_ERROR,
  // UPDATE PARTICIPANT
  UPDATE_PARTICIPANT,
  UPDATE_PARTICIPANT_SUCCESS,
  UPDATE_PARTICIPANT_ERROR,
  // DELETE PARTICIPANT
  DEL_PARTICIPANT,
  DEL_PARTICIPANT_SUCCESS,
  DEL_PARTICIPANT_ERROR,
  // GET STATISTICS
  GET_STATISTICS,
  GET_STATISTICS_SUCCESS,
  GET_STATISTICS_ERROR,
  // LOGIN USER
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  // GET_UNAPRROVED_MATCHMAKERS
  GET_UNAPRROVED_MATCHMAKERS,
  GET_UNAPRROVED_MATCHMAKERS_SUCCESS,
  GET_UNAPRROVED_MATCHMAKERS_ERROR,
  // ADD MATCHMAKER
  ADD_MATCHMAKER,
  ADD_MATCHMAKER_SUCCESS,
  ADD_MATCHMAKER_ERROR,
  // APPROVE MATCHMAKER
  APPROVE_MATCHMAKER,
  APPROVE_MATCHMAKER_SUCCESS,
  APPROVE_MATCHMAKER_ERROR,
  // DEL MATCHMAKER
  DEL_MATCHMAKER,
  DEL_MATCHMAKER_SUCCESS,
  DEL_MATCHMAKER_ERROR,
  // SIGNOUT
  SIGNOUT,
} from './constants';

// GET ALL MEETINGS
export function loadMeetings() {
  return {
    type: LOAD_MEETINGS,
  };
}

export function meetingsLoaded(meetings) {
  return {
    type: LOAD_MEETINGS_SUCCESS,
    meetings,
  };
}

export function meetingsLoadingError(error) {
  return {
    type: LOAD_MEETINGS_ERROR,
    error,
  };
}

// GET MEETINGS BY MM
export function getMeetingsByMM(mmId) {
  return {
    type: GET_MM_MEETINGS,
    payload: mmId,
  };
}

export function getMeetingsByMMSuccess(meetings) {
  return {
    type: GET_MM_MEETINGS_SUCCESS,
    meetings,
  };
}

export function getMeetingsByMMError(error) {
  return {
    type: GET_MM_MEETINGS_ERROR,
    error,
  };
}

// GET MEETING BY ID
export function getMeeting(meetingId) {
  return {
    type: GET_MEETING,
    payload: meetingId,
  };
}

export function getMeetingSuccess(meeting) {
  return {
    type: GET_MEETING_SUCCESS,
    meeting,
  };
}

export function getMeetingError(error) {
  return {
    type: GET_MEETING_ERROR,
    error,
  };
}

// ADD MEEETING
export function addMeeting(meeting) {
  return {
    type: ADD_MEETING,
    meeting,
  };
}

export function addMeetingSuccess(meeting) {
  return {
    type: ADD_MEETING_SUCCESS,
    meeting,
  };
}

export function addMeetingError(error) {
  return {
    type: ADD_MEETING_ERROR,
    error,
  };
}

// DELETE MEETING
export function delMeeting(meeting, mmId) {
  return {
    type: DEL_MEETING,
    meeting,
    mmId,
  };
}

export function delMeetingSuccess(mId) {
  return {
    type: DEL_MEETING_SUCCESS,
    mId,
  };
}

export function delMeetingError(error) {
  return {
    type: DEL_MEETING_ERROR,
    error,
  };
}

// GET PARTICIPANTS LIST
export function loadParticipants() {
  return {
    type: LOAD_PARTICIPANTS,
  };
}

export function participantsLoaded(participants) {
  return {
    type: LOAD_PARTICIPANTS_SUCCESS,
    participants,
  };
}

export function participantsLoadingError(error) {
  return {
    type: LOAD_PARTICIPANTS_ERROR,
    error,
  };
}

// GET PARTICIPANT BY ID
export function getParticipant(participantId) {
  return {
    type: GET_PARTICIPANT,
    participantId,
  };
}

export function getParticipantSuccess(participant) {
  return {
    type: GET_PARTICIPANT_SUCCESS,
    participant,
  };
}

export function getParticipantError(error) {
  return {
    type: GET_PARTICIPANT_ERROR,
    error,
  };
}

// ADD PARTICIPANT
export function addParticipant(participant) {
  return {
    type: ADD_PARTICIPANT,
    participant,
  };
}

export function addParticipantSuccess(participant) {
  return {
    type: ADD_PARTICIPANT_SUCCESS,
    participant,
  };
}

export function addParticipantError(error) {
  return {
    type: ADD_PARTICIPANT_ERROR,
    error,
  };
}

// UPDATE PARTICIPANT
export function updateParticipant(participant) {
  return {
    type: UPDATE_PARTICIPANT,
    participant,
  };
}

export function updateParticipantSuccess(participants) {
  return {
    type: UPDATE_PARTICIPANT_SUCCESS,
    participants,
  };
}

export function updateParticipantError(error) {
  return {
    type: UPDATE_PARTICIPANT_ERROR,
    error,
  };
}

// DELETE PARTICIPANT
export function delParticipant(participant) {
  return {
    type: DEL_PARTICIPANT,
    participant,
  };
}

export function delParticipantSuccess(pId) {
  return {
    type: DEL_PARTICIPANT_SUCCESS,
    pId,
  };
}

export function delParticipantError(error) {
  return {
    type: DEL_PARTICIPANT_ERROR,
    error,
  };
}

// GET STATISTICS
export function getStatistics() {
  return {
    type: GET_STATISTICS,
  };
}

export function getStatisticsSuccess(participants) {
  return {
    type: GET_STATISTICS_SUCCESS,
    participants,
  };
}

export function getStatisticsError(err) {
  return {
    type: GET_STATISTICS_ERROR,
    err,
  };
}

// MATCHMAKERS
// LOGIN
export function loginUser(user) {
  return {
    type: LOGIN_USER,
    user,
  };
}

export function loginUserSuccess(user) {
  return {
    type: LOGIN_USER_SUCCESS,
    user,
  };
}

export function loginUserError(error) {
  return {
    type: LOGIN_USER_ERROR,
    error,
  };
}

// GET UNAPRROVED MATCHMAKERS
export function getUnapprovedMM() {
  return {
    type: GET_UNAPRROVED_MATCHMAKERS,
  };
}

export function getUnapprovedMMSuccess(matchmakers) {
  return {
    type: GET_UNAPRROVED_MATCHMAKERS_SUCCESS,
    matchmakers,
  };
}

export function getUnapprovedMMError(err) {
  return {
    type: GET_UNAPRROVED_MATCHMAKERS_ERROR,
    err,
  };
}

// ADD MATCHMAKER
export function addMatchmaker(matchmaker) {
  return {
    type: ADD_MATCHMAKER,
    matchmaker,
  };
}

export function addMatchmakerSuccess(matchmaker) {
  return {
    type: ADD_MATCHMAKER_SUCCESS,
    matchmaker,
  };
}

export function addMatchmakerError(error) {
  return {
    type: ADD_MATCHMAKER_ERROR,
    error,
  };
}

// APPROVE MATCHMAKER
export function approveMatchmaker(matchmaker) {
  return {
    type: APPROVE_MATCHMAKER,
    mm: matchmaker,
  };
}

export function approveMatchmakerSuccess(mmId) {
  return {
    type: APPROVE_MATCHMAKER_SUCCESS,
    mmId,
  };
}

export function approveMatchmakerError(error) {
  return {
    type: APPROVE_MATCHMAKER_ERROR,
    error,
  };
}

// DELETE MATCHMAKER
export function delMatchmaker(matchmaker) {
  return {
    type: DEL_MATCHMAKER,
    mm: matchmaker,
  };
}

export function delMatchmakerSuccess(mmId) {
  return {
    type: DEL_MATCHMAKER_SUCCESS,
    mmId,
  };
}

export function delMatchmakerError(error) {
  return {
    type: DEL_MATCHMAKER_ERROR,
    error,
  };
}

export function signOut() {
  return {
    type: SIGNOUT,
  }
}