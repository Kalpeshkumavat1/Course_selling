import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function PaymentForm() {
    const { id } = useParams();
    const { username } = useParams();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [clientsecreat, setClientsecreat] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetching = async () => {
            try {
                const response = await axios.get(`/course/preview/payment/${id}`);
                console.log(response)
                if (response.data) {
                    const data1 = await axios.post(`/course/preview/purchase`, response.data, { "Content-Type": "application/json" });
                    if (data1.data.clientSecret) {
                        setClientsecreat(data1.data.clientSecret)
                    }
                    else {
                        setError("Could not get payment information")
                    }
                }
                setLoading(false);
            }
            catch (error) {
                console.error("Payment setup error:", error);
                setError("Payment setup failed. Please try again.");
                setLoading(false);
            }
        }
        fetching();
    }, [id])
    const handlesubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements || !clientsecreat) return;
        const result = await stripe.confirmCardPayment(clientsecreat, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        })
        if (result.error) {
            console.log(result.error.message);
            alert(result.error.message)
        }
        else {
            if (result.paymentIntent.status === "succeeded") {
                alert("successfully!");
                const data={username:username,id:id};
                const response=await axios.post("/course/purchase",data,
                    { "Content-Type": "application/json" })
                console.log("Payment successful!");
                navigate(`/${username}`)
            }
        }
    }
    if (loading) return <div>Loading payment details...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <>
            <div className="payment">

                <div className="payment-form-container">
                    <h2>Complete Your Purchase</h2>
                    <form onSubmit={handlesubmit}>
                        <div className="card-element-container">
                            <CardElement />
                        </div>
                        <button
                            type="submit"
                            className="payment-button"
                            disabled={!stripe || !clientsecreat}
                        >
                            Pay Now
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default PaymentForm;
