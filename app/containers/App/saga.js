import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import request from 'utils/request';
import {
  LOAD_MEETINGS,
  GET_MM_MEETINGS,
  GET_MEETING,
  ADD_MEETING,
  DEL_MEETING,
  LOAD_PARTICIPANTS,
  GET_PARTICIPANT,
  ADD_PARTICIPANT,
  UPDATE_PARTICIPANT,
  DEL_PARTICIPANT,
  GET_STATISTICS,
  LOGIN_USER,
  GET_UNAPRROVED_MATCHMAKERS,
  ADD_MATCHMAKER,
  APPROVE_MATCHMAKER,
  DEL_MATCHMAKER,
} from './constants';
import {
  // meetings
  meetingsLoaded,
  meetingsLoadingError,
  getMeetingsByMMSuccess,
  getMeetingsByMMError,
  getMeetingSuccess,
  getMeetingError,
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
  getStatisticsSuccess,
  getStatisticsError,
  // MATCHMAKERS
  loginUserSuccess,
  loginUserError,
  getUnapprovedMMSuccess,
  getUnapprovedMMError,
  addMatchmakerSuccess,
  addMatchmakerError,
  approveMatchmakerSuccess,
  approveMatchmakerError,
  delMatchmakerSuccess,
  delMatchmakerError,
} from './actions';

const baseUrl = 'https://localhost:44374/api';

// MEETINGS FUNCTIONS
export function* getMeetings(action) {
  const requestURL = `${baseUrl}/Meeting/Meetingslist`;
  try {
    const meetings = yield call(request, requestURL);
    yield put(meetingsLoaded(meetings));
  } catch (err) {
    yield put(meetingsLoadingError(err));
  }
}

export function* getMeetingsByMMId(action) {
  const requestURL = `${baseUrl}/Meeting/GetMeetingByMM/${action.payload}`;
  try {
    const meetings = yield call(request, requestURL);
    yield put(getMeetingsByMMSuccess(meetings));
  } catch (err) {
    yield put(getMeetingsByMMError(err));
  }
}

export function* getMeetingById(action) {
  const requestURL = `${baseUrl}/Meeting/GetMeeting/${action.payload}`;
  try {
    const meeting = yield call(request, requestURL);
    yield put(getMeetingSuccess(meeting));
  } catch (err) {
    yield put(getMeetingError(err));
  }
}

export function* addMeeting(action) {
  const requestURL = `${baseUrl}/Meeting/addMeeting`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.meeting),
  };

  try {
    console.log(action.meeting);
    yield call(request, requestURL, options);
    yield put(addMeetingSuccess(action.meeting));
  } catch (err) {
    yield put(addMeetingError(err));
  }
}

// export function* addMeeting(action) {
//   const requestURL = `${baseUrl}/Meeting/addMeeting/${action.mmId}`;
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(action.meeting),
//   };

//   try {
//     yield call(request, requestURL, options);
//     const meetings = getMeetings();
//     yield put(addMeetingSuccess(action.meeting, meetings));
//   } catch (err) {
//     yield put(addMeetingError(err));
//   }
// }

export function* removeMeeting(action) {
  const requestURL = `${baseUrl}/Meeting/deleteMeeting/${action.meeting.id}`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    yield call(request, requestURL, options);
    yield put(delMeetingSuccess(action.meeting.id));
  } catch (err) {
    yield put(delMeetingError(err));
  }
}

// PARTICIPANTS FUNCTIONS
export function* getParticipants() {
  const requestURL = `${baseUrl}/Participant/Participantslist`;

  try {
    const participants = yield call(request, requestURL);
    yield put(participantsLoaded(participants));
  } catch (err) {
    yield put(participantsLoadingError(err));
  }
}

export function* getParticipantById(action) {
  debugger;
  const requestURL = `${baseUrl}/Participant/getParticipantById/${action.participantId}`;

  try {
    const participant = yield call(request, requestURL);
    yield put(getParticipantSuccess(participant));
  } catch (err) {
    yield put(getParticipantError(err));
  }
}

export function* addParticipant(action) {
  const requestURL = `${baseUrl}/Participant/addParticipant`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.participant),
  };

  try {
    yield call(request, requestURL, options);
    yield put(addParticipantSuccess(action.participant));
  } catch (err) {
    yield put(addParticipantError(err));
  }
}

export function* updateParticipant(action) {
  const requestURL = `${baseUrl}/Participant/updateParticipant/${action.participantId}`;
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
  debugger;
  const requestURL = `${baseUrl}/Participant/deleteParticipant/${action.participant.id}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    yield call(request, requestURL, options);
    yield put(delParticipantSuccess(action.participant.id));
  } catch (err) {
    yield put(delParticipantError(err));
  }
}

export function* getStatistics() {
  const requestURL = `${baseUrl}/Participant/statistics`;

  try {
    // Call our request helper (see 'utils/request')
    const participants = yield call(request, requestURL);
    yield put(getStatisticsSuccess(participants));
  } catch (err) {
    yield put(getStatisticsError(err));
  }
}

// MATCHMAKER FUNCTIONS
export function* loginUser() {
  const requestURL = `${baseUrl}/MatchMaker/Login/${action.user.email}&${action.user.password}`;
  try {
    const user = yield call(request, requestURL);
    yield put(loginUserSuccess(user));
  } catch (err) {
    yield put(loginUserError(err));
  }
}

export function* getUnapprovedMM() {
  const requestURL = `${baseUrl}/MatchMaker/GetUnapprovedMM`;
  try {
    const matchmakers = yield call(request, requestURL);
    yield put(getUnapprovedMMSuccess(matchmakers));
  } catch (err) {
    yield put(getUnapprovedMMError(err));
  }
}

export function* addMatchmaker() {
  const requestURL = `${baseUrl}/Matchmaker/addMatchmaker`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.matchmaker),
  };
  try {
    yield call(request, requestURL, options);
    yield put(addMatchmakerSuccess(action.matchmaker));
  } catch (err) {
    yield put(addMatchmakerError(err));
  }
}

export function* approveMatchmaker() {
  const requestURL = `${baseUrl}/MatchMaker/ApproveMatchmaker/${action.mm.id}`;
  try {
    yield call(request, requestURL);
    yield put(approveMatchmakerSuccess(action.mm.id));
  } catch (err) {
    yield put(approveMatchmakerError(err));
  }
}

export function* removeMatchmaker(action) {
  const requestURL = `${baseUrl}/MatchMaker/deleteMatchmaker/${action.mm.id}`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    yield call(request, requestURL, options);
    yield put(delMatchmakerSuccess(action.mm.id));
  } catch (err) {
    yield put(delMatchmakerError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loadData() {
  // Meetings
  yield takeLatest(LOAD_MEETINGS, getMeetings);
  yield takeLatest(GET_MM_MEETINGS, getMeetingsByMMId);
  yield takeEvery(ADD_MEETING, addMeeting);
  yield takeEvery(DEL_MEETING, removeMeeting);
  // Participants
  yield takeLatest(LOAD_PARTICIPANTS, getParticipants);
  yield takeEvery(GET_PARTICIPANT, getParticipantById);
  yield takeEvery(ADD_PARTICIPANT, addParticipant);
  yield takeEvery(UPDATE_PARTICIPANT, updateParticipant);
  yield takeEvery(DEL_PARTICIPANT, removeParticipant);
  yield takeEvery(GET_STATISTICS, getStatistics);
  // Matchmakers
  yield takeLatest(LOGIN_USER, loginUser);
  yield takeLatest(GET_UNAPRROVED_MATCHMAKERS, getUnapprovedMM);
  yield takeEvery(ADD_MATCHMAKER, addMatchmaker);
  yield takeEvery(APPROVE_MATCHMAKER, approveMatchmaker);
  yield takeEvery(DEL_MATCHMAKER, removeMatchmaker);
}
