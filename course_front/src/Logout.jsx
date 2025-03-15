import { useContext } from "react";
import { loginContext } from "./App"
import useFetchPost from "./hooks/useFetchpost";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function LogOut(){
    const {login,setLogin}=useContext(loginContext);
    const navigate=useNavigate();
    const {data,loading,err}=useFetchPost("http://localhost:5000/user/logout");
    useEffect(() => {
        if (err) {
            setLogin(true);
        } else if (data) {
            setLogin(false);
        }
    }, [err, data, setLogin]);
    return <>
        {err?<div>Error!</div>:loading?<div>Loading...</div>:<div>{
        login==false?navigate('/'):""}
        </div>}
    </>
}
export default LogOut;