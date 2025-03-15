import { useState } from "react"

function Questions({isactive,setAnswer,index,title,answer}){
    return (
        <>
        <div className="faqs">
            <div className="question">
                <h3>{title}</h3>
                <button onClick={()=>{setAnswer(index)}}>+</button>
            </div>
            <div className={`${isactive ? "active":"inactive"}`}>
                {answer}
            </div>
        </div>
        </>
    )
}
export default Questions;