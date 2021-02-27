/**
 *
 * MatchmakerHeader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import HeaderLink from '../HeaderLink';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function MatchmakerHeader() {
  return (
    <div>
      <center>
        <nav>
          <HeaderLink to="/calendar">
            <FormattedMessage {...messages.calendar} />
          </HeaderLink>
          <HeaderLink to="/addMeeting">
            <FormattedMessage {...messages.addMeeting} />
          </HeaderLink>
          <HeaderLink to="/meetingsDashboard">
            <FormattedMessage {...messages.meetingsDashboard} />
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

MatchmakerHeader.propTypes = {};

export default MatchmakerHeader;
