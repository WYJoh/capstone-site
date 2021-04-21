import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js";
import 'bootstrap/dist/css/bootstrap.css';

export default function Default({children}) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}