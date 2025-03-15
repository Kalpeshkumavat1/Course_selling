
function Rate({value}){
    const images=Array.from({length:value},(_,i)=>({
        id:i,
        url:`fillstar.png`,
    }))
    const images1=Array.from({length: Math.max(5 - value, 0)},(_,i)=>({
        id:i,
        url:`blank.png`,
    }))
    return (
        <>
        <div className="rate">
            {
                images.map((image,index)=>(
                    <img src={`${image.url}`} alt="" key={index} style={{width:30,height:30}}></img>
                ))
            }
            {
                images1.map((image,index)=>(
                    <img src={`${image.url}`} alt="" key={index} style={{width:30,height:30}}></img>
                ))
            }
        </div>
        </>
    )
}
export default Rate;