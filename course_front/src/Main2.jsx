import Course from "./Course";
import { Link } from "react-router-dom";
import { useNav } from "./Context/Navcontext";
import { useContext } from "react";
import { loginContext } from "./App";
function Main2(){
    const {reviewref,courseref,faqsref,ScrollTo}=useNav();
    // const {login,uname}=useContext(loginContext)
    return (
        <>
        <div className="courses" ref={courseref}>
            <div>
                <h1>Our Popular Courses</h1>
            </div>
            <div className="coursemainbox">
                <Course title="Web Design" img={"/webdesign1.jpg"}></Course>
                <Course title="Web Devopment" img={"/webdevelopment1.jpg"}></Course>
                <Course title="DevOps" img={"/devops.png"}></Course>
                <Course title="Cloud Devops" img={"/clouddevops.png"}></Course>
                <Course title="API Integration" img={"/API.jpg"}></Course>
            </div>
            <div className="main2button">
                <button><Link style={{color:"white",textDecoration:"none"}} to="course/preview">View All Course</Link></button>
            </div>
        </div>
        </>
    )
}
export default Main2;