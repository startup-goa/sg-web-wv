import React, { useEffect, useState } from "react"
import { Link, useStaticQuery } from "gatsby"
import { Row, Col, Menu } from "antd"
import Layout from "../components/layout"
import EventCard from "../components/EventCard/index"
import SEO from "../components/seo"
import SpacesCard from "../components/SpacesCard"

const SpacesPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(apiData?.allWordpressWpSpaces?.edges)
    console.log("apiData", apiData)
  }, [])

  useEffect(() => {
    console.log("spaces data", data)
  }, [data])

  const apiData = useStaticQuery(graphql`
    query Spaces {
      allWordpressWpSpaces {
        edges {
          node {
            id
            title
            slug
            acf_fields {
              contact_email
              contact_phone
              picture
              price_for_one_day
              price_for_one_month
              space_address
              space_detail
              space_map
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Row>
        <Col span={24}>
          {data.map(item => {
            return (
              <SpacesCard data={item.node}/>
            )
          })}
        </Col>
      </Row>
    </Layout>
  )
}

export default SpacesPage
