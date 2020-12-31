/**
 *
 * ParticipantCard
 *
 */

import React, { memo } from 'react';
import "./style.scss";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ParticipantCard(props) {
  return (
    <div className="participantCard">
      <center>
        <br />
        <h3>{props.name}</h3>
        <h5>
          {props.dob}, {props.gender}, {props.origin}
        </h5>
        <h5>
          {props.email}, {props.phone}
        </h5>
        <a href={props.resume}>Resume</a>
      </center>
      <hr />
    </div>
  );
}

ParticipantCard.propTypes = {};

export default memo(ParticipantCard);
