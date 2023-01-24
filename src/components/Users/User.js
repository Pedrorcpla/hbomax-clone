import React from "react";

function User(props){
    return (
        <div className="user">
            <a href={props.url} id={props.is}>{props.letter}</a>
            <p>{props.name}</p>
        </div>
    )
}

export default User;