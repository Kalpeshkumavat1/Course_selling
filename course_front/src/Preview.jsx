import axios from "axios"
import useFetch from "./hooks/useFetch"
import Course_details from "./Course_details";
import { Link } from "react-router-dom";
function Preview(){
    const {data = {},loading,err}=useFetch("/course/preview");
    console.log(data);
    return (
        <>
        <div className="Preview">
            {
                err?<div>Somthing error is occuring</div>:loading?<div>Loading...</div>:
                <div className="course_row">
                    {
                        data.courses.map((course,index)=>(
                            <div key={index}>
                                <Link to={`${index}`}style={{textDecoration:"none"}}><Course_details course={course}></Course_details></Link>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
        </>
    )
}
export default Preview;
