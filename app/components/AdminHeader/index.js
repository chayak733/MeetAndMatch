/**
 *
 * AdminHeader
 *
 */

import React from 'react';
import HeaderLink from '../HeaderLink';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AdminHeader() {
  return (
    <div>
      <center>
        <nav>
          <HeaderLink to="/adminDashboard">
            <FormattedMessage {...messages.adminDashboard} />
          </HeaderLink>
          <HeaderLink to="/participantsDashboard">
            <FormattedMessage {...messages.participantsDashboard} />
          </HeaderLink>
          <HeaderLink to="/statistics">
            <FormattedMessage {...messages.statistics} />
          </HeaderLink>
        </nav>
      </center>
    </div>
  );
}
AdminHeader.propTypes = {};

export default AdminHeader;
