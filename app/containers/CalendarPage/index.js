/**
 *
 * CalendarPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectUser } from './selectors';
import Login from '../Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './calendarStyle.scss';
import reducer from './reducer';

export function CalendarPage(props) {
  useInjectReducer({ key: 'calendarPage', reducer });
  const [user, setUser] = useState(false)

  useEffect(() => {
    if (props.user) setUser(props.user.name);
  }, []);


  return (
    <div>
      <Helmet>
        <title>CalendarPage</title>
        <meta name="description" content="Description of CalendarPage" />
      </Helmet>
      <center>
        {user && <Login />}
        {!user && <FullCalendar
          id="calendar"
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={props.events}
          dayMaxEvents={1}
          eventClick={arg => alert(arg.event.title)}
        />}
      </center>
    </div>
  );
}

CalendarPage.propTypes = {
  events: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
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
)(CalendarPage);
