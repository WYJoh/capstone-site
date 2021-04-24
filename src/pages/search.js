import * as React from "react"
import { Link } from "gatsby"
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";


export default function Search() {
    return (
        <>
            <Link to="/" style={{ textDecoration: 'none'}}>
                <h4 className="returnHome">Return to Home</h4>
            </Link>

            <div className="bodySearch">
                <input type="search" className="barSearch" placeholder="Search for Artist or Album..." />
                <button className="searchButton">
                    <FaChevronRight />
                </button>
            </div>
        </>
    )
}