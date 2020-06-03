import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

// {element} is destructuring the variables so we can render out what we want to wrap our application with
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
)
