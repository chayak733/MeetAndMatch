import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function MeetingCard(props) {
    return (
        <>
            <center>
                <br />
                <h3>{props.firstParticipant} with</h3>
                <h3>{props.secondParticipant}</h3>
                <h5>
                    {props.address}, {props.date}
                </h5>
            </center>
        </>
    );
}

MeetingCard.propTypes = {
    firstParticipant: PropTypes.number,
    secondParticipant: PropTypes.number,
    address: PropTypes.string,
    date: PropTypes.string,
};
