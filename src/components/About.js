import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile"
import Profile from "./ProfileClass";

const About = () => {
return (
    <div>
<h1>About us page</h1>
<p>This is the about us page </p>
{/* <Outlet /> */}
<ProfileFunctionalComponent name={"Divyanshi"}/>
        <Profile name={"DivyanshiClass"} />
    </div>
);
};

export default About;