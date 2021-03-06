/**
 *
 * ParticipantDashboard
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectParticipants from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { delParticipant, getParticipant } from '../App/actions';
import ParticipantCard from './ParticipantCard';
import Link from './Link';
import { DropdownButton, Dropdown, Item } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

export function ParticipantDashboard(props) {
  useInjectReducer({ key: 'participantDashboard', reducer });
  useInjectSaga({ key: 'participantDashboard', saga });

  const status = ['Married', 'Single', 'Divorced', 'Widower'];
  const order = ['Ascending', 'Descending'];
  const origin = ["Ashkenazi", "Chassidi", "Sfaradi", "Other"];

  // const [sortedParticipent, setSortedParticipent] = useState([]);
  // participants = React.Children.toArray(props.participants)

  // useEffect(() => {
  //   if (!sortedParticipent.length && participants) {
  //     setSortedParticipent(renderList());
  //   }
  // });

  // function getSortedList(sortType, sortBy) {
  //   switch (sortType) {
  //     case 'dob':
  //       sortByDOB(sortBy);
  //     case 'status':
  //       sortByStatus(sortBy);
  //       break;
  //     case 'origin':
  //       sortByOrigin(sortBy);
  //       break;
  //     default:
  //       renderOriginList();
  //   }
  // }

  // function sortByDOB(order) {
  //   const sortedParticipentList = participants.sort(
  //     (a, b) => new Date(b.dob) - new Date(a.dob),
  //   );
  //   if (order === 'increase order') {
  //     sortedMatchesList.reverse();
  //   }
  //   setSortedParticipent(renderList(sortedParticipentList));
  // }

  // function sortByStatus(status) {
  //   const sortedParticipentList = participants.filter(
  //     participant => participant.status === status,
  //   );
  //   setSortedParticipent(renderList(sortedParticipentList));
  // }

  // function sortByOrigin(origin) {
  //   const sortedParticipentList = participants.filter(
  //     participant => participant.origin === origin,
  //   );
  //   setSortedParticipent(renderList(sortedParticipentList));
  // }

  // function renderOriginList() {
  //   setSortedParticipent(renderList(participants));
  // }

  const getDropDown = (title, sortType, ITEMS) => {
    return (
      <DropdownButton
        className="dropdown-basic-button"
        title={title}
        onSelect={e => {
          getSortedList(sortType, sortBy);
        }}
      >
        {ITEMS.map(item => (
          <Dropdown.Item eventKey={item} key={item}>
            {item}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    );
  }

  const parseDate = (date) => {
    date = String(date).split('T');
    return date[0];
  }
  // function renderList(sortedParticipentList = participant) {
  // sortedParticipentList &&
  // sortedParticipentList.map(participant => (
  const participantArr = props.participants &&
    props.participants.map(participant => (
      <div className="participantCard">
        <ParticipantCard
          key={participant.id}
          name={participant.name}
          dob={parseDate(participant.dob)}
          gender={participant.gender}
          status={participant.status}
          origin={participant.origin}
          email={participant.email}
          phone={participant.phone}
          resume={participant.resume}
        />
        <button type="button" onClick={() => props.deleteParticipant(participant)}>
          DELETE
        </button>
        <Link to={`/updateParticipant/${participant.id}`} onClick={() => props.getParticipantById(participant.id)}>UPDATE</Link>
      </div>
    ))

  return (
    <center>
      <h3>
        <FormattedMessage {...messages.header} />
      </h3>
      {getDropDown('Sort by d.o.b', 'dob', order)}
      {getDropDown('Filter by status', 'status', status)}
      {getDropDown('Filter by origin', 'origin', origin)}
      <div>
        {participantArr}
      </div>
    </center>
  )
}

//   try {
//     return (
//       <div>
//         <center>
//           <h3>
//             <FormattedMessage {...messages.header} />
//           </h3>
//           <div className="sortBtn">
//             {getDropDown('Sort by birthdate', 'dob', ORDER)}
//             {getDropDown('Sort/Filter by status', 'status', STATUS)}
//             {getDropDown('Sort/Filter by origin', 'origin', ORIGIN)}
//           </div>
//           {sortedParticipent}
//         </center>
//       </div>
//     );
//   } catch {
//     return <h3>There is an error!!!!</h3>;
//   }
// }

// ParticipantDashboard.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  // participants: makeSelectParticipants(),
});

function mapDispatchToProps(dispatch) {
  return {
    getParticipantById: participant => dispatch(getParticipant(participant)),
    deleteParticipant: participant => dispatch(delParticipant(participant)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ParticipantDashboard);
