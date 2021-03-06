import React from "react"
import { Link } from "gatsby"
import { FaCompactDisc } from "@react-icons/all-files/fa/FaCompactDisc";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

export default function Header() {
    return (
        <>
            <div className="topNav">
                <ul className="topNavLeft">
                    <li className="iconAlign">
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <FaCompactDisc className="discIconSm" style={{ color: '#FBF5F3'}} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <h1 className="homeh1">Disc Hierarchy</h1>
                        </Link>
                    </li>
                </ul>

                <ul className="topNavRight">
                    <li>
                        <Link to="/search">
                            <FaSearch className="searchIconSm" />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}