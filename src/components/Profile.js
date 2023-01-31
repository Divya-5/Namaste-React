import { useState } from "react";

const Profile = (props) => {
    const [count]=useState(0);
    const [count2] = useState(0);
    return (
        <>
        <h1>Profile components</h1>
        <h2>Name:{props.name}</h2>
        <h3>Count:{count}</h3>
        </>
    )
}

export default Profile;