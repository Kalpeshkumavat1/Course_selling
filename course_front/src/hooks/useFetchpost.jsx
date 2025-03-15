import { useEffect, useState } from "react"
import axios from "axios";
function useFetchPost(url,payload=null){
    const [data,setData]=useState(null)
    const [err,setErr]=useState(false);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                setLoading(true);
                const response=await axios.post(url,payload, { 
                    withCredentials: true // This sends cookies with the request
                });
                console.log(response.data)
                setData(response.data)
                setLoading(false);
            }
            catch(error){
                setErr(true);
            }
            finally{
                setLoading(false)
            }
        }
        fetchData();
    },[url,payload])
    return {
        data,
        loading,
        err
    }
}
export default useFetchPost;