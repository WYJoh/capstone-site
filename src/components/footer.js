import React from "react"
import { Link } from "gatsby"
import { FaCommentAlt } from "@react-icons/all-files/fa/FaCommentAlt";

export default function Footer() {
    return (
        <>
            <div className="botNav">
                <ul className="botNavMid">
                    <li>
                        <p>&copy; Disc Hierarchy - 2021</p>
                    </li>
                </ul>

                <ul className="botNavRight">
                    <li>
                        <h4 className="botComment">ASK ME A QUESTION!</h4>
                    </li>
                    <li>
                        <Link to="/contact">
                            <FaCommentAlt />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}