import React from "react"

export default function Form() {
    return (
        <>
            <div className="formStyle">
                <form name="contact" method="POST" data-netlify="true" action="/thanks">

                <input type="hidden" name="form-name" value="contact" />
                    <div className="row">
                        <div className="col-12">
                            <label for="firstname">First Name
                                <input type="text" id="firstname" name="firstname" placeholder="First" required className="form-control" />
                            </label>

                            <label for="lastname">Last Name
                                <input type="text" id="lastname" name="lastname" placeholder="Last" required className="form-control" />
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <label for="email">Email
                                <input type="text" id="email" name="email" placeholder="email@contact.net" required className="form-control" />
                            </label>

                            <label for="phone">Phone
                                <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890" required className="form-control" />
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <label for="message">Your Message
                                <textarea name="message" id="message" placeholder="Message..." cols="49" rows="5" className="form-control" required></textarea>
                            </label>    
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="contactButton">Contact Us</button>
                    </div>
                </form>
            </div>
        </>
    )
}