import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Row, Col, Tag, Button } from "antd"
import Layout from "../components/layout"
import "./spaces-pages.css"
import {
  LinkedinOutlined,
  MailFilled,
  TwitterOutlined,
} from "@ant-design/icons"

const PeoplePage = ({ data, location }) => {
  const displayData = data?.wordpressWpPeople
  return (
    <Layout>
      <Row className="title">
        <Col md={12}>
          <h1>{displayData.title}</h1>
        </Col>
        <Col md={12}>
          <Row>
            <Col md={2} style={{ paddingTop: 8 }}>
              <Tag color="blue">{`${
                displayData.role == 7
                  ? "Compnay Secretary"
                  : displayData.role == 8
                  ? "Chartered Accountant"
                  : "Lawyer"
              }`}</Tag>
            </Col>
            <Col md={6}>{displayData.acf_fields.location_address}</Col>
          </Row>
        </Col>
      </Row>
      <Row className="description">
        <Col md={24}>
          <MailFilled style={{ marginRight: 8 }} />
          {displayData.acf_fields.email ? displayData.acf_fields.email : "-"}
        </Col>
        <Col
          md={displayData.acf_fields.linkedin_ ? 1 : 0}
          style={{ paddingTop: 8 }}
        >
          <a
            onClick={e => {
              e.preventDefault()
              window.open(
                `${displayData.acf_fields.linkedin_}`,
                "_blank" // <- This is what makes it open in a new window.
              )
            }}
            href={`${displayData.acf_fields.linkedin_}`}
          >
            <LinkedinOutlined
              size={100}
              style={{ marginRight: 4, fontSize: 20 }}
            />
          </a>
        </Col>
        <Col
          md={displayData.acf_fields.twitter ? 1 : 0}
          style={{ paddingTop: 8 }}
        >
          <a
            onClick={e => {
              e.preventDefault()
              window.open(
                `${displayData.acf_fields.twitter}`,
                "_blank" // <- This is what makes it open in a new window.
              )
            }}
            href={`${displayData.acf_fields.twitter}`}
          >
            <TwitterOutlined
              size={100}
              style={{ marginRight: 4, fontSize: 20 }}
            />
          </a>
        </Col>
        <Col style={{ marginTop: 8 }} md={24}>
          <b>Description:</b>
          <div
            dangerouslySetInnerHTML={{
              __html: displayData.acf_fields.description_,
            }}
          />
        </Col>
      </Row>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SinglePerson($id: String!) {
    wordpressWpPeople(id: { eq: $id }) {
      id
      title
      slug
      role
      acf_fields {
        description_
        email
        linkedin_
        twitter
        website
      }
    }
  }
`

export default PeoplePage
