import React from "react"
import {
  FooterWrapper,
  FooterSocialWrapper,
  // FooterSocialIcons,
} from "../elements"
import { FaBeer } from "react-icons/fa"

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBeer />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBeer />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBeer />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBeer />
        </a>
        <p>&copy; 2020 Company. All rights reserved.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
