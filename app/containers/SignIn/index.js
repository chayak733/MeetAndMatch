/**
 *
 * SignIn
 *
 */

import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSignIn from './selectors';
import reducer from './reducer';
import saga from './saga';
import uuid from 'uuid-random';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Form,
  Col,
  InputGroup,
  FormControl,
  Alert,
} from 'react-bootstrap';
import { Telephone, Person, ShieldLockFill } from 'react-bootstrap-icons';
import Link from './Link';
import Button from '../../components/Button';
import { addMatchmaker } from '../App/actions';

export function SignIn(props) {
  useInjectReducer({ key: 'signIn', reducer });
  useInjectSaga({ key: 'signIn', saga });

  const UserNameRef = createRef();
  const PasswordRef = createRef();
  const EmailRef = createRef();
  const PhoneRef = createRef();

  const mapFormToDispatch = () => {
    debugger;
    event.preventDefault();
    const newMatchMaker = {
      matchMakerId: uuid(),
      userName: UserNameRef.current.value,
      password: PasswordRef.current.value,
      mail: EmailRef.current.value,
      phone: PhoneRef.current.value,
      isRegistered: false,
    }
    props.addMatchmaker(newMatchMaker);
  }
  return (
    <>
      <Form onSubmit={mapFormToDispatch}>
        <center>
          <h3>Personal Details:</h3>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Person />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Insert Your User Name"
                  ref={UserNameRef}
                  required
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <ShieldLockFill />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Choose Password"
                  ref={PasswordRef}
                  required
                />
              </InputGroup>
            </Col>
          </Form.Row>

          <Form.Row className="align-items-center">
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="example@gmail.com"
                  type="email"
                  ref={EmailRef}
                  required
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Telephone />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Insert Phone Number"
                  ref={PhoneRef}
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength="10"
                />
              </InputGroup>
            </Col>
          </Form.Row>

          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Link to="/">Cancel</Link>
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2">
                {/* onClick={displayAlert} */}
                Submit
              </Button>
            </Col>
          </Form.Row>
        </center>
      </Form>
    </>
  );
}

SignIn.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  signIn: makeSelectSignIn(),
});

function mapDispatchToProps(dispatch) {
  debugger;
  return {
    addMatchmaker: (mm) => dispatch(addMatchmaker(mm)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SignIn);
