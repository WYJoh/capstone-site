const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const queryResults = await graphql(`
        query MyQuery {
            allContentfulAlbums {
                nodes {
                    id
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
}