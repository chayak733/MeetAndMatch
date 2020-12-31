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
import SelectStatisticsParticipants from './selectors';
import reducer from './reducer';
import messages from './messages';

export function Statistics() {
  useInjectReducer({ key: 'statistics', reducer });

  return (
    <div>
      <Helmet>
        <title>ParticipantsDashboard</title>
        <meta name="description" content="Description of Statistics" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Statistics.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  statisticsParticipants: SelectStatisticsParticipants(),
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
