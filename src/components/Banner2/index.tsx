import React from "react"
import GatsbyIcon from "../../images/gatsby-icon.png"

export const Banner2 = () => {
  return (
    <div suppressHydrationWarning>
      <img
        src={GatsbyIcon}
        alt={"them image"}
        key={"no-change-2"}
        suppressHydrationWarning
        width={300}
      />
    </div>
  )
}
