/**
 *
 * UpdateMeeting
 *
 */

import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
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
import { GeoAlt } from 'react-bootstrap-icons';
import Button from '../../components/Button';
import Link from './Link';
// import { useInjectSaga } from 'utils/injectSaga';
// import { useInjectReducer } from 'utils/injectReducer';
import { getParticipant } from '../App/actions';
import { selectFemaleParticipants, selectMaleParticipants } from './selectors';
// import reducer from './reducer';
// import saga from './saga';

export function UpdateMeeting(props) {
  const [showAlert, setShowAlert] = useState(false);
  const [maleTitle, setMaleTitle] = useState(props.firstParticipant);
  const [femaleTitle, setFemaleTitle] = useState(props.secondParticipant);

  // useInjectReducer({ key: 'addMeetingPage', reducer });

  const DateRef = createRef();
  const AddressRef = createRef();

  const displayAlert = () => setShowAlert(true);

  const getDropdownItems = gender => {
    let participants;
    if (gender === 'male') participants = props.maleParticipants;
    else participants = props.femaleParticipants;
    return (
      participants &&
      participants.map(participant => (
        <Dropdown.Item
          eventKey={participant.id}
          onSelect={() => handleSelect(this.eventKey)}
        >
          {participant.firstName} {participant.lastName}
        </Dropdown.Item>
      ))
    );
  };

  const handleSelect = participantId => {
    const currParticipant = props.getParticipant(participantId);
    if (currParticipant.gender === 'male')
      setMaleTitle(`${currParticipant.firstName} ${currParticipant.lastName}`);
    else
      setFemaleTitle(
        `${currParticipant.firstName} ${currParticipant.lastName}`,
      );
  };

  const mapFormToDispatch = () => {
    event.preventDefault();
    const newMeeting = {
      id: props.id,
      firstParticipant: maleTitle,
      secondParticipant: femaleTitle,
      address: AddressRef.current.value,
      date: DateRef.current.value,
    };
    props.updateMeeting(newMeeting);
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
      <Form onSubmit={mapFormToDispatch}>
        <center>
          <h3> First Participant Details:</h3>
          <Form.Row>
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

          <h3>Second Participant Details</h3>
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

          <h3>Meeting Details</h3>
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
                  placeholder={props.address}
                  ref={AddressRef}
                  required
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder={props.date}
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
                Update
              </Button>
            </Col>
          </Form.Row>
        </center>
      </Form>
    </div>
  );
}

UpdateMeeting.propTypes = {
  id: PropTypes.string,
  firstParticipant: PropTypes.string,
  secondParticipant: PropTypes.string,
  address: PropTypes.string,
  date: PropTypes.string,
  maleParticipants: PropTypes.oneOf([PropTypes.array, PropTypes.bool]),
  femaleParticipants: PropTypes.oneOf([PropTypes.array, PropTypes.bool]),
  updateMeeting: PropTypes.oneOf([PropTypes.array, PropTypes.bool]),
  getParticipant: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  maleParticipants: selectMaleParticipants(),
  femaleParticipants: selectFemaleParticipants(),
});

function mapDispatchToProps(dispatch) {
  return {
    getParticipant: participantId => dispatch(getParticipant(participantId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UpdateMeeting);
