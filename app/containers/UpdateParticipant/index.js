/**
 *
 * UpdateParticipant
 *
 */

import React, { useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getParticipant, updateParticipant } from '../App/actions';
import { makeSelectCurrentParticipant } from '../App/selectors';
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
import Button from '../../components/Button';
import Link from './Link';
import makeSelectUpdateParticipant from './selectors';
import reducer from './reducer';
import saga from './saga';

export function UpdateParticipant(props) {
  useInjectReducer({ key: 'updateParticipant', reducer });
  useInjectSaga({ key: 'updateParticipant', saga });

  // useEffect(() => {
  //   debugger;
  //   props.getParticipantById(1);
  //   // props.getParticipantById(props.participant.match.params.participant);
  // }, []);

  const [showAlert, setShowAlert] = useState(false);
  const [origin, setOrigin] = useState('Origin');

  const FirstNameRef = createRef();
  const LastNameRef = createRef();
  const DobRef = createRef();
  const GenderRef = createRef();
  const OriginRef = createRef();
  const EmailRef = createRef();
  const PhoneRef = createRef();
  const ResumeRef = createRef();
  const StatusRef = createRef();

  // const displayAlert = () => setShowAlert(true);

  const onChangeHandler = event => {
    console.log(event.target.files[0]);
  };

  // const { participantId } = props.participant.match.params.participant;

  const mapFormToDispatch = () => {
    event.preventDefault();
    const newParticipant = {
      id: participantId,
      firstName: FirstNameRef.current.value,
      lastName: LastNameRef.current.value,
      dob: DobRef.current.value,
      gender: GenderRef.current.value,
      origin: OriginRef.current.value,
      email: EmailRef.current.value,
      phone: PhoneRef.current.value,
      resume: ResumeRef.current.value,
      status: StatusRef.current.value,
    };
    setShowAlert(true);
    props.updParticipant(newParticipant);
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
                  placeholder={props.currParticipant.firstName}
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
                  placeholder={props.currParticipant.lastName}
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
                  placeholder={props.currParticipant.dob}
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
                  placeholder={props.currParticipant.phone}
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
                  placeholder={props.currParticipant.email}
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
              placeholder={props.currParticipant.resume}
              ref={ResumeRef}
              onChange={onChangeHandler}
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

UpdateParticipant.propTypes = {
  participant: PropTypes.object,
  // firstName: PropTypes.string,
  // lastName: PropTypes.string,
  // dob: PropTypes.string,
  // origin: PropTypes.string,
  // resume: PropTypes.string,
  // phone: PropTypes.string,
  // email: PropTypes.string,
  updateParticipant: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currParticipant: makeSelectCurrentParticipant(),
  updateParticipant: makeSelectUpdateParticipant(),
});

function mapDispatchToProps(dispatch) {
  return {
    getParticipantById: pId => dispatch(getParticipant(pId)),
    updParticipant: participant => dispatch(updateParticipant(participant)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UpdateParticipant);
