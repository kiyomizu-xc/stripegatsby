import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const btn = {
    fontSize: "13px",
    textAlign: "center",
    color: "#000",
    padding: "12px 60px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
    backgroundColor: "rgb(255, 178, 56)",
    borderRadius: "6px",
    letterSpacing: "1.5px",
    marginTop: "50%",
}

const stripePromise = loadStripe("pk_test_51H0vZ3HbNZpVMgsbnAlvWKcovWbiEZCV9BAvmvkINcmqqArckexCCSlCI8tDFsQLVe8A18seJMOPj1ycvm2GEWZ000Nymoq8bq")

const btnclick = async event => {
    event.preventDefault()
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: "price_1H0w6WHbNZpVMgsbI2TMUssy", quantity: 1 }],
        mode: "payment",
        successUrl: `http://localhost:8000/page-2/`,
        cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
        console.warn("Error:", error)
    }
}

const tmp = () => {
    return (
        <button style={btn} onClick={btnclick}>
            Click and buy
        </button>
    )
}

export default tmp
