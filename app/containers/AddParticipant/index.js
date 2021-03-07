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
  const [origin, setOrigin] = useState('Origin');
  const [gender, setGender] = useState('Gender');
  const [status, setStatus] = useState('Status');

  const FirstNameRef = createRef();
  const LastNameRef = createRef();
  const DobRef = createRef();
  const EmailRef = createRef();
  const PhoneRef = createRef();
  const ResumeRef = createRef();

  const displayAlert = () => setShowAlert(true);

  const onGenderChange = () => {
    setGender(event.target.value)
  }

  const onStatusChange = () => {
    setStatus(event.target.value)
  }

  const mapFormToDispatch = () => {
    debugger;
    event.preventDefault();
    const newParticipant = {
      firstName: FirstNameRef.current.value,
      lastName: LastNameRef.current.value,
      dateOfBirth: DobRef.current.value,
      gender: gender,
      status: status,
      origin,
      resume:
        'file:///C:/yafit/IDeal/client/D7%94.pdf',
      mail: EmailRef.current.value,
      phone: PhoneRef.current.value,
    };
    console.log(newParticipant)
    props.addParticipant(newParticipant);
    setShowAlert(true);
    // displayAlert();
  };

  return (
    <div id="add-ptc-body">
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
              <InputGroup className="mb-2" id="dob-mb-2">
                <InputGroup.Prepend id="dobInputPrepend">
                  <InputGroup.Text id="dobInputText">dob</InputGroup.Text>
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
              id="input-file"
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
              onChange={onGenderChange}
            />
            <h6>Male</h6>
            <input
              type="radio"
              className="radio"
              name="gender"
              value="female"
              onChange={onGenderChange}
            />
            <h6>Female</h6>
          </Form.Row>
          <h4>What your status?</h4>
          <Form.Row>
            <input
              type="radio"
              className="radio"
              name="status"
              value="1"
              onChange={onStatusChange}
            />
            <h6>Single</h6>
            <input
              type="radio"
              className="radio"
              name="status"
              value="2"
              onChange={onStatusChange}
            />
            <h6>Divorced</h6>
            <input
              type="radio"
              className="radio"
              name="status"
              value="3"
              onChange={onStatusChange}
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
  dispatch: PropTypes.func.isRequired,
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
