
function Course_details({ course }) {
    return (
        <>
            <div style={{ backgroundColor: "#060c1a" }}>
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
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Course_details;