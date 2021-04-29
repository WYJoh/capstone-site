import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Default from "../layouts/default"

export default function Search({ data }) {
    return (
        <>
            <Default>
                <h1 className="searchh1"><b>LIBRARY</b></h1>

                <div className="searchAlignOuter">
                    <div className="searchAlignInner">
                        <div className="row">
                            <div className="searchLeft">
                                <h2 className="searchh2Left">ARTISTS</h2>
                                <div className="searchInnerLeft">
                                    {data.allContentfulArtist.nodes.map(artist => (
                                        <>
                                            <Link to={"/artist/"  + artist.id} style={{ textDecoration: 'none'}}>
                                                <h3 className="searchArtist">{artist.artist}</h3>
                                            </Link>
                                        </>
                                    ))}
                                </div>
                            </div>

                            <div className="searchRight">
                                <h2 className="searchh2Right">ALBUMS</h2>
                                <div className="searchInnerRight">
                                    {data.allContentfulAlbums.nodes.map(album => (
                                        <>
                                            <Link to={"/album/"  + album.id} style={{ textDecoration: 'none'}}>
                                                <h3 className="searchAlbum">{album.title}</h3>
                                            </Link>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Default>
        </>
    )
}

export const query = graphql`
query MyQuery2 {
    allContentfulArtist(
        filter: {node_locale: {eq: "en-US" }}
        sort: {fields: artist, order: ASC}
        ) {
        nodes {
            artist
            id
            image {
                file {
                    url
                }
            }
            albums {
                id
                title
                year
                cover {
                    file {
                        url
                    }
                }
            }
        }
    }
    allContentfulAlbums (
        filter: {node_locale: {eq: "en-US" }}
        sort: {fields: title, order: ASC}
    ) {
        nodes {
            id
            artist {
                artist
                id
                albums {
                    id
                    title
                    year
                    cover {
                        file {
                            url
                        }
                    }
                }
                image {
                    file {
                        url
                    }
                }
            }
            title
            tracks {
                tracks
            }
            year
            cover {
                file {
                    url
                }
            }
            rating
        }
    }
}
`