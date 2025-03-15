import { useParams,Link } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";
function MyCourses() {
    const { username } = useParams();
    const [courseId, setCourseId] = useState([]);
    const [courseDetail, setCourseDetails] = useState([])
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);
    useEffect(() => {
        const fetching = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/user/purchases/${username}`, {
                    withCredentials: true
                });
                if (response.data) {
                    setCourseId(response.data.courses);
                }
                else {
                    setErr(true);
                }
            }
            catch (error) {
                setErr(true)
            }
            finally {
                setLoading(false);
            }
        }
        fetching();
    }, [username])

    useEffect(() => {
        const fetching = async () => {
            try {
                setLoading(true);
                if (courseId.length > 0) {
                    Promise.all(
                        courseId.map((course_Id) =>
                            axios.get(`http://localhost:5000/course/preview/${course_Id}`, {
                                withCredentials: true
                            })
                                .then((res) => res.data)
                                .catch(() => null)
                        )
                    )
                        .then((data) => setCourseDetails(data.filter((course) => course !== null)))
                }

            }
            catch {
                setErr(true)
            }
            finally {
                setLoading(false)
            }
        }
        fetching();
    }, [courseId])
    return (
        <>
            <div>
                {err ? <div>Error...</div> : loading ? <div>Loading...</div> :
                    courseDetail.length > 0 ?
                        <div className="courseContainer">
                            {courseDetail.map((course,index) => (
                                <div key={index} className="usercourse">
                                    <Link to={`course/${courseId[index]}`} style={{textDecoration:"none"}}>
                                        <div className="course">
                                            <div>
                                                <img src={course.imageUrl} alt="" />
                                            </div>
                                            <div>
                                                <div className="course_detail">
                                                    <div>
                                                        <h2>{course.title}</h2>
                                                    </div>
                                                    <div>
                                                        <p>{course.level}</p>
                                                    </div>
                                                    <div>
                                                        <p>{course.price}$</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        :
                        (
                            <p>No courses available</p>
                        )
                }
            </div>
        </>
    )
}
export default MyCourses;