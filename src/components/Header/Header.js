import React from "react";

// import Menu from "./Menu";
import Logo from "./Logo";
import Perfil from "./Perfil";
// import SideBar from "./SideBar";

const Header = (props) => {
    // const [open, setOpen] = useState(null);
    
    // useEffect(() => {
    //     setOpen("none")
    // }, [])

    return (
        <>
            {/* <SideBar open={open}/> */}
            <header className="header">
                <div className="options">    
                    <button className="menu">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar1"></div>
                    </button>
                </div>
                <Logo />
                <Perfil actived={false} />
            </header>
        </>
    )
}

export default Header;