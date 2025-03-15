import Questions from "./Questions";
import { useNav } from "./Context/Navcontext";
import { useState } from "react";
function Main4(){
    const {reviewref,courseref,faqsref,ScrollTo}=useNav();
    const [ans,setAnswer]=useState(null);
    function handleindex(index){
        setAnswer(index==ans?null:index)
    }
    return (
        <>
        <div className="main4" ref={faqsref}>
            <div className="main3h1">
                <h1>FAQS</h1>
            </div>
            <div>
                <Questions isactive={ans==0} setAnswer={setAnswer} index={0} title={"Q. How long do I have access to the course?"} answer={"Once purchased, you get lifetime access to the course materials, including any future updates."}></Questions>
                <Questions isactive={ans==1} setAnswer={setAnswer} index={1} title={"Q. Will I receive a certificate after completing the course?"} answer={"Yes, you will get a verified certificate upon course completion."}></Questions>
                <Questions isactive={ans==2} setAnswer={setAnswer} index={2} title={"Q.  Is there a live session with instructors?"} answer={"Some courses include live Q&A sessions. Check the course details for availability."}></Questions>
                <Questions isactive={ans==3} setAnswer={setAnswer} index={3} title={"Q. Can I ask questions to the instructor?"} answer={"Yes! You can ask questions in the course discussion forum or during live Q&A sessions."}></Questions>
                <Questions isactive={ans==4} setAnswer={setAnswer} index={4} title={"Q. What payment methods do you accept?"} answer={"We accept payments via credit/debit cards, PayPal, UPI, and net banking."}></Questions>
                <Questions isactive={ans==5} setAnswer={setAnswer} index={5} title={"Q. Is there an EMI option available?"} answer={"Yes, we offer EMI options for selected courses. You can check the availability during checkout."}></Questions>
                <Questions isactive={ans==6} setAnswer={setAnswer} index={6} title={"Q.  Is there a discount for students or bulk purchases?"} answer={"Yes! We offer discounts for students and corporate/bulk purchases. Contact our support team for details."}></Questions>
            </div>
        </div>  
        </>
    )
}
export default Main4;