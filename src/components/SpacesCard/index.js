import React from "react"
import { Card, Layout, Menu, Row, Col, Tag } from "antd"
import coworkingImg from "./coworking.png"
import { EnvironmentFilled, PhoneFilled, MailFilled } from "@ant-design/icons"
import styles from "./index.module.css"

const { Header } = Layout

/**
 *
 * @param {{
 *  thumbnail: string,
 *  name: string,
 *  address: string,
 *  type: 'co-working' | 'cafe',
 *  pricing: string,
 *  facilities: string[],
 *  contactNumber: number,
 *  email: string,
 * }} param0
 */
const SpacesCard = ({
  thumbnail,
  name,
  address,
  type,
  pricing,
  facilities,
  contactNumber,
  email,
}) => {
  return (
    <Card bodyStyle={{ padding: 0 }}>
      <Row className={styles.cardBody}>
        <Col
          className={styles.thumbnailContainer}
          xs={6}
          sm={5}
          md={4}
          lg={3}
          xl={2}
          xxl={2}
        >
          <img
            src={thumbnail || coworkingImg}
            alt="work-space-thumbnail"
            className={styles.thumbnail}
          />
        </Col>
        <Col xs={18} sm={19} md={20} lg={21} xl={22} xxl={22}>
          <Row className={styles.content}>
            <Col xs={16} sm={16} md={8} lg={8} xl={8} xxl={8}>
              <div className={styles.title}>{name}</div>
              {address && (
                <div className={styles.address}>
                  <EnvironmentFilled className={styles.locationIcon} />
                  {address}
                </div>
              )}
            </Col>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
              {type === "co-working" && (
                <Tag color="blue" className={styles.typeTag}>
                  Co-Working
                </Tag>
              )}
              {type === "cafe" && (
                <Tag color="volcano" className={styles.typeTag}>
                  Cafe
                </Tag>
              )}
              <div className={styles.pricing}>{pricing}</div>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
              <div className={styles.facilities}>
                {facilities?.map(facility => (
                  <Tag color="default" key={"spaces.facility." + facility}>
                    {facility}
                  </Tag>
                ))}
              </div>
              <div className={styles.contactContainer}>
                {contactNumber && (
                  <div>
                    <PhoneFilled className={styles.contactIcon} />
                    {contactNumber}
                  </div>
                )}
                {email && (
                  <div>
                    <MailFilled className={styles.contactIcon} />
                    {email}
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default SpacesCard
