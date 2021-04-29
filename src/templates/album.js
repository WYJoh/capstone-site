import React from "react"
import Default from "../layouts/default.js"
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { Link } from "gatsby"

export default function Album({ pageContext }) {
    const widget = document.querySelector(".starIcon");

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

                            <h3 className="albumDescAlt">({album.year})</h3>
                            <h3 className="albumDescAlt">RATING: {album.rating} / 5</h3>
                            <hr></hr>
                            <h3 className="albumDescTrack"><b>TRACKLIST</b></h3>
                            <h4 className="albumTracklist"><b>{album.tracks.tracks}</b></h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="starIcon">
                <input className="starInput" type="radio" name="rate" id="rate-5" />
                <label for="rate-5" class="fas fa-star"><FaStar /></label>
                <input className="starInput" type="radio" name="rate" id="rate-4" />
                <label for="rate-4" class="fas fa-star"><FaStar /></label>
                <input className="starInput" type="radio" name="rate" id="rate-3" />
                <label for="rate-3" class="fas fa-star"><FaStar /></label>
                <input className="starInput" type="radio" name="rate" id="rate-2" />
                <label for="rate-2" class="fas fa-star"><FaStar /></label>
                <input className="starInput" type="radio" name="rate" id="rate-1" />
                <label for="rate-1" class="fas fa-star"><FaStar /></label>
                <form action="#"></form>
            </div>
        </Default>
    )
}