import Review from "./Review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNav } from "./Context/Navcontext";
function Main3(){
    const {reviewref,courseref,faqsref,ScrollTo}=useNav();
    const settings = {
        dots: true,              // Show navigation dots
        infinite: true,          // Infinite looping
        speed: 500,              // Transition speed
        slidesToShow: 3,         // Show 3 slides at a time
        slidesToScroll: 1,       // Scroll one at a time
        autoplay: true,          // Auto slide
        autoplaySpeed: 2000,     // Time interval for autoplay
    };
    const Reviews=[
        () => <div className="bg-red-500 p-10 text-white"><Review name={"kalpesh kumavat"} reviewnumber={5} desc={"This product exceeded my expectations in every way. The quality is top-notch, the user experience is seamless, and the customer support is incredibly responsive. Highly recommend!"}></Review></div>,
        () => <div className="bg-red-500 p-10 text-white"><Review name={"Nishant patel"} reviewnumber={4} desc={"The product works well and does what it promises. There were a couple of small issues, but nothing major. Would definitely recommend."}></Review></div>,
        () => <div className="bg-red-500 p-10 text-white"><Review name={"Remin dobariya"} reviewnumber={5} desc={"I was skeptical at first, but after using it for a few weeks, I can confidently say this is one of the best investments I’ve made. Worth every penny!"}></Review></div>,
        () => <div className="bg-red-500 p-10 text-white"><Review name={"Harsh sanagani"} reviewnumber={3} desc={"Not bad, but not great either. There are better alternatives in the market for the same price. Usable, but I wouldn’t buy it again."}></Review></div>,
        () => <div className="bg-red-500 p-10 text-white"><Review name={"Umang manavar"} reviewnumber={5}desc="Everything about this is great, from design to functionality. I just wish there were a few more customization options, but overall, it’s fantastic."></Review></div>,
        () => <div className="bg-red-500 p-10 text-white"><Review name={"Dharmil shah"} reviewnumber={1} desc="Absolutely the worst! Poor quality, doesn’t work as expected, and customer service was unhelpful. Stay away from this!"></Review></div>,
        () => <div className="bg-red-500 p-10 text-white"><Review name={"Tarj Baxi"} reviewnumber={4} desc={"Solid performance and good value for money. However, the packaging could have been better, and delivery was slightly delayed."}></Review></div>,
        () => <div className="bg-red-500 p-10 text-white"><Review name={"Nishit kapadia"} reviewnumber={2} desc={"Solid performance and good value for money. However, the packaging could have been better, and delivery was slightly delayed."}></Review></div>
    ]
    return (
        <>  
        <div className="main3" ref={reviewref}>
            <div className="main3h1">
                <h1>
                    Our Reviews on Courses
                </h1>
            </div>
            <div className="carousel">
                <div className="w-[80%] mx-w-full mt-10 overflow-hidden">
                    <Slider {...settings} className="gap-4">
                        {
                            Reviews.map((Component,index)=>(
                                <div key={index} className="px-2">
                                    <Component />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>

        </>
    )
}
export default Main3;