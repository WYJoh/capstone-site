import * as React from "react"
import { FaCompactDisc } from "@react-icons/all-files/fa/FaCompactDisc";
import '../style/index.scss';
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <>
      <Helmet>
          <title>Rate Your Favorite Albums - Disc Hierarchy</title>
          <meta name="description" value="Always wanted to rate your favorite albums? You've found the right place!" />
          <meta http-equiv="refresh" content="8; url='/home'" />
      </Helmet>
      <h1 className="indexh1">Disc Hierarchy</h1>
      
      <h2 className="discComponents">
        <FaCompactDisc className="discIcon" style={{ color: '#001829'}} />
      </h2>
    </>
  )
}

export default IndexPage