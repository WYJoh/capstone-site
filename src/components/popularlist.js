import * as React from "react"
import { Link } from "gatsby"

export default function Popular({album}) {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <img className="albumImgSm" src={album.cover.file.url} alt={album.title} />
                    <Link to={"/album" + album.title}>
                        <h4>{album.title}</h4>
                    </Link>
                    <h4>({album.year})</h4>
                    <h4>{album.artist.artist}</h4>
                </div>
            </div>
        </div>
        </>
    )
}