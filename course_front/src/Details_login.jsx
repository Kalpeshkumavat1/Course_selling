import { useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";
function Details_login(){
    const {id}=useParams();
    const {data,loading,err}=useFetch(`/course/preview/${id}`)
    return (
        <>
        {
            err?<div>Some Error is Occuring!</div>:
            loading?<div>Loading...</div>:
            <div className="course_details">
                <div className="course_details-top">
                    <div>
                        <img src={`${data.imageUrl}`} alt="" />
                    </div>
                    <div style={{paddingBottom:"10px"}}>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <p>{data.duration}</p>
                        <p>{data.level}</p>
                        <p>{data.price}$</p>
                        <Link to="./payment"><button className="buy">Buy Now</button></Link>
                    </div>
                </div>
                <div className="course_details-bottom">
                    <h3 style={{padding:"30px 128px"}}>Topics:</h3>
                    <div className="course_details-topics">
                        {data.topics.map((topic,index)=>(
                            <div key={index} style={{backgroundColor:"#898888",padding:"12.5px",borderRadius:"20px"}}>{topic}</div>
                        ))}
                    </div>
                    <h3 style={{padding:"30px 128px"}}>Syllabus:</h3>
                    <div className="course_details-syllabus">
                        {data.syllabus.map((topic,index)=>(
                            <div key={index} className="course_details-syllabus-item"><div>{`Module${index}: `+topic}</div><button>&#x25BC;</button></div>
                        ))}
                    </div>
                </div>
            </div>
        }
        </>
    )
}
export default Details_login;
