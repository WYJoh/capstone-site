import React from "react"
import Default from "../layouts/default.js"
import { Link } from "gatsby"

export default function Album({ pageContext }) {
    const { album } = pageContext;
    return (
        <Default>
            <h2 className="albumTitle"><b>{album.title}</b></h2>

            <div className="albumStyle">
                <div className="albumStyleInner">
                    <div className="row">
                        <img className="albumImgLg" src={album.cover.file.url} alt={album.title} />

                        <div className="rightCenterAlbum">
                            <Link to={"/artist/" + album.artist.id} style={{ textDecoration: 'none'}}>
                                <h3 className="albumDesc"><i><b>{album.artist.artist}</b></i></h3>
                            </Link>

                            <h3 className="albumDesc">({album.year})</h3>
                            <h3 className="albumDesc">[ rating icon ]</h3>
                            <hr></hr>
                            <h3 className="albumDescTrack"><b>TRACKLIST</b></h3>
                            <h4 className="albumTracklist"><b>{album.tracks.tracks}</b></h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button className="albumButton">RATE / REVIEW</button>
            </div>
        </Default>
    )
}