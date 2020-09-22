import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from './footer'
import './layout.css';
import aSL from '../../content/assets/ASL-Title.svg';
import styled from 'styled-components';

import { rhythm, scale } from "../utils/typography"

const PieImage = styled.img`
  width: 10rem;
  margin-bottom: 0;
`;


const Layout = ({ location, title, children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  let header = (
    <h3
      style={{
        fontFamily: `Montserrat, sans-serif`,
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          color: `inherit`,
          display: `flex`,
          alignItems: `center`
        }}
        to={`/`}
      >
        {/* {title} */}
        <PieImage src={aSL} alt="ASL" />
        {"  "}
        <h1>Translator</h1>
      </Link>
    </h3>
  )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `space-between`
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
