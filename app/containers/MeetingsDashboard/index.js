/**
 *
 * MeetingsDashboard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import reducer from '../App/reducer';
import messages from './messages';
import MeetingCard from './MeetingCard';
import { delMeeting } from '../App/actions';
import Link from './Link';

export function MeetingsDashboard({ meetings, deleteMeeting }) {
  useInjectReducer({ key: 'meetingsDashboard', reducer });

  const cardsArr =
    meetings &&
    meetings.map(card => (
      <div className="meetingCard">
        <MeetingCard
          key={card.id}
          firstParticipant={card.firstParticipant}
          secondParticipant={card.secondParticipant}
          date={card.date}
          address={card.address}
        />
        <button type="button" onClick={() => deleteMeeting(card)}>
          DELETE
        </button>
        <Link to="/updateMeeting">UPDATE</Link>
      </div>
    ));

  return (
    <div>
      <center>
        <h3>
          <FormattedMessage {...messages.header} />
        </h3>
        {cardsArr}
      </center>
    </div>
  );
}

MeetingsDashboard.propTypes = {
  meetings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  deleteMeeting: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return { deleteMeeting: meeting => dispatch(delMeeting(meeting)) };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MeetingsDashboard);
