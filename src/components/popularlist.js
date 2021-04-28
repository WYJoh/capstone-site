import * as React from "react"
import { Link } from "gatsby"

export default function Popular({artist}) {
    return (
        <>
            <div className="itemslider">
                <Link to={"/artist/"  + artist.id}>
                    <img className="albumImgSm" src={artist.image.file.url} alt={artist.artist} />
                </Link>

                <Link to={"/artist/"  + artist.id} style={{ textDecoration: 'none'}}>
                    <h4 className="sliderText">{artist.artist}</h4>
                </Link>
            </div>
        </>
    )
}