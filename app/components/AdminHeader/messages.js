/*
 * AdminHeader Messages
 *
 * This contains all the text for the AdminHeader component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.AdminHeader';

export default defineMessages({
  adminDashboard: {
    id: `${scope}.adminDashboard`,
    defaultMessage: 'Administor Dashboard',
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
