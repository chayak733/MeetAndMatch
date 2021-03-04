import React from 'react';
import PropTypes from 'prop-types';

export default function MatchmakerCard(props) {
    return (
        <>
            <center>
                <br />
                <h3>{props.userName}</h3>
                <h5>
                    {props.email}, {props.phone}
                </h5>
            </center>
        </>
    );
}

MatchmakerCard.propTypes = {
    userName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
};