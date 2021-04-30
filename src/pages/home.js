import * as React from "react"
import Default from "../layouts/default.js"
import Popular from "../components/popularlist.js"
import Alltime from "../components/alltimelist.js"
import { FaMusic } from "@react-icons/all-files/fa/FaMusic";
import '../style/index.scss';
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

export default function Home({ data }) {
  return (
    <>
      <Helmet>
        <title>Rate Your Favorite Albums (Home) - Disc Hierarchy</title>
        <meta name="description" value="Always wanted to rate your favorite albums? You've found the right place!" />
      </Helmet>

      <Default>

        <h2 className="homeh2">HIGHEST RATED ALL-TIME</h2>

        <div className="albumSliderAlbum">
          {data.allContentfulAlbums.nodes.map(album => (
            <Alltime album={album}></Alltime>
          ))}
        </div>

        <div className="text-center">
          <Link to="/search">
            <button className="searchButton">
              <FaMusic className="musicIcon" /><b> MUSIC LIBRARY </b><FaMusic className="musicIcon" />
            </button>
          </Link>
        </div>

        <h2 className="homeh2">THIS WEEK'S TOP ARTISTS</h2>

        <div className="albumSliderArtist">
          {data.allContentfulArtist.nodes.map(artist => (
            <Popular artist={artist}></Popular>
          ))}
        </div>
      </Default>
    </>
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