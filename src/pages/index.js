import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextBox from "../components/textBox"
import { rhythm } from "../utils/typography"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <TextBox />
      </Layout>
    )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
