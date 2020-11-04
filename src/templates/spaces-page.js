import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Row, Col, Menu } from "antd"
import Layout from "../components/layout"
import EventCard from "../components/EventCard/index"
import SEO from "../components/seo"
import SpacesCard from "../components/SpacesCard"

const SpacesPage = ({ data, location }) => {
  return (
    <Layout>
      <Row>
        <Col span={24}>
          <pre lang="json">{JSON.stringify(data, null, 2)}</pre>
        </Col>
        <Col span={24}>
          <pre lang="json">{JSON.stringify(location, null, 2)}</pre>
        </Col>
      </Row>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SingleSpace($id: String!) {
    wordpressWpSpaces(id: { eq: $id }) {
      title
      type
      status
      slug
      path
      id
      date
    }
  }
`

export default SpacesPage
