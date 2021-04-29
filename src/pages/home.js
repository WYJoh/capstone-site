import * as React from "react"
import Default from "../layouts/default.js"
import Popular from "../components/popularlist.js"
import Random from "../components/randomizer.js"
import Alltime from "../components/alltimelist.js"
import '../style/index.scss';
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Default>

        <h2 className="homeh2">HIGHEST RATED ALL-TIME</h2>


      <div className="albumSliderAlbum">
        {data.allContentfulAlbums.nodes.map(album => (
          <Alltime album={album}></Alltime>
        ))}
      </div>

      <div className="text-center">
          <Random></Random>
      </div>


        <h2 className="homeh2">THIS WEEK'S TOP ARTISTS</h2>


      <div className="albumSliderArtist">
        {data.allContentfulArtist.nodes.map(artist => (
          <Popular artist={artist}></Popular>
        ))}
      </div>
    </Default>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulAlbums (filter: {rating: {eq: 5}, node_locale: {eq: "en-US" }}) {
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
  allContentfulArtist(filter: {rating: {lte: 10}, node_locale: {eq: "en-US" }}) {
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