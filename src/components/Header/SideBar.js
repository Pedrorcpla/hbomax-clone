import React, {useState, useEffect} from 'react';

const SideBar = (props) => {
    const [close, setClose] = useState(null)

    useEffect(() => {
        setClose(props.open)
    }, [props])

    return (
        <div className="sideBar" style={{display: close}}>
            <div className="top">
                <button onClick={()=>setClose('none')}>X</button>
            </div>
            <div className="body">
                <a href="/catalog">Início</a>
                <a href="https://www.linkedin.com/in/pedrorcpla/">LinkedIn</a>
                <a href="https://github.com/Pedrorcpla">GitHub</a>
            </div>
        </div>
    );
};

export default SideBar;