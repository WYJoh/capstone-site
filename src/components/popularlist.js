import * as React from "react"

export default function Popular({album}) {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>{album.title}</p>
                </div>
            </div>
        </div>
        </>
    )
}