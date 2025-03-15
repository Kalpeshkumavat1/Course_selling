import Rate from "./Rate"
function Review({name,reviewnumber,desc}){
    
    return (
        <>
        <div className="review">
            <div>
                <h2>{name}</h2>
            </div>
            <div className="reviewnumber">
                <Rate value={reviewnumber}></Rate>
                <p>{desc}</p>
            </div>
        </div>
        </>
    )
}
export default Review;