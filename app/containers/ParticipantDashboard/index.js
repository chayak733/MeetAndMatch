/**
 *
 * ParticipantDashboard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// import makeSelectParticipants from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { delParticipant } from '../App/actions';
import ParticipantCard from './ParticipantCard';
import Link from './Link';
import 'style.scss';

export function ParticipantDashboard(props) {
  useInjectReducer({ key: 'participantDashboard', reducer });
  useInjectSaga({ key: 'participantDashboard', saga });

  const sorts = ['dob', 'status', 'origin'];

  // const compare = (a, b) => (a.dob >= b.dob ? a : b);

  const applySort = (participants, sort) => {
    if (!sort) {
      return participants;
    }
    return React.Children.toArray(props.participants).sort((a, b) =>
      a.dob >= b.dob ? a : b,
    );
  };

  const SortButtons = sorts.map(sort => (
    <button
      type="button"
      className="sortBtn"
      onClick={() => applySort(props.participants, sort)}
      key={sort}
    >
      Sort by {sort}
    </button>
  ));

  const ParticipantsCardsArr =
    props.participants &&
    props.participants.map(card => (
      <div className="participantCard">
        <ParticipantCard
          key={card.id}
          name={card.name}
          dob={card.dob}
          gender={card.gender}
          status={card.status}
          origin={card.origin}
          email={card.email}
          phone={card.phone}
          resume={card.resume}
        />
        <button type="button" onClick={() => props.deleteParticipant(card)}>
          DELETE
        </button>
        <Link to={`/updateParticipant/${card.id}`}>UPDATE</Link>
        <hr />
      </div>
    ));
  try {
    return (
      <div>
        <center>
          <h3>
            <FormattedMessage {...messages.header} />
          </h3>
          <div>{SortButtons}</div>
          {ParticipantsCardsArr}
        </center>
      </div>
    );
  } catch {
    return <h3>There is an error!!!!</h3>;
  }
}

// ParticipantDashboard.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  // participants: makeSelectParticipants(),
});

function mapDispatchToProps(dispatch) {
  return {
    deleteParticipant: participant => dispatch(delParticipant(participant)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ParticipantDashboard);
