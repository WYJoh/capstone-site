import React from "react"
import { Link } from "gatsby"
// to-do: more -> <Link to="/"></Link>
// to-do: fontawesome plug-ins

export default function Header() {
    return (
        <>
            <div className="topNav">
                <ul className="topNavLeft">
                    <li>
                        <Link to="/">
                            <img src="../images/musicnote.png" alt="logo" className="logoNav" />
                        </Link>
                    </li>
                    <li>
                        <h1>Disc Hierarchy</h1>
                    </li>
                </ul>

                <ul className="topNavRight">
                    <li>
                        <Link to="/search">
                            <p>SEARCH</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}