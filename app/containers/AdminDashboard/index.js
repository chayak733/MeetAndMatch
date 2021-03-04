/**
 *
 * AdminDashboard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAdminDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AdminDashboard() {
  useInjectReducer({ key: 'adminDashboard', reducer });
  useInjectSaga({ key: 'adminDashboard', saga });

  return (
    <div>
      <Helmet>
        <title>AdminDashboard</title>
        <meta name="description" content="Description of AdminDashboard" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AdminDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  adminDashboard: makeSelectAdminDashboard(),
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

export default compose(
  withConnect,
  memo,
)(AdminDashboard);
