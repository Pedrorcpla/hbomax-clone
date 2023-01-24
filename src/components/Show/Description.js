import React from 'react';

const Description = (props) => {
    return (
        <div className="description">
            <div className="title">Description</div>
            <p>{props.overview}</p>
        </div>
    );
};

export default Description;