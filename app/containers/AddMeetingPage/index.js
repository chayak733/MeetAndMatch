/**
 *
 * AddMeetingPage
 *
 */

import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import { useInjectReducer } from 'utils/injectReducer';
import {
  Form,
  Col,
  InputGroup,
  FormControl,
  Alert,
  Dropdown,
  CustomToggle,
  CustomMenu,
} from 'react-bootstrap';
import { Telephone, Person, GeoAlt } from 'react-bootstrap-icons';
import uuid from 'uuid-random';
import Button from '../../components/Button';
// import reducer from '../App/reducer';
import {
  selectFemaleParticipants,
  selectMaleParticipants,
  makeSelectParticipantByID,
} from './selectors';
import { addMeeting, getParticipant } from '../App/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Link from './Link';
import {
  makeSelectCurrentParticipant,
  makeSelectCurrentMeeting,
} from '../App/selectors';

export function AddMeetingPage(props) {
  const [showAlert, setShowAlert] = useState(false);
  const [maleTitle, setMaleTitle] = useState('Male Participant');
  const [femaleTitle, setFemaleTitle] = useState('Female Participant');
  const current = makeSelectCurrentParticipant();
  // useInjectReducer({ key: 'addMeetingPage', reducer });

  const DateRef = createRef();
  const AddressRef = createRef();

  const displayAlert = () => setShowAlert(true);

  const mapFormToDispatch = () => {
    event.preventDefault();
    const newMeeting = {
      id: uuid(),
      firstParticipant: maleTitle,
      secondParticipant: femaleTitle,
      address: AddressRef.current.value,
      date: DateRef.current.value,
    };
    props.addMeeting(newMeeting);
  };

  const handleSelect = participant => {
    if (participant.gender === 'male')
      setMaleTitle(`${participant.firstName} ${participant.lastName}`);
    else if (participant.gender === 'female')
      setFemaleTitle(`${participant.firstName} ${participant.lastName}`);
  };

  const checkFunc = () => {
    getParticipant('5fbee74a4631c661f2c28397');
    console.log(current);
  };

  const getDropdownItems = gender => {
    let participants;
    if (gender === 'male') participants = props.maleParticipants;
    else participants = props.femaleParticipants;
    return (
      participants &&
      participants.map(participant => (
        <Dropdown.Item
          eventKey={participant.id}
          onSelect={() => handleSelect(participant)}
        >
          {participant.firstName} {participant.lastName}
        </Dropdown.Item>
      ))
    );
  };

  return (
    <div>
      {showAlert && (
        <Alert variant="light">
          <Alert.Heading>THE MEETING WAS ADDED SUCCESSFULY!</Alert.Heading>
          <Link to="/MeetingsDashboard" id="alertLink">
            Move to Meetings Dashboard
          </Link>
        </Alert>
      )}

      <button type="submit" onClick={checkFunc}>
        get participant
      </button>

      <Form onSubmit={mapFormToDispatch}>
        <center>
          <h3> Choose First Participant:</h3>
          <Form.Row className="align-items-center">
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  {maleTitle}
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                  {getDropdownItems('male')}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Form.Row>

          <h3>Choose Second Participant:</h3>
          <Form.Row className="align-items-center">
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  {femaleTitle}
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                  {getDropdownItems('female')}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Form.Row>

          <h3>Meeting Details:</h3>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <GeoAlt />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Insert address"
                  ref={AddressRef}
                  required
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="2020-12-30"
                type="date"
                ref={DateRef}
                required
              />
            </Col>
          </Form.Row>

          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Link to="/">Cancel</Link>
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2" onClick={displayAlert}>
                Submit
              </Button>
            </Col>
          </Form.Row>
        </center>
      </Form>
    </div>
  );
}

AddMeetingPage.propTypes = {
  maleParticipants: PropTypes.oneOf([PropTypes.array, PropTypes.bool]),
  femaleParticipants: PropTypes.oneOf([PropTypes.array, PropTypes.bool]),
  addMeeting: PropTypes.func,
  // getParticipant: PropTypes.func,
  // getParticipantByID: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  maleParticipants: selectMaleParticipants(),
  femaleParticipants: selectFemaleParticipants(),
  // getParticipantByID: participantId => makeSelectParticipantByID(participantId),
});

function mapDispatchToProps(dispatch) {
  return {
    addMeeting: meeting => dispatch(addMeeting(meeting)),
    getParticipant: participantId => dispatch(getParticipant(participantId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddMeetingPage);
