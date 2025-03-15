import { useRef,useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
function Signup(){
    const email=useRef(null);
    const password=useRef(null);
    const firstname=useRef(null);
    const [emailerr ,setEmailerr]=useState(false);
    const [res,setRes]=useState(false);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const navigate=useNavigate();
    // console.log(email.current.value);
    function validation(emailvalue,Password,firstName){
        const data={};
        if(emailPattern.test(emailvalue)){
            data.email=emailvalue;
            data.password=Password;
            data.firstName=firstName;
            setEmailerr(false);
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
        const firstnamevalue=firstname.current.value;
        const data=validation(emailvalue,passwordvalue,firstnamevalue);
        // const [response,setResponse]=useState({});
        if(!data) return
        let response={};
        if(!emailerr){
            try{
                response=await axios.post("http://localhost:5000/user/signup",data,{
                    headers:{
                        "Content-Type":"application/json",
                    },
                });
                // if(response){
                //     setRes(true);
                // }
                console.log(response.status);
                if (response.status === 200) {
                    setTimeout(()=>{
                        alert(response.data.message)
                    },1000)
                    navigate("/user/signin");  // Redirect user after successful signup
                    setRes(true);
                }
                console.log("response:",response.data);
            }
            catch(error){
                setRes(false);
                setTimeout(() => {
                    // Check if error.response exists (for HTTP error responses)
                    if (error.response && error.response.data) {
                        alert(error.response.data.message || "Signup failed");
                    } else {
                        // For network errors or other issues where response isn't available
                        alert("An error occurred during authentication");
                    }
                }, 100);
                console.log("some error is occuring durint the authication");
            }
        }
    }
    return (
        <>
            <form onSubmit={sendingData}>
                <div className="login">
                    <div className="mainform" style={{height:600}}>
                        <div style={{textAlign:"center"}}>
                            <h2>Sign Up
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
                            <label htmlFor="" style={{paddingLeft:12.5}}>Please Enter Your UserName: </label>
                            <input type="text" ref={firstname} style={{marginRight:10}}/>
                        </div>
                        {/* <div className="form">
                            <label htmlFor="" style={{paddingLeft:12.5}}>Please Enter Your LastName: </label>
                            <input type="text" ref={lastname} style={{marginRight:10}}/>
                        </div> */}
                        <div className="form">
                            {/* <Link to={`${res?'/user/signin':'/user/signup'}`}><button type="submit">Submit</button></Link> */}
                            <button type="submit" >Submit</button>
                            <Link to="/user/signin"><button >Login</button></Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Signup;