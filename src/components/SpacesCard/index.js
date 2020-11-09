import React from "react"
import { Link } from "gatsby"
import { Row, Col, Tag, Card } from "antd"
import { EnvironmentFilled, TagOutlined, MailFilled } from "@ant-design/icons"

const SpaceCard = props => {
  return (
    <Link to={`/spaces/${props.data.slug}`}>
      <Card style={{ color: "#333333", marginBottom: 4 }} hoverable>
        <Row className="event-card">
          <Col md={3} sm={24} xs={24}>
            <div className="image-holder"></div>
          </Col>
          <Col md={21}>
            <Row>
              <Col md={6} sm={18} xs={18}>
                <b>{props.data.title}</b>
              </Col>
              <Col md={4} sm={4} xs={4}>
                <Tag color="volcano">{`co-working`}</Tag>
              </Col>
              <Col md={6} sm={0} xs={0}>
                <EnvironmentFilled style={{ marginRight: 8 }} />
                {props.data.acf_fields.space_address}
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={18} xs={18}>
                <TagOutlined style={{marginRight: 8}} />
                <React.Fragment>
                {
                  props.data.acf_fields.price_for_one_day?`${props.data.acf_fields.price_for_one_day} / day`: `-`
                }
                </React.Fragment>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Link>
  )
}

export default SpaceCard
