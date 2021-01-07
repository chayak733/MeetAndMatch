/**
 *
 * ParticipantDashboard
 *
 */

import React from 'react';
import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// import makeSelectParticipants from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { delParticipant } from '../App/actions';
import ParticipantCard from './ParticipantCard';
import Link from './Link';
import 'style.scss';

const STATUS = ['married', 'single', 'divorced', 'widower'];
const ORDER = ['increase order', 'decrease order'];
const ORIGIN = ["a","b","c"];

export function ParticipantDashboard(props) {
  useInjectReducer({ key: 'participantDashboard', reducer });
  useInjectSaga({ key: 'participantDashboard', saga });
  
  const [sortedParticipent, setSortedParticipent] = useState([]);
  participants = React.Children.toArray(props.participants)

  useEffect(() => {
    if (!sortedParticipent.length && participants) {
      setSortedParticipent(renderList());
    }
  });

  function getSortedList(sortType, sortBy) {
      switch (sortType) {
        case 'dob':
          sortByDOB(sortBy);
        case 'status':
          sortByStatus(sortBy);
          break;
        case 'origin':
          sortByOrigin(sortBy);
          break;
        default:
          renderOriginList();
      }
    }

    function sortByDOB(order) {
      const sortedParticipentList = participants.sort(
        (a, b) => new Date(b.dob) - new Date(a.dob),
      );
      if (order === 'increase order') {
        sortedMatchesList.reverse();
      }
      setSortedParticipent(renderList(sortedParticipentList));
    }

    function sortByStatus(status) {
      const sortedParticipentList = participants.filter(
        participant => participant.status === status,
      );
      setSortedParticipent(renderList(sortedParticipentList)); 
       }

      function sortByOrigin(origin) {
        const sortedParticipentList = participants.filter(
          participant => participant.origin === origin,
     );
     setSortedParticipent(renderList(sortedParticipentList));
        }
  
    function renderOriginList() {
      setSortedParticipent(renderList(participants));
        }

   function renderList(sortedParticipentList = participant) {
    return (
      sortedParticipentList &&
      sortedParticipentList.map(card => (
        <div className="participantCard">
          <ParticipantCard
            key={card.id}
            name={card.name}
            dob={card.dob}
            gender={card.gender}
            status={card.status}
            origin={card.origin}
            email={card.email}
            phone={card.phone}
            resume={card.resume}
            />
            <button type="button" onClick={() => props.deleteParticipant(card)}>
              DELETE
            </button>
            <Link to={`/updateParticipant/${card.id}`}>UPDATE</Link>
            <hr />
          </div>
          ))
         )
    }

    function getDropDown(title, sortType, ITEMS) {
      return (
        <DropdownButton
          id="dropdown-basic-button"
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

  try {
    return (
      <div>
        <center>
          <h3>
            <FormattedMessage {...messages.header} />
          </h3>
          <div className="sortBtn">
          {getDropDown('Sort by birthdate', 'dob'   , ORDER)}
          {getDropDown('Sort/Filter by status' , 'status' , STATUS)}
          {getDropDown('Sort/Filter by origin' , 'origin' , ORIGIN)}
          </div>
          {sortedParticipent}
        </center>
      </div>
    );
  } catch {
    return <h3>There is an error!!!!</h3>;
  }
}

// ParticipantDashboard.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  // participants: makeSelectParticipants(),
});

function mapDispatchToProps(dispatch) {
  return {
    deleteParticipant: participant => dispatch(delParticipant(participant)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ParticipantDashboard);
