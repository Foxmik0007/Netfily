import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />

    <header> <nav>
      <Link to ="/">Home</Link>
      <Link to="/page-2/f">Go to page 2</Link>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </nav> </header>

    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
