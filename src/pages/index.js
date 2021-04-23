import * as React from "react"
import Default from "../layouts/default.js"
import Popular from "../components/popularlist.js"
import Container from "../components/container12.js"
import '../style/index.scss';
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Default>
      <Container>
        <h2>POPULAR THIS WEEK</h2>
      </Container>

      <div className="albumSlider">
        {data.allContentfulAlbums.nodes.map(album => (
          <Popular album={album}></Popular>
        ))}
      </div>

      <div className="text-center">
          <button className="randomizerButton">GENERATE RANDOM ALBUM</button>
      </div>

      <Container>
        <h2>HIGHEST RATED ALL-TIME</h2>
      </Container>
    </Default>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  allContentfulAlbums {
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
    }
  }
}
`