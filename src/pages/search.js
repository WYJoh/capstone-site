import * as React from "react"
import { Link } from "gatsby"

export default function Search() {
    return (
        <div className="searchPage">
            <Link to="/">
                <h4>Return to Home (arrow icon)</h4>
            </Link>

            <div className="bodySearch">
                <input type="search" className="barSearch" placeholder="Search for Artist or Album..." />
            </div>
        </div>
    )
}