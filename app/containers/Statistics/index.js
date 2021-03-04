/**
 *
 * ParticipantsDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
// import { SelectStatisticsParticipants } from './selectors';
import reducer from './reducer';
import messages from './messages';
import ParticipantCard from './ParticipantCard';

export function Statistics(props) {
  useInjectReducer({ key: 'statistics', reducer });

  const statisticsArr = props.statisticsList &&
    props.statisticsList.map(participant => (
      <div className="participantCard">
        <hr />
        <ParticipantCard
          key={participant.id}
          name={participant.name}
          dob={participant.dob}
          gender={participant.gender}
          status={participant.status}
          origin={participant.origin}
          email={participant.email}
          phone={participant.phone}
          resume={participant.resume}
        />
      </div>
    ))

  return (
    <div>
      <Helmet>
        <title>ParticipantsDashboard</title>
        <meta name="description" content="Description of Statistics" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      {statisticsArr}
    </div>
  );
}

Statistics.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // statisticsParticipants: SelectStatisticsParticipants(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Statistics);
