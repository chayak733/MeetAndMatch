import React from 'react';
import PropTypes from 'prop-types';
// import './style.scss';

export default function ParticipantCard(props) {
    //     const onClickHandler = resume => {
    //         const data = new FormData();
    //         data.append('file', resume);
    //     };

    // onClick={() => onClickHandler(props.resume)}

    const convertStatus = status => {
        switch (status) {
            case 1:
                return 'single';
            case 2:
                return 'divorced';
            case 3:
                return 'widow/er';
            default:
                return '';
        }
    }

    return (
        <>
            <center>
                <br />
                <h3>{props.name}</h3>
                <h5>
                    {props.dob}, {props.gender}, {convertStatus(props.status)}, {props.origin}
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
