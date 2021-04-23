import React from "react"
import { Link } from "gatsby"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

export default function Header() {
    return (
        <>
            <div className="topNav">
                <ul className="topNavLeft">
                    <li>
                        <Link to="/">
                            <p>LINK</p>
                        </Link>
                    </li>
                    <li>
                        <h1>Disc Hierarchy</h1>
                    </li>
                </ul>

                <ul className="topNavRight">
                    <li>
                        <Link to="/search">
                            <FaSearch />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}