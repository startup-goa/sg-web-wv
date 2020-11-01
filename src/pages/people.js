import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const PeoplePage = () => {

  const data = useStaticQuery(graphql`
    query People {
      wordpressWpEvents {
        id
        title
        date
        status
        type
      }
    }
  `)

  console.log("data", data)

  return (
    <Layout>
      <SEO title="StartUp Goa" />
      <p>Welcome</p>
    </Layout>
  )
}

export default PeoplePage
