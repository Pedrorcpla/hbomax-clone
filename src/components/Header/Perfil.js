import React from "react";

const Perfil = (props) => {

    if(props.actived === false){
        return (
            <div className="perfilHide">
                <button><span>P</span></button>
            </div>
        )
    }
    else{
        return (
            <div className="perfil">
                <button><span>P</span></button>
            </div>
        )
    }
}

export default Perfil;