import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'

const Profile = () => {

    const {user} = useContext(UserContext);

    console.log(user);
    

    if(!user) return <div>PLease Login</div>

    return <div>Welcome {user} </div>
 
}

export default Profile
