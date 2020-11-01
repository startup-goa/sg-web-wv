import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"




const IndexPage = () => {

  const [page, setPage] = useState('events')


    const data = useStaticQuery(graphql`
      query Events {
        wordpressWpEvents {
          id, title, date, status, type
        }
      }
    `)

  console.log('data', data)


  return(
    <Layout getCurrentPage={page=>setPage(page)}>
    <SEO title="StartUp Goa" />
    <p>Welcome</p>

  </Layout>
  )
}


export default IndexPage
