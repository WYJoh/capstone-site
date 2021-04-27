import React from "react"
import Default from "../layouts/default.js"
import { FaStar } from "@react-icons/all-files/fa/FaStar";
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
                            <h3 className="albumDesc">{album.rating} / 5</h3>
                            <hr></hr>
                            <h3 className="albumDescTrack"><b>TRACKLIST</b></h3>
                            <h4 className="albumTracklist"><b>{album.tracks.tracks}</b></h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center rateAlbum">
                <label for="1star" title="text">
                    <input type="radio" className="1star" name="rate" value="1" style={{ display: 'none' }} />
                    <FaStar className="faStar" />
                </label>

                <label for="2star" title="text">
                    <input type="radio" className="2star" name="rate" value="2" style={{ display: 'none' }} />
                    <FaStar className="faStar" />
                </label>

                <label for="3star" title="text">
                    <input type="radio" className="3star" name="rate" value="3" style={{ display: 'none' }} />
                    <FaStar className="faStar" />
                </label>

                <label for="4star" title="text">
                    <input type="radio" className="4star" value="4" style={{ display: 'none' }} />
                    <FaStar className="faStar" />
                </label>

                <label for="5star" title="text">
                    <input type="radio" className="5star" name="rate" value="5" style={{ display: 'none' }} />
                    <FaStar className="faStar" />
                </label>
            </div>
        </Default>
    )
}