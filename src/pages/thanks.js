import React from "react"
import { Link } from "gatsby"

export default function Thanks() {
    return (
        <>
            <Link to="/home" style={{ textDecoration: 'none'}}>
                <h4 className="returnHome">Return to Home</h4>
            </Link>

            <h1 className="thanksh1"><b>THANK YOU</b></h1>
            <p className="thanksp">We have received your feedback and will take it into consideration.</p>
        </>
    )
}