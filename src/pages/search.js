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
                        <h2 className="searchh2">ARTISTS</h2>
                        <div className="searchInner">
                            {data.allContentfulArtist.nodes.map(artist => (
                                <>
                                    <Link to={"/artist/"  + artist.id} style={{ textDecoration: 'none'}}>
                                        <h3 className="searchArtist">{artist.artist}</h3>
                                    </Link>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </Default>
        </>
    )
}

export const query = graphql`
query MyQuery2 {
    allContentfulArtist(filter: {node_locale: {eq: "en-US" }}) {
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
}
`