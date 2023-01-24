import React from "react";
import batmanLogo from "../../_assets/img/batmanlogo.png";

const Carousel = () => {
    return (
        <div className="welcome">
            <div className="datas">
                <img src={ batmanLogo } alt="Batman Logo" />
                <p className="new">NOVO FILME</p>
                <p>A vingança chegou em Gotham. Chegou no HBO Max.</p>
                <div className="options">
                    {/* <a href="/home" className="play"><i className="fas fa-play"></i></a> */}
                    <button className="more">SAIBA MAIS</button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;