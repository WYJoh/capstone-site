import React from "react"
import Default from "../layouts/default.js"

export default function Album({ pageContext}) {
    const { album } = pageContext;
    return (
        <Default>
            <h2 className="albumTitle">{album.title}</h2>

            <div className="albumStyle">
                <div className="albumStyleInner">
                    <div className="row">
                        <img className="albumImgLg" src={album.cover.file.url} alt={album.title} />

                        <div className="rightCenterAlbum">
                            <h3 className="albumDesc"><i><b>{album.artist.artist}</b></i></h3>
                            <h3 className="albumDesc">({album.year})</h3>
                            <h3 className="albumDesc">[ rating icon ]</h3>
                            <hr></hr>
                            <h3 className="albumDescTrack"><b>TRACKLIST</b></h3>
                            <h4 className="albumTracklist">{album.tracks.tracks}</h4>
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