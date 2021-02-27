/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the CalendarPage container!',
  },
  homePage: {
    id: `${scope}.homePage`,
    path: '/',
    defaultMessage: 'Home Page',
  },
  addParticipant: {
    id: `${scope}.addParticipant`,
    path: '/addParticipant',
    defaultMessage: 'Add Participant',
  },
  login: {
    id: `${scope}.login`,
    path: '/login',
    defaultMessage: 'Login',
  },
});
