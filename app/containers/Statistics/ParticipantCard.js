import React from 'react';
import PropTypes from 'prop-types';
// import './style.scss';

export default function ParticipantCard(props) {
    //     const onClickHandler = resume => {
    //         const data = new FormData();
    //         data.append('file', resume);
    //     };

    // onClick={() => onClickHandler(props.resume)}

    return (
        <>
            <center>
                <br />
                <h3>{props.firstName} {props.lastName}</h3>
                <h5>
                    {props.dob}, {props.gender}, {props.status}, {props.origin}
                </h5>
                <h5>
                    {props.email}, {props.phone}
                </h5>
                <a href={props.resume} target="_blank">Resume</a>
            </center>
        </>
    );
}

ParticipantCard.propTypes = {
    name: PropTypes.string,
    dob: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    resume: PropTypes.string,
};
