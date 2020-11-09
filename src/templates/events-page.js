import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Row, Col, Menu, Button } from "antd"
import Layout from "../components/layout"
import "./spaces-pages.css"
import { EnvironmentFilled, TagOutlined, MailFilled } from "@ant-design/icons"

const EventsPage = ({ data, location }) => {
  const displayData = data?.wordpressWpEvents
console.log('event data', data)
  return (
    <Layout>
      <Row className="title">
        <Col md={12}>
          <h1>{displayData.title}</h1>
        </Col>
        <Col md={12}>
          <Row>
            <Col md={2} style={{ paddingTop: 8 }}>
              <EnvironmentFilled style={{ fontSize: 30 }} />
            </Col>
            <Col md={6}>{displayData.acf_fields.location_address}</Col>
          </Row>
        </Col>
      </Row>
      <Row className="description">
        <Col style={{ marginTop: 8 }} md={24}>
          <b>Timming</b>
          <span style={{ marginLeft: 8 }}>
            {displayData.acf_fields.start_date}
          </span>
          {displayData.acf_fields.end_date && (
            <span> to {displayData.acf_fields.end_date}</span>
          )}
        </Col>
        <Col style={{ marginTop: 8 }} md={24}>
          <b>Description:</b>
          <div
            dangerouslySetInnerHTML={{
              __html: displayData.acf_fields.event_description,
            }}
          />
        </Col>
        <Col md={24}>
            {
        displayData.acf_fields.event_link&&
          <Button
            type="primary"
            onClick={() => {
              window.open(`${displayData.acf_fields.event_link}`)
            }}
          >
            Event Page
          </Button>
            }
        </Col>
      </Row>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SingleEvent($id: String!) {
    wordpressWpEvents(id: { eq: $id }) {
      id
      title
      slug
      acf_fields {
        end_date
        event_description
        event_link
        location_address
        location_map
        start_date
      }
    }
  }
`

export default EventsPage
