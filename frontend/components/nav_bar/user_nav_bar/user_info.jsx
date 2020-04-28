import React from 'react';

const UserInfo = ({currentUser,logout}) => (
    <div>
        <h3>{currentUser.username}</h3>
        <p>{currentUser.email}</p>
    </div>
)

export default UserInfo;