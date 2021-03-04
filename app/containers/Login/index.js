/**
 *
 * Login
 *
 */

import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import { loginUser } from '../App/actions';
import Link from './Link';
import './loginStyle.scss';

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });

  const EmailRef = createRef();
  const PasswordRef = createRef();

  const loginHandler = () => {
    event.preventDefault();
    const user = {
      email: EmailRef.current.value,
      password: PasswordRef.current.value,
    }
    props.validateUser(user);
  }

  return (
    <div className="loginBackground">
      <div><input type="text" ref={EmailRef} placeholder="Email"></input></div>
      <div><input type="password" ref={PasswordRef} placeholder="Password"></input></div>
      <div>
        <button type="submit" onClick={loginHandler}>
          LOGIN
        </button>
      </div>
      <h6>Haven't signed up yet? click here</h6>
      <Link to={`/signin`}>SIGN IN</Link>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  validateUser: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    validateUser: user => dispatch(loginUser(user)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
