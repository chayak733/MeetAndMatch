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
import { makeSelectUser, makeSelectMatchmakers } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import MatchmakerCard from './MatchmakerCard';
import { getUnapprovedMM, approveMatchmaker, delMatchmaker } from '../App/actions';

export function AdminDashboard(props) {
  useInjectReducer({ key: 'adminDashboard', reducer });
  useInjectSaga({ key: 'adminDashboard', saga });

  // useEffect(() => {
  //   if (props.matchmakers) props.getMatchmakers();
  // }, []);

  // const matchmakersArr = props.matchmakers && props.matchmakers.map(card => (
  //   <div className="MatchmakerCard">
  //     <MatchmakerCard
  //       key={card.id}
  //       userName={card.userName}
  //       email={card.email}
  //       phone={card.phone}
  //     />
  //     <button type="button" onClick={() => props.approveMM(card)}>
  //       ACCEPT
  //     </button>
  //     <button type="button" onClick={() => props.deleteMM(card)}>
  //       IGNORE
  //     </button>
  //     <hr />
  //   </div>
  // )
  // );

  // // const isAdmin = (props.user == 'admin@gmail.com');
  const isAdmin = true;

  return (
    (isAdmin &&
      <div>
        <FormattedMessage {...messages.header} />
        {/*matchmakersArr*/}
      </div>)
      (!isAdmin && <h4>You must be an administor to access this page</h4>)
  );
}

AdminDashboard.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // matchmakers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool, PropTypes.object, PropTypes.func]),
  // user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

const mapStateToProps = createStructuredSelector({
  // user: makeSelectUser(),
  // matchmakers: makeSelectMatchmakers(),
});

function mapDispatchToProps(dispatch) {
  return {
    getMatchmakers: () => dispatch(getUnapprovedMM()),
    approveMM: (mm) => dispatch(approveMatchmaker(mm)),
    deleteMM: (mm) => dispatch(delMatchmaker(mm)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AdminDashboard);
