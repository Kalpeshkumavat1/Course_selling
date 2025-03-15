import { useContext, useState,useEffect } from "react";
import useFetch from "./hooks/useFetch";
import Main1 from "./Main1"
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import { loginContext } from "./App";
import { useNavigate } from "react-router-dom";
function Home(){
    const {login,uname}=useContext(loginContext);
    const navigate=useNavigate();
    console.log(login+" "+uname)
    useEffect(() => {
        if (login) {
            navigate(`/${uname}`, { replace: true });
        }
    }, [login, uname, navigate]); 
    return (
        <>  
            {!login ? (
                <div>
                    <Main1 />
                    <Main2 />
                    <Main3 />
                    <Main4 />
                </div>
            ) : null} {/* If login is true, don't render anything (useEffect will handle navigation) */}
        </>
    )
}
export default Home;