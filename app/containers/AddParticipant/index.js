/**
 *
 * AddParticipant
 *
 */

import React, { memo, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import uuid from 'uuid-random';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Form,
  Col,
  InputGroup,
  FormControl,
  Alert,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import { Telephone, Person } from 'react-bootstrap-icons';

import makeSelectAddParticipant from './selectors';
import reducer from './reducer';
import saga from './saga';
import Button from '../../components/Button';

import { addParticipant } from '../App/actions';
import './style.scss';
import Link from './Link';

export function AddParticipant(props) {
  useInjectReducer({ key: 'addParticipant', reducer });
  useInjectSaga({ key: 'addParticipant', saga });
  const [showAlert, setShowAlert] = useState(false);
  // const [resume, setResume] = useState(false);
  const [origin, setOrigin] = useState('Origin');

  const FirstNameRef = createRef();
  const LastNameRef = createRef();
  const DobRef = createRef();
  const GenderRef = createRef();
  const EmailRef = createRef();
  const PhoneRef = createRef();
  const ResumeRef = createRef();
  const StatusRef = createRef();

  const displayAlert = () => setShowAlert(true);

  // const onChangeHandler = event => {
  //   setResume(event.target.files[0]);
  // };

  const mapFormToDispatch = () => {
    event.preventDefault();
    const newParticipant = {
      id: uuid(),
      firstName: FirstNameRef.current.value,
      lastName: LastNameRef.current.value,
      dob: DobRef.current.value,
      gender: GenderRef.current.value,
      origin,
      email: EmailRef.current.value,
      phone: PhoneRef.current.value,
      // resume: ResumeRef.current.value,
      resume:
        'file:///C:/yafit/IDeal/client/%D7%A8%D7%96%D7%95%D7%9E%D7%94.pdf',
      // resume,
      status: StatusRef.current.value,
    };
    props.addParticipant(newParticipant);
    // setShowAlert(true);
    displayAlert();
  };

  return (
    <div>
      {showAlert && (
        <Alert variant="light">
          <Alert.Heading>THE PARTICIPANT WAS ADDED SUCCESSFULY!</Alert.Heading>
          <Link to="/participantsDashboard" id="alertLink">
            Move to Participants Dashboard
          </Link>
        </Alert>
      )}
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
                  placeholder="Insert first Name"
                  ref={FirstNameRef}
                  required
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Person />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Insert last Name"
                  ref={LastNameRef}
                  required
                />
              </InputGroup>
            </Col>
          </Form.Row>

          <Form.Row className="align-items-center">
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Person />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <DropdownButton id="costummedDropdown" title={origin}>
                  <Dropdown.Item onClick={() => setOrigin('Sfaradi')}>
                    Sfaradi
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setOrigin('Ashkenazi')}>
                    Ashkenazi
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setOrigin('Chasidi')}>
                    Chasidi
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setOrigin('Other')}>
                    Other
                  </Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </Col>

            <Col xs="auto" id="dateInputCol">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>dob</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="2020-12-30"
                  type="date"
                  ref={DobRef}
                  required
                />
              </InputGroup>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Telephone />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Insert phone number"
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  ref={PhoneRef}
                />
              </InputGroup>
            </Col>
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
                />
              </InputGroup>
            </Col>
          </Form.Row>
          <h4>Upload resume</h4>
          <Form.Row>
            <input
              type="file"
              accept=".pdf,.docx"
              ref={ResumeRef}
            // onChange={onChangeHandler}
            />
          </Form.Row>

          <h4>What is your gender?</h4>
          <Form.Row>
            <input
              type="radio"
              className="radio"
              name="gender"
              value="male"
              ref={GenderRef}
            />
            <h6>Male</h6>
            <input
              type="radio"
              className="radio"
              name="gender"
              value="female"
              ref={GenderRef}
            />
            <h6>Female</h6>
          </Form.Row>
          <h4>What your status?</h4>
          <Form.Row>
            <input
              type="radio"
              className="radio"
              name="status"
              value="single"
              ref={StatusRef}
            />
            <h6>Single</h6>
            <input
              type="radio"
              className="radio"
              name="status"
              value="divorced"
              ref={StatusRef}
            />
            <h6>Divorced</h6>
            <input
              type="radio"
              className="radio"
              name="status"
              value="widower"
              ref={StatusRef}
            />
            <h6>Widowe/r</h6>
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
    </div>
  );
}

AddParticipant.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  addParticipant: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  addParticipant: makeSelectAddParticipant(),
});

function mapDispatchToProps(dispatch) {
  return {
    addParticipant: participant => dispatch(addParticipant(participant)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddParticipant);