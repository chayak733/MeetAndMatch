// import React from 'react';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the app state domain
 */

const selectGlobal = state => state.global || initialState;
const selectRouter = state => state.router || initialState;

/**
 * Other specific selectors
 */

const makeSelectMeetings = () =>
  createSelector(
    selectGlobal,
    substate => substate.meeting,
  );

const makeSelectParticipants = () =>
  createSelector(
    selectGlobal,
    substate => substate.participant,
  );

const makeSelectCurrentParticipant = () =>
  createSelector(
    selectGlobal,
    substate => substate.currentParticipant,
  );

const makeSelectMatchmakers = () =>
  createSelector(
    selectGlobal,
    substate => substate.matchmakers,
  );

const makeSelectStatistics = () =>
  createSelector(
    selectGlobal,
    substate => substate.statistics,
  );

const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    substate => substate.user,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    substate => substate.error,
  );

const makeSelectCurrentMeeting = () =>
  createSelector(
    selectGlobal,
    substate => substate.currentMeeting,
  );

const makeSelectMeetingCard = () =>
  createSelector(
    selectGlobal,
    substate =>
      substate.meeting &&
      substate.meeting.map(meeting => ({
        id: meeting.id,
        firstParticipant: meeting.firstParticipantId,
        secondParticipant: meeting.secondParticipantId,
        date: meeting.date,
        address: meeting.address,
      })),
  );

const makeSelectParticipantCard = () =>
  createSelector(
    selectGlobal,
    substate =>
      substate.participant &&
      substate.participant.map(participant => ({
        id: participant.id,
        name: `${participant.firstName} ${participant.lastName}`,
        dob: participant.dateOfBirth,
        gender: participant.gender,
        status: participant.status,
        origin: participant.origin,
        email: participant.mail,
        phone: participant.phone,
        resume: participant.resume,
      })),
  );

const makeSelectMeetingEvent = () =>
  createSelector(
    selectGlobal,
    substate =>
      substate.meeting &&
      substate.meeting.map(meeting => ({
        id: meeting.id,
        title: `${meeting.firstParticipantId} - ${meeting.secondParticipantId}`,
        start: meeting.date,
      })),
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    substate => substate.location,
  );

export {
  makeSelectMeetingCard,
  makeSelectMeetingEvent,
  makeSelectMeetings,
  makeSelectParticipantCard,
  makeSelectParticipants,
  makeSelectMatchmakers,
  makeSelectStatistics,
  makeSelectUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectCurrentMeeting,
  makeSelectLocation,
  makeSelectCurrentParticipant,
};
