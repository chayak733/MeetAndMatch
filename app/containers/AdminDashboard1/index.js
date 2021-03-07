/**
 *
 * AdminDashboard
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import MatchmakerCard from './MatchmakerCard';
import { approveMatchmaker, delMatchmaker } from '../App/actions';
import './style.scss';

export function AdminDashboard(props) {
  useInjectReducer({ key: 'adminDashboard', reducer });
  useInjectSaga({ key: 'adminDashboard', saga });

  const matchmakersArr = props.matchmakers && props.matchmakers.map(card => (
    <div className="MatchmakerCard">
      <MatchmakerCard
        key={card.id}
        userName={card.userName}
        email={card.mail}
        phone={card.phone}
      />
      <button type="button" onClick={() => props.approveMM(card)}>
        ACCEPT
      </button>
      <button type="button" onClick={() => props.deleteMM(card)}>
        IGNORE
      </button>
    </div>
  ))

  return (
    <div>
      <h3><FormattedMessage {...messages.header} /></h3>
      {matchmakersArr}
    </div>
  );
}

AdminDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  approveMM: PropTypes.func,
  deleteMM: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    approveMM: mm => dispatch(approveMatchmaker(mm)),
    deleteMM: mm => dispatch(delMatchmaker(mm)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AdminDashboard);
