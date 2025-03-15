function Course({title,img}){
    return(
        <div className="coursebox">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <button>
                Buy Now!
            </button>
        </div>
    )
}
export default Course;