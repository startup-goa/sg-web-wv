import React from "react"
import { Card, Layout, Menu, Tag } from "antd"
import workstationImg from "./workstation.svg"
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
      <div className={styles.cardBody}>
        <div className={styles.thumbnailContainer}>
          <img
            src={workstationImg}
            alt="work-space-thumbnail"
            className={styles.thumbnail}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.title}>{name}</div>
            <div className={styles.address}>
              <EnvironmentFilled className={styles.locationIcon} />
              {address}
            </div>
          </div>
          <div className={styles.info}>
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
          </div>
          <div className={styles.info}>
            <div className={styles.facilities}>
              {facilities?.map(facility => (
                <Tag color="default">{facility}</Tag>
              ))}
            </div>
            <div className={styles.contactContainer}>
              <div>
                <PhoneFilled className={styles.contactIcon} />
                {contactNumber}
              </div>
              <div>
                <MailFilled className={styles.contactIcon} />
                {email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default SpacesCard
