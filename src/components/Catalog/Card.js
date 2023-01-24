import React from 'react';

const Card = (props) => {
    return (
        <a href={`/show/${props.type}/${props.id}`} className="item">
            <div className="img">
                <img src={`http://image.tmdb.org/t/p/w500/${props.img}`} alt={`Poster de ${props.name}`} />
            </div>
            <div className="name">
                {props.name}{props.title}
            </div>
        </a>
    );
};

export default Card;