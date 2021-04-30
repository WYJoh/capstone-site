import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default function Thanks() {
    return (
        <>
            <Helmet>
                <title>Thanks for your Feedback - Disc Hierarchy</title>
                <meta name="description" value="Always wanted to rate your favorite albums? You've found the right place!" />
            </Helmet>

            <Link to="/home" style={{ textDecoration: 'none'}}>
                <h4 className="returnHome">Return to Home</h4>
            </Link>

            <h1 className="thanksh1"><b>THANK YOU</b></h1>
            <p className="thanksp">We have received your feedback and will take it into consideration.</p>
        </>
    )
}