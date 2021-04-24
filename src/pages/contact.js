import React from "react"
import Default from "../layouts/default.js"
import Container from "../components/container12.js"
import Form from "../components/contactform.js"

export default function Contact() {
    return (
        <Default>
            <Container>
                <h2>ABOUT US</h2>
            </Container>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src="https://via.placeholder.com/350" alt="DH Headquarters" />
                    </div>
                    <div className="col-8">
                        <p className="contactDesc">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>

            <Container>
                <h3>Post your questions OR recommendations here:</h3>
            </Container>

            <Container>
                <Form></Form>
            </Container>
        </Default>
    )
}