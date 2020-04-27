import React from 'react';

const UserNav = ({ currentUser,logout }) => {
    const content = currentUser ? (
        <button>Sign In</button>
    ) : (
        <UserInfo logout={logout}/>
    )
}

export default UserNav;