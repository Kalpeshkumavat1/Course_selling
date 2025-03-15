import { useRef,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginContext } from "./App";
function Login({onClose}){
    const email=useRef(null);
    const password=useRef(null);
    const [emailerr ,setEmailerr]=useState(false);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [res,setRes]=useState(false);
    const navigate=useNavigate();
    // console.log(email.current.value);
    function validation(emailvalue,Password){
        const data={};
        if(emailPattern.test(emailvalue)){
            data.email=emailvalue;
            data.password=Password;
        }
        else{
            setEmailerr(true)
            return null;
        }
        return data;
    }
    async function sendingData(e){
        e.preventDefault();
        const emailvalue=email.current.value;
        const passwordvalue=password.current.value;
        const data=validation(emailvalue,passwordvalue);
        if(!emailerr){
            try{
                const response=await axios.post("http://localhost:5000/user/signin",data,{
                    headers:{
                        "Content-Type":"application/json",
                    },
                    withCredentials: true
                });
                if(response.data.message=="you are signin!"){
                    setTimeout(()=>{
                        alert(response.data.message)
                        navigate(`/${response.data.firstname}`);  // Redirect user after successful signup
                    },1000)
                    // setRes(true);
                    setRes(true);
                }
                // if(response.status==201){
                //     const { login,setLogin, setUsername } = useContext(loginContext);
                
                //     // Update the context values
                //     setLogin(true);
                //     setUsername(response.data.firstname);
                //     console.log(login);

                // }
                else{
                    setTimeout(()=>{
                        alert("please enter valid email or password")
                        // navigate("/");  // Redirect user after successful signup
                    },1000)
                }
                console.log("response:",response.data.firstname,res);
                console.log("response:",response.data.message,res);
            }
            catch(error){
                setRes(false);
                setTimeout(()=>{
                    alert("please enter valid email or password")
                    // navigate("/");  // Redirect user after successful signup
                },100)
                console.log("some error is occuring durint the authication");
            }
        }
    }
    return (
        <>
            <form onSubmit={sendingData}>
                <div className="login">
                    <div className="mainform">
                        <div style={{textAlign:"center"}}>
                            <h2>Login
                                </h2>
                        </div>
                        <div className="form">
                            <label htmlFor="">Please Enter Your Email: </label>
                            <input type="text" ref={email} style={{marginLeft:20}}/>
                        </div>
                        <p>{emailerr?"please enter the valid the email":""}</p>
                        <div className="form">
                            <label htmlFor="" style={{paddingLeft:12.5}}>Please Enter Your Password: </label>
                            <input type="password" ref={password} style={{marginRight:10}}/>
                        </div>
                        <div className="form">
                        <button type="submit">Submit</button>
                            <Link to="/user/signup"><button >Signup</button></Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Login;