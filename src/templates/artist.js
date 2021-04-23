import React from "react"
import Default from "../layouts/default.js"
import Container from "../components/container12.js"

export default function Artist({ pageContext }) {
    const { album } = pageContext;
    return (
        <Default>
            <h2 className="artistTitle"><b>{album.artist.artist}</b></h2>

            <div className="artistStyle">
                <img className="artistImgLg" src={album.artist.image.file.url} alt={album.artist.artist} />
            </div>

            <Container>
                <h3>ALBUM LIST</h3>
                <p>{album.artist.albums.title}</p>
            </Container>
        </Default>
    )
}