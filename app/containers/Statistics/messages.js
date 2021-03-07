/*
 * ParticipantsDashboard Messages
 *
 * This contains all the text for the ParticipantsDashboard container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ParticipantsDashboard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: `NO MEETING HAS BEEN SCHEDUELED TO THESE ${"\n"} PARTICIPANTS DURING THE LAST MONTH`,
  },
});
