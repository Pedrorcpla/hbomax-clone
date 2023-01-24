import React from 'react';

const OptionsUser = () => {
    return (
        <>
            <div className="options">
                <button className="option" id="adult"><span>+</span> ADULTO</button>
                <button className="option" id="kid"><span>+</span> CRIANÇA</button>
            </div>

            <div className="optionPerfil">
                <button className="gerenciar">GERENCIAR PERFIS</button>
            </div>
        </>
    )
}

export default OptionsUser;