import React from "react";

const Carousel = (props) => {
    return (
        <div className="welcome" style={{backgroundImage: `url(http://image.tmdb.org/t/p/w500${props.img})`}}>
            <div className="datas">
                <h2>{props.name}{props.title}</h2>
                <p className="new">NOVO</p>
                <p>{props.tagline}</p>
                <div className="options">
                    <button className="more">+ ADICIONAR</button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;