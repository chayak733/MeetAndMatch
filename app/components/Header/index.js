/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import HeaderLink from './HeaderLink';
import Img from './Img';
import messages from './messages';
import Banner from './banner.png';

function Header() {
  return (
    <div>
      <center>
        <Img src={Banner} alt="MeetAndMatch - Logo" />
        <nav>
          <HeaderLink to="/">
            <FormattedMessage {...messages.homePage} />
          </HeaderLink>
          <HeaderLink to="/calendar">
            <FormattedMessage {...messages.calendar} />
          </HeaderLink>
          <HeaderLink to="/addMeeting">
            <FormattedMessage {...messages.addMeeting} />
          </HeaderLink>
          <HeaderLink to="/addParticipant">
            <FormattedMessage {...messages.addParticipant} />
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

Header.propTypes = {};

export default memo(Header);
