/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import request from 'utils/request';
import {
  LOAD_MEETINGS,
  ADD_MEETING,
  DEL_MEETING,
  LOAD_PARTICIPANTS,
  GET_PARTICIPANT,
  ADD_PARTICIPANT,
  UPDATE_PARTICIPANT,
  DEL_PARTICIPANT,
} from './constants';
import {
  // meetings
  meetingsLoaded,
  meetingsLoadingError,
  addMeetingSuccess,
  addMeetingError,
  delMeetingSuccess,
  delMeetingError,
  // participants
  participantsLoaded,
  participantsLoadingError,
  getParticipantSuccess,
  getParticipantError,
  addParticipantSuccess,
  addParticipantError,
  updateParticipantSuccess,
  updateParticipantError,
  delParticipantSuccess,
  delParticipantError,
} from './actions';

const baseUrl = '/api';

// MEETINGS FUNCTIONS
export function* getMeetings() {
  const requestURL = `${baseUrl}/Meetingslist`;

  try {
    // Call our request helper (see 'utils/request')
    const meetings = yield call(request, requestURL);
    yield put(meetingsLoaded(meetings));
  } catch (err) {
    yield put(meetingsLoadingError(err));
  }
}

export function* addMeeting(action) {
  const requestURL = `${baseUrl}/addMeeting`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.meeting),
  };

  try {
    // Call our request helper (see 'utils/request')
    const meetings = yield call(request, requestURL, options);
    yield put(addMeetingSuccess(action.meeting, meetings));
  } catch (err) {
    yield put(addMeetingError(err));
  }
}

export function* removeMeeting(action) {
  const requestURL = `${baseUrl}/deleteMeeting/${action.meeting.id}`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    const meetings = yield call(request, requestURL, options);
    yield put(delMeetingSuccess(meetings));
  } catch (err) {
    yield put(delMeetingError(err));
  }
}

// PARTICIPANTS FUNCTIONS
export function* getParticipants() {
  const requestURL = `${baseUrl}/Participantslist`;

  try {
    // Call our request helper (see 'utils/request')
    const participants = yield call(request, requestURL);
    yield put(participantsLoaded(participants));
  } catch (err) {
    yield put(participantsLoadingError(err));
  }
}

export function* get(action) {
  debugger;
  const requestURL = `${baseUrl}/getParticipant/${action.participantId}`;

  try {
    const participant = yield call(request, requestURL);
    yield put(getParticipantSuccess(participant));
  } catch (err) {
    yield put(getParticipantError(err));
  }
}

export function* addParticipant(action) {
  const requestURL = `${baseUrl}/addParticipant`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.participant),
  };

  try {
    // Call our request helper (see 'utils/request')
    const participants = yield call(request, requestURL, options);
    yield put(addParticipantSuccess(action.participant, participants));
  } catch (err) {
    yield put(addParticipantError(err));
  }
}

export function* updateParticipant(action) {
  const requestURL = `${baseUrl}/updateParticipant/${action.participantId}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.matched),
  };
  try {
    const list = yield call(request, requestURL, options);
    yield put(updateParticipantSuccess(action.participantId, list));
  } catch (err) {
    yield put(updateParticipantError(err));
  }
}

export function* removeParticipant(action) {
  const requestURL = `${baseUrl}/deleteParticipant/${action.participant.id}`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    const participants = yield call(request, requestURL, options);
    yield put(delParticipantSuccess(participants));
  } catch (err) {
    yield put(delParticipantError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loadData() {
  yield takeLatest(LOAD_MEETINGS, getMeetings);
  yield takeEvery(ADD_MEETING, addMeeting);
  yield takeEvery(DEL_MEETING, removeMeeting);
  yield takeLatest(LOAD_PARTICIPANTS, getParticipants);
  yield takeEvery(GET_PARTICIPANT, get);
  yield takeEvery(ADD_PARTICIPANT, addParticipant);
  yield takeEvery(UPDATE_PARTICIPANT, updateParticipant);
  yield takeEvery(DEL_PARTICIPANT, removeParticipant);
}
