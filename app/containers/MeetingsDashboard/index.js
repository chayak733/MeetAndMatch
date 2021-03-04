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
import { makeSelectParticipants } from '../App/selectors';
import reducer from '../App/reducer';
import messages from './messages';
import MeetingCard from './MeetingCard';
import { delMeeting } from '../App/actions';
import Link from './Link';

export function MeetingsDashboard({ participants, meetings, deleteMeeting }) {
  useInjectReducer({ key: 'meetingsDashboard', reducer });

  const getParticipantName = pId => {
    //return pId;

    if (!participants) return "";
    const ptc = participants.filter(p => p.id == pId)
    return ptc.length > 0 ? `${ptc[0].firstName} ${ptc[0].lastName}` : "";
  }

  const cardsArr =
    meetings &&
    meetings.map(card => (
      <div className="meetingCard">
        <MeetingCard
          key={card.id}
          firstParticipant={getParticipantName(card.firstParticipant)}
          secondParticipant={getParticipantName(card.secondParticipant)}
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
  participants: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

const mapStateToProps = createStructuredSelector({
  //   // participants: makeSelectParticipants(),
});

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
