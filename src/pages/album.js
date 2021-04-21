import React from "react"
import Default from "../layouts/default.js"

export default function Album({ pageContext}) {
    const { album } = pageContext;
    return (
        <Default>
            <h4>{album.title}</h4>
            <img className="" src={album.cover.file.url} alt={album.title} />
        </Default>
    )
}