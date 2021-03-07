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
import { AdminDashboard } from '../AdminDashboard1';
import Login from '../Login';
import SignIn from '../SignIn';
import Signout from '../Signout';
import saga from './saga';
import { loadMeetings, loadParticipants, getMeetingsByMM, getUnapprovedMM, getStatistics } from './actions';
import {
  makeSelectMeetingCard,
  makeSelectMeetingEvent,
  makeSelectMeetings,
  makeSelectParticipantCard,
  makeSelectParticipants,
  makeSelectStatistics,
  makeSelectUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectMatchmakers,
} from './selectors';
// import reducer from './reducer';
import Header from '../../components/Header';
import UserHeader from '../../components/UserHeader';
import AdminHeader from '../../components/AdminHeader';
import MatchmakerHeader from '../../components/MatchmakerHeader';
import Footer from '../../components/Footer';
import 'style.scss';

export function App(props) {
  // useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  useEffect(() => {
    if (!props.meetings) props.getMeetings();
    // if (props.user && !props.meetings) props.onLoadMeetings(props.user.id);
    if (!props.participants) props.onLoadParticipants();
    if (!props.participants) props.onLoadParticipants();
    if (!props.matchmakers) props.onLoadmatchmakers(1);
    if (!props.statistics) props.getStatistics();
  }, []);

  const isAdmin = (props.user.mail == 'meetandmatch101@gmail.com');
  return (
    <div>
      <center>
        <Header />
        {/* {!props.user && <Header />}
        {props.user && <UserHeader />} */}
        {isAdmin && <AdminHeader />}
        {props.user && !isAdmin && <MatchmakerHeader />}
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
              <MeetingsDashboard user={props.user} participants={props.participants} meetings={props.meetingCards} />
            )}
          />
          <Route
            path="/calendar"
            component={() => <CalendarPage user={props.user} participants={props.participants} events={props.meetingEvents} />}
          />
          <Route path="/addParticipant" component={() => <AddParticipant />} />
          <Route path="/statistics" component={() => <Statistics statisticsList={props.statistics} />} />
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
          <Route path="/login" component={() => <Login />} />
          <Route path="/signin" component={() => <SignIn />} />
          <Route path="/signout" component={() => <Signout />} />
          <Route path="/adminDashboard" component={() => <AdminDashboard matchmakers={props.matchmakers} />} />
          <Route component={NotFoundPage} />
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
  matchmakers: makeSelectMatchmakers(),
  statistics: makeSelectStatistics(),
  user: makeSelectUser(),
  isLoading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    getMeetings: () => dispatch(loadMeetings()),
    onLoadMeetings: (mmId) => dispatch(getMeetingsByMM(mmId)),
    onLoadParticipants: () => dispatch(loadParticipants()),
    onLoadmatchmakers: () => dispatch(getUnapprovedMM()),
    getStatistics: () => dispatch(getStatistics()),
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
