const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const queryResults = await graphql(`
        query MyQuery {
            allContentfulAlbums (filter: {rating: {lte: 5}, node_locale: {eq: "en-US"}}) {
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
    `)
    const productTemplate = path.resolve(`src/templates/album.js`)
    queryResults.data.allContentfulAlbums.nodes.forEach(node => {
        createPage({
            path: `/album/${node.id}`,
            component: productTemplate,
            context: {
                album: node,
            },
        })
    })


    const artistTemplate = path.resolve(`src/templates/artist.js`)
    queryResults.data.allContentfulAlbums.nodes.forEach(node => {
        createPage({
            path: `/artist/${node.artist.id}`,
            component: artistTemplate,
            context: {
                album: node,
            },
        })
    })
}