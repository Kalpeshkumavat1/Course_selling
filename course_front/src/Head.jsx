import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function Head(){
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}
export default Head;