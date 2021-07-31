import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (

  <Layout>
    <Seo title="Page two" />

    <header> <nav>
      <Link to ="/">Home</Link>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </nav> </header>
    
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
