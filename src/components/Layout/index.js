// React
import React from "react"
// Gatsby
import { Link, graphql, useStaticQuery } from "gatsby"
// Routes
import routes from "../../routes"
// Styles
import "../../styles/index.scss"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteInfoComponent {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <div>
      <nav className="bg-primary text-light bold flex align-center p4 sticky-top">
        <Link to={routes.HOME}>{title}</Link>
      </nav>
      <main className="text-center">{children}</main>
    </div>
  )
}
