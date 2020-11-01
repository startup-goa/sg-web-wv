/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children, getCurrentPage }) => {
  const [currentTab, setCurrentTab] = useState(null);


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div style={{height: `100vh`}}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} getCurrentPage={(page=>getCurrentPage(page))} />
      <div
      >
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`,
          bottom: 0
        }}>
          © {new Date().getFullYear()}, 
          {` `}
          Startup Goa
        </footer>
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
