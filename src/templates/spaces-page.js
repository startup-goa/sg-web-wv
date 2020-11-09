import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Row, Col, Menu } from "antd"
import Layout from "../components/layout"
import './spaces-pages.css'
import { EnvironmentFilled, TagOutlined, MailFilled } from "@ant-design/icons"

const SpacesPage = ({ data, location }) => {

  const displayData = data?.wordpressWpSpaces
  return (
    <Layout>
      <Row className="title">
        <Col md={6}>
          <h1>{displayData.title}</h1>
        </Col>
        <Col md={18}>
          <Row>
            <Col md={1} style={{ paddingTop: 8 }}>
              <EnvironmentFilled style={{ fontSize: 30 }} />
            </Col>
            <Col md={6}>{displayData.acf_fields.space_address}</Col>
          </Row>
        </Col>
      </Row>
      <Row className="description">
        <Col style={{ marginTop: 8 }} md={24}>
          <b>Price for a day:</b>
          <p>{displayData.acf_fields.price_for_one_day}</p>
        </Col>
        <Col style={{ marginTop: 8 }} md={24}>
          <b>Price for a month:</b>
          <p>{displayData.acf_fields.price_for_one_month}</p>
        </Col>
        <Col style={{ marginTop: 8 }} md={24}>
          <b>Email :</b>
          <p>
            {displayData.acf_fields.contact_email
              ? displayData.acf_fields.contact_email
              : "-"}
          </p>
        </Col>
        <Col style={{ marginTop: 8 }} md={24}>
          <b>Contact :</b>
          <p>
            {displayData.acf_fields.contact_phone
              ? displayData.acf_fields.contact_phone
              : "-"}
          </p>
        </Col>
        <Col style={{ marginTop: 8 }} md={24}>
          <b>Space details:</b>
          <div
            dangerouslySetInnerHTML={{
              __html: displayData.acf_fields.space_detail,
            }}
          />
        </Col>
      </Row>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SingleSpace($id: String!) {
    wordpressWpSpaces(id: { eq: $id }) {
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
`

export default SpacesPage
