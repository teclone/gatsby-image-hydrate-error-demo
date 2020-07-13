import React from "react"
import Astronaut from "../../images/gatsby-astronaut.png"
export const Banner = () => {
  return (
    <div suppressHydrationWarning>
      <img
        src={Astronaut}
        alt={"them image"}
        key={"no-change"}
        suppressHydrationWarning
        width={300}
      />
    </div>
  )
}
