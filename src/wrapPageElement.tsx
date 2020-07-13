import React, { FunctionComponent } from "react"
import { Layout } from "./Layout"

export const wrapPageElement: FunctionComponent<any> = props => {
  return <Layout>{props.elements}</Layout>
}
