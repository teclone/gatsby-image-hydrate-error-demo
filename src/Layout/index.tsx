// here, i am only interested in geting the say welcome module bundled, but gatsby ends
// up bundling say goodbye and getSquare

import React from "react"
import { sayWelcome } from "../utils"

export const Layout = ({ children }) => {
  return (
    <div>
      <h1>{sayWelcome()}</h1>
      {children}
    </div>
  )
}
