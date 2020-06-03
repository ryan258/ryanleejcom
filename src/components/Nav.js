import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper, Logo } from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-ipsum.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <NavWrapper>
      <Link to="/">
        <Logo src={data.logo.publicURL} alt="Logo" />
      </Link>
    </NavWrapper>
  )
}
