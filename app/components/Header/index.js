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
      <Img src={Banner} alt="MeetAndMatch - Logo" />
      <nav>
        <HeaderLink to="/">
          <FormattedMessage {...messages.homePage} />
        </HeaderLink>
        <HeaderLink to="/addParticipant">
          <FormattedMessage {...messages.addParticipant} />
        </HeaderLink>
        <HeaderLink to="/login">
          <FormattedMessage {...messages.login} />
        </HeaderLink>
      </nav>
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
