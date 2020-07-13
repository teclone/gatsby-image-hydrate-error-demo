import React from "react"
import { Banner, Banner2 } from "../components"
import { useMounted } from "../hooks/useMounted"
export default function () {
  const mounted = useMounted()

  return (
    <div
      key={"no change"}
      suppressHydrationWarning
      style={{ margin: "auto", maxWidth: "600px" }}
    >
      <p>you are inside the index page</p>

      <h2>This image rendered on the serve</h2>
      <Banner key={"no-change1"} />

      <h2>This other image renders only after mount</h2>
      {mounted && <Banner2 key={"banner-2"} />}
    </div>
  )
}
