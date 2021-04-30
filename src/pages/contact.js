import React from "react"
import Default from "../layouts/default.js"
import Container from "../components/container12.js"
import Form from "../components/contactform.js"
import { Helmet } from "react-helmet"

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Ask Us Anything - Disc Hierarchy</title>
                <meta name="description" value="Always wanted to rate your favorite albums? You've found the right place!" />
            </Helmet>

            <Default>
                <Container>
                    <h2 className="contacth2"><b>CelestialCulture</b> - ABOUT US</h2>
                </Container>
                <div className="container">
                    <div className="row contactAlign">
                        <div className="col-lg-4 col-sm-12">
                            <img className="contactImg" src="https://static.dezeen.com/uploads/2021/01/tower-c-zaha-hadid-architects-shenzhen-architecture-supertall-skyscrapers_dezeen_2364_sq2.jpg" alt="Disc Hierarchy HQ" />
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <p className="contactDesc">Welcome to our site! At <b>CelestialCulture</b>, we're a fast-growing software company looking to provide users with the most entertaining content on the web. We have developed many interactive tech sites in recent years, from writing video game reviews to generating movie randomizers and even sharing/collaborating personal songs with the rest of the world! Here at <b>CelestialCulture</b>, we want our users to feel at home. If you have any questions, we'd be happy to hear from you. Please let us know down below.</p>
                        </div>
                    </div>
                </div>

                <Container>
                    <h3 className="contacth3">Post your questions OR recommendations here:</h3>
                </Container>

                <Container>
                    <Form></Form>
                </Container>
            </Default>
        </>
    )
}