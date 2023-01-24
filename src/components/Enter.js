import React from "react";

import Users from "./Users/Users";
import OptionsUser from "./Users/OptionsUser";

const Enter = () =>{
    return (
        <div className="content">
            <div className="title">
                <p>Quem está assistindo?</p>
            </div>

            <Users />
            <OptionsUser />
        </div>
    )
}

export default Enter;