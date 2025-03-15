import { useEffect, useState } from "react";

function AutoScrollImages(){
    const [img,setImg]=useState(0);
    useEffect(()=>{
        const c=setInterval(()=>{

            setImg(c=>(c+1)%4)
        },3000)
        return ()=>clearInterval(c);
    },[])
    return (
        <>
            <div>
                <img src={"/"+img+".jpg"} style={{width:1000 ,height:480}} alt="" />
            </div>
            <div className="dots">
                <button onClick={()=>setImg(0)}>&bull;</button>
                <button onClick={()=>setImg(1)}>&bull;</button>
                <button onClick={()=>setImg(2)}>&bull;</button>
                <button onClick={()=>setImg(3)}>&bull;</button>
            </div>
        </>
    )
}
export default AutoScrollImages;