/**
 *
 * App
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'components/HomePage/Loadable';
import AddMeetingPage from 'containers/AddMeetingPage';
import AddParticipant from 'containers/AddParticipant';
import MeetingsDashboard from 'containers/MeetingsDashboard';
import Statistics from 'containers/Statistics';
import CalendarPage from 'containers/CalendarPage';
import UpdateMeeting from 'containers/UpdateMeeting';
import UpdateParticipant from 'containers/UpdateParticipant';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ParticipantDashboard from 'containers/ParticipantDashboard';
import AdminDashboard from 'C:/yafit/git_MeetAndMatch/MeetAndMatch/app/containers/AdminDashboard';
import Login from 'containers/Login';
import SignIn from '../SignIn';
import saga from './saga';
import { loadMeetings, loadParticipants, getMeetingsByMM } from './actions';
import {
  makeSelectMeetingCard,
  makeSelectMeetingEvent,
  makeSelectMeetings,
  makeSelectParticipantCard,
  makeSelectParticipants,
  makeSelectUser,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
// import reducer from './reducer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import 'style.scss';

export function App(props) {
  // useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  useEffect(() => {
    if (props.user && !props.meetings) props.onLoadMeetings(props.user.id);
  }, []);

  useEffect(() => {
    if (!props.participants) props.onLoadParticipants();
  }, []);

  useEffect(() => {
    if (!props.meetings) props.onLoadMeetings(1);
  }, []);

  return (
    <div>
      <center>
        <Header />
        {props.isLoading && <div className="loading">loading...</div>}
        {props.error && (
          <div className="error">oops! error occurred... {props.error}</div>
        )}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/addMeeting" component={() => <AddMeetingPage />} />
          <Route
            path="/meetingsDashboard"
            component={() => (
              <MeetingsDashboard meetings={props.meetingCards} />
            )}
          />
          <Route
            path="/calendar"
            component={() => <CalendarPage events={props.meetingEvents} />}
          />
          <Route path="/addParticipant" component={() => <AddParticipant />} />
          <Route path="/statistics" component={() => <Statistics />} />
          <Route
            path="/participantsDashboard"
            component={() => (
              <ParticipantDashboard participants={props.participantCards} />
            )}
          />
          <Route path="/updateMeeting" component={() => <UpdateMeeting />} />
          <Route
            path="/updateParticipant/:participant"
            component={participant => (
              <UpdateParticipant participant={participant} />
            )}
          />
          <Route component={NotFoundPage} />
          <Route path="/login" component={() => <Login />} />
          <Route path="/signin" component={() => <SignIn />} />
          <Route path="/adminDashboard" component={() => <AdminDashboard />} />
        </Switch>
        <Footer />
      </center>
    </div>
  );
}

App.propTypes = {
  meetings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  meetingCards: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  meetingEvents: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  participants: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  participantCards: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isLoading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoadMeetings: PropTypes.func,
  onLoadParticipants: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  meetingCards: makeSelectMeetingCard(),
  meetingEvents: makeSelectMeetingEvent(),
  meetings: makeSelectMeetings(),
  participantCards: makeSelectParticipantCard(),
  participants: makeSelectParticipants(),
  user: makeSelectUser(),
  isLoading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadMeetings: (mmId) => dispatch(getMeetingsByMM(mmId)),
    onLoadParticipants: () => dispatch(loadParticipants()),
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
)(App);
