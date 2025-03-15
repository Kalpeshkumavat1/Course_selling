import { createContext, useContext } from "react";
import useFetchPost from "./hooks/useFetchpost";
import { useParams } from "react-router-dom";
import { loginContext } from "./App";
import { useEffect } from "react";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
function User(){
    const {username}=useParams();
    const {login,setLogin,setUsername}=useContext(loginContext);
    const {data,loading,err}=useFetchPost(`/user/${username}`)
    useEffect(() => {
        if (err) {
            setLogin(false);
        } else if (data) {
            setLogin(true);
            setUsername(username)
        }
    }, [err, data, setLogin,setUsername]);
    return (
        <>
        {
            err?<div>Error....</div>:loading?<div>Loading...</div>:
            <div>
                <Main1></Main1>
                <Main2></Main2>
                <Main3></Main3>
                <Main4></Main4>
            </div>
        }
        </>
    )
}
export default User;
