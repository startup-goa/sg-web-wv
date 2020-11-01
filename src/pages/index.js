import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SpacesCard from "../components/SpacesCard"
import { Button, Input } from "antd"
import axios from "axios"

const IndexPage = () => {
  const [page, setPage] = useState("events")
  const [inputText, setInputText] = useState("")

  const data = useStaticQuery(graphql`
    query Events {
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
    <Layout getCurrentPage={page => setPage(page)}>
      <SEO title="StartUp Goa" />
      <p>Welcome</p>
      <SpacesCard />
      <Input
        style={{ width: "10rem", marginLeft: "2rem" }}
        onChange={e => setInputText(e?.target?.value)}
      />
      <Button
        onClick={async () => {
          const response = await axios.post("www.example.com", {
            input: inputText,
          })
          console.log("response-data:", response.data)
        }}
      >
        Submit
      </Button>
    </Layout>
  )
}

export default IndexPage
