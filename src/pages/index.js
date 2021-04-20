import * as React from "react"
import Default from "../layouts/default.js"
import Popular from "../components/popularlist.js"
import '../style/index.scss';
import { graphql } from "gatsby"

// markup
const IndexPage = ({ data }) => {
  return (
    <Default>
      <h2>POPULAR THIS WEEK</h2>

      {data.allContentfulAlbums.nodes.map(album => (
        <Popular album={album}></Popular>
      ))}

      <div className="text-center">
        <button className="randomizerButton">GENERATE RANDOM ALBUM</button>
      </div>

      <h2>HIGHEST RATED ALL-TIME</h2>
    </Default>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  allContentfulAlbums {
    nodes {
      artist {
        artist
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
    }
  }
}
`