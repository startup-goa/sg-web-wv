import React from "react"
import { Card, Layout, Menu, Tag } from "antd"
import workstationImg from "./workstation.svg"
import MapsAndFlagsIcon from "../../images/maps-and-flags.svg"
import ContactIcon from "../../images/contact.svg"
import styles from "./index.module.css"

const { Header } = Layout

const SpacesCard = props => {
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
            <div className={styles.title}>Numadic IOT</div>
            <div className={styles.address}>
              <MapsAndFlagsIcon className={styles.locationIcon} />
              Panaji, GA
            </div>
          </div>
          <div className={styles.info}>
            <Tag color="blue">Coworking</Tag>
            <div className={styles.pricing}>₹ 2000 / day</div>
          </div>
          <div className={styles.info}>
            <div className={styles.facilities}>
              <Tag color="default">WiFi</Tag>
              <Tag color="default">Snacks</Tag>
              <Tag color="default">Lounge</Tag>
            </div>
            <div className={styles.contactContainer}>
              <ContactIcon className={styles.contactIcon} />
              9182736455, email@example.com
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default SpacesCard
