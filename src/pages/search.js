import * as React from "react"
import Default from "../layouts/default.js"

export default function Search() {
    return (
        <>
        <Default>
            <div className="bodySearch">
                <input type="search" className="barSearch" placeholder="Search for Artist or Album..." />
            </div>
        </Default>
        </>
    )
}