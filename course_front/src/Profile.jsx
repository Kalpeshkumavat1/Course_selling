import LogOut from "./Logout";
import UserProfile from "./UserProfile";
import MyCourses from "./MyCourses";
import { useState } from "react";
function Profile(){
    const [content,setContent]=useState(1);
    return (
        <>
        <div className="profile">
            <div className="profile-button">
                <button onClick={()=>setContent(1)}><p>Profile</p></button>
                <div className="border"></div>
                <button onClick={()=>setContent(2)}><p>MyCourses</p></button>
                <div className="border"></div>
                <button onClick={()=>setContent(3)}><p>LogOut</p></button>
                <div className="border"></div>
            </div>
            <div className="profile-component">
                {
                    content==1?<UserProfile></UserProfile>:content==2?<MyCourses></MyCourses>:<LogOut></LogOut>
                }
            </div>
        </div>
        </>
    )
}
export default Profile;