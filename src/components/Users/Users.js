import React from "react";

import User from './User';

function Users(){
    return (
        <div className="users">
            <User url="catalog" id="user1" name="User A" letter="A"/>
            <User url="catalog" id="user2" name="User B" letter="B"/>
            <User url="catalog" id="user3" name="User C" letter="C"/>
            <User url="catalog" id="user4" name="User D" letter="D"/>
        </div>
    )
}

export default Users;