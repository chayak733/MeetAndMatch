/*
 * MatchmakerHeader Messages
 *
 * This contains all the text for the MatchmakerHeader component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.MatchmakerHeader';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MatchmakerHeader component!',
  },
  calendar: {
    id: `${scope}.calendar`,
    path: '/calendar',
    defaultMessage: 'Calendar',
  },
  addMeeting: {
    id: `${scope}.addMeeting`,
    path: '/addMeeting',
    defaultMessage: 'Add Meeting',
  },
  meetingsDashboard: {
    id: `${scope}.meetingsDashboard`,
    path: '/meetingsDashboard',
    defaultMessage: 'Meetings Dashboard',
  },
  participantsDashboard: {
    id: `${scope}.participantsDashboard`,
    path: '/participantsDashboard',
    defaultMessage: 'Participants Dashboard',
  },
  statistics: {
    id: `${scope}.statistics`,
    path: '/statistics',
    defaultMessage: 'Show Statistics',
  },
});
