import * as React from "react"
import { Link } from "gatsby"

export default function Popular({album}) {
    return (
        <>
            <div className="itemslider">
                <Link to={"/album/"  + album.id}>
                    <img className="albumImgSm" src={album.cover.file.url} alt={album.title} />
                </Link>
                
                <Link to={"/album/"  + album.id} style={{ textDecoration: 'none'}}>
                    <h4 className="sliderText">{album.title}</h4>
                </Link>
                
                <h4>({album.year})</h4>

                <Link to={"/artist/" + album.artist.id} style={{ textDecoration: 'none'}}>
                    <h4 className="sliderText">{album.artist.artist}</h4>
                </Link>
            </div>
        </>
    )
}