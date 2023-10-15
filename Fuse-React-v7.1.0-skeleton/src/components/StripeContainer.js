import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51Kj2puGInNuzAevcg4jMVAYDKl80p8rNW7JUR3ViLmKnnxjDSQrJzHGvv15zHBCB0LvDVWEjPSNC8GSKQSeF3HHP00GROcWlsw"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	
	return (  
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}