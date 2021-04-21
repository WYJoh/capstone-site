import React from "react"

export default function Container({children}) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}