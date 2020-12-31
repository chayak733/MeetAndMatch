/*
 *
 * App actions
 *
 */

import {
  // GET MEETINGS LIST
  LOAD_MEETINGS,
  LOAD_MEETINGS_SUCCESS,
  LOAD_MEETINGS_ERROR,
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
} from './constants';

// GET MEETINGS LIST
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

// ADD MEEETING
export function addMeeting(meeting) {
  return {
    type: ADD_MEETING,
    meeting,
  };
}

export function addMeetingSuccess(meeting, meetings) {
  return {
    type: ADD_MEETING_SUCCESS,
    payload: {
      meeting,
      meetings,
    },
  };
}

export function addMeetingError(error) {
  return {
    type: ADD_MEETING_ERROR,
    error,
  };
}

// DELETE MEETING
export function delMeeting(meeting) {
  return {
    type: DEL_MEETING,
    meeting,
  };
}

export function delMeetingSuccess(meetings) {
  return {
    type: DEL_MEETING_SUCCESS,
    meetings,
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

export function addParticipantSuccess(participant, participants) {
  return {
    type: ADD_PARTICIPANT_SUCCESS,
    payload: {
      participant,
      participants,
    },
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

export function delParticipantSuccess(participants) {
  return {
    type: DEL_PARTICIPANT_SUCCESS,
    participants,
  };
}

export function delParticipantError(error) {
  return {
    type: DEL_PARTICIPANT_ERROR,
    error,
  };
}
