import React from "react"
import { Link } from "gatsby"

export default function Footer() {
    return (
        <>
            <div className="botNav">
                <ul className="botNavMid">
                    <li>
                        <p>Disc Hierarchy - 2021</p>
                    </li>
                </ul>

                <ul className="botNavRight">
                    <li>
                        <Link to="/contact">
                            <p>CONTACT</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}