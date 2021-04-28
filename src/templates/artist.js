import React from "react"
import Default from "../layouts/default.js"
import { Link } from "gatsby"

export default function Artist({ pageContext }) {
    const { album } = pageContext;
    return (
        <Default>
            <h2 className="artistTitle"><b>{album.artist.artist}</b></h2>

            <div className="artistStyle">
                <img className="artistImgLg" src={album.artist.image.file.url} alt={album.artist.artist} />
            </div>

            <div className="artistAlbumAlignOuter">
                <div className="artistAlbumAlignInner">
                    <h3 className="artistAlbumTitle">ALBUM LIST</h3>

                    <div className="artistAlbumListOuter">
                        {album.artist.albums.map(album => (
                            <div className="row artistAlbumListInner">
                                <Link to={"/album/"  + album.id}>
                                    <img className="artistAlbumImg" src={album.cover.file.url} alt={album.title} />
                                </Link>

                                <div>
                                    <Link to={"/album/"  + album.id} style={{ textDecoration: 'none'}}>
                                        <h4 className="artistAlbumList1">{album.title}</h4>
                                    </Link>
                                    <h4 className="artistAlbumList2">({album.year})</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Default>
    )
}