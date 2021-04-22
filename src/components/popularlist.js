import * as React from "react"
import { Link } from "gatsby"

export default function Popular({album}) {
    return (
        <>
            <div className="itemslider">
                <Link to={"/album/"  + album.id}>
                    <img className="albumImgSm" src={album.cover.file.url} alt={album.title} />
                </Link>
                
                <Link to={"/album/"  + album.id}>
                    <h4>{album.title}</h4>
                </Link>
                
                <h4>({album.year})</h4>
                <h4>{album.artist.artist}</h4>
            </div>
        </>
    )
}