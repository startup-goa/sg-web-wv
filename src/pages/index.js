import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SpacesCard from "../components/SpacesCard"

const IndexPage = () => {

  const [page, setPage] = useState('events')

  return(
    <Layout getCurrentPage={page=>setPage(page)}>
    <SEO title="StartUp Goa" />
    <p>Welcome</p>

  </Layout>
  )
}

export default IndexPage
