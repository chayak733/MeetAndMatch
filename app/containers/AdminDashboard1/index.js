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
import { getUnapprovedMM, approveMatchmaker, delMatchmaker } from '../App/actions';

export function AdminDashboard(props) {
  useInjectReducer({ key: 'adminDashboard', reducer });
  useInjectSaga({ key: 'adminDashboard', saga });

  const Accept = (card) => {
    props.approveMM(card);
  }

  const Ignore = (card) => {
    props.deleteMM(card);
  }

  const matchmakersArr = props.matchmakers && props.matchmakers.map(card => (
    <div className="MatchmakerCard">
      <MatchmakerCard
        key={card.id}
        userName={card.userName}
        email={card.mail}
        phone={card.phone}
      />
      <button type="button" onClick={() => Accept(card)}>
        ACCEPT
      </button>
      <button type="button" onClick={() => Ignore(card)}>
        IGNORE
      </button>
      <hr />
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
  // dispatch: PropTypes.func.isRequired,
  // matchmakers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool, PropTypes.object, PropTypes.func]),
  // user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    getMatchmakers: () => dispatch(getUnapprovedMM()),
    approveMM: mm => dispatch(approveMatchmaker(mm)),
    deleteMM: mm => dispatch(delMatchmaker(mm)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AdminDashboard);
