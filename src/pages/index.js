import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Tmp from "../comp/tmp"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>coffee shop</div>
    <div className="tmp">
      <Tmp/>
    </div>
  </Layout>
)

export default IndexPage
