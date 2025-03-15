import { useRef, useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNav } from "./Context/Navcontext";
import { loginContext } from "./App";
import { useContext } from "react";
function Navbar() {
    const { reviewref, courseref, faqsref, ScrollTo } = useNav();
    const { login,uname } = useContext(loginContext);
    const { username } = useParams();
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            {
                login ? <div className="nav">
                    <img src="/kalpesh.jpg" alt="" />
                    <button id="navbutton"><Link to={`/${uname}`} style={{ color: "white", textDecoration: "none" }}>Home</Link></button>
                    <button id="navbutton" onClick={() => { ScrollTo(courseref) }}><Link to={`/${uname}`} style={{ color: "white", textDecoration: "none" }}>Courses </Link></button>
                    <button id="navbutton" onClick={() => { ScrollTo(reviewref) }}><Link to={`/${uname}`} style={{ color: "white", textDecoration: "none" }}>Reviews </Link></button>
                    <button id="navbutton" onClick={() => { ScrollTo(faqsref) }}><Link to={`/${uname}`} style={{ color: "white", textDecoration: "none" }}>FAQS </Link></button>
                    <div className="profile-container">
                        <Link to={`/${username}/profile`} style={{textDecoration:"none"}}><button className="profile-name">{username.charAt(0).toUpperCase()}</button></Link>
                    </div>
                </div> :
                    <div className="nav">
                        <img src="/kalpesh.jpg" alt="" />
                        <button id="navbutton"><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></button>
                        <button id="navbutton" onClick={() => { ScrollTo(courseref) }}><Link to="/#course" style={{ color: "white", textDecoration: "none" }}>Courses </Link></button>
                        <button id="navbutton" onClick={() => { ScrollTo(reviewref) }}><Link to="/#review" style={{ color: "white", textDecoration: "none" }}>Reviews </Link></button>
                        <button id="navbutton" onClick={() => { ScrollTo(faqsref) }}><Link to="/#FAQS" style={{ color: "white", textDecoration: "none" }}>FAQS </Link></button>
                        <Link to='/user/signin'><button id="login">Login</button></Link>
                    </div>
            }
        </>
    )
}
export default Navbar;