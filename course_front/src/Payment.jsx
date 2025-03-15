import { useState,useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
const stripePromise=loadStripe("pk_test_51R1S6CFYhRWL2xPtE47IYzUXJfFFPs8iNxckg7ABLAn7m1ucfjj5i6pHHkAqDPASIfTaS5a6Owcl67Egu5S6O4sw00wPBGEN9P")

function Payment(){
    return (
        <>
        <div className="payment-container">
            <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements>
        </div>
        </>
    )
}
export default Payment;