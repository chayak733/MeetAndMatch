/**
 *
 * Signout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { signOut } from '../App/actions';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSignout from './selectors';
import reducer from './reducer';
import messages from './messages';
import './loginStyle.scss';

export function Signout(props) {
  useInjectReducer({ key: 'signout', reducer });

  return (
    <div className="loginBackground">
      <h3>Are you sure you want to sign out?</h3>
      <button type="submit" onClick={() => props.signout()}>
        SIGN OUT
      </button>
    </div>
  );
}

Signout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signout: makeSelectSignout(),
});

function mapDispatchToProps(dispatch) {
  return {
    signout: () => dispatch(signOut()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Signout);
