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
    setData(apiData?.allWordpressWpEvents?.edges)
    console.log("apiData", apiData)
  }, [])

  useEffect(() => {
    console.log("api data", data)
  }, [data])

  const apiData = useStaticQuery(graphql`
    query Spaces {
      allWordpressWpEvents {
        edges {
          node {
            title
            type
            wordpress_id
            slug
            date(formatString: "DD-MM-YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Row>
        {/* <Col md={6}>
          <Menu
            defaultSelectedKeys={["upcoming"]}
            style={{ borderRadius: 5, padding: 8 }}
          >
            <Menu.Item key="upcoming">Upcoming</Menu.Item>
            <Menu.Item key="past">Past</Menu.Item>
          </Menu>
        </Col> */}
        <Col span={24}>
          {data.map(item => {
            return (
              <SpacesCard
                name={"Numadic IOT"}
                address={"Panaji, GA"}
                type={"cafe"}
                pricing={"2000 / day"}
                facilities={["Wifi", "Eateries", "3D printing"]}
                contactNumber={9182736455}
                email={"email@example.com"}
              />
            )
          })}
        </Col>
      </Row>
    </Layout>
  )
}

export default SpacesPage
