// React
import { graphql } from "gatsby"
import React from "react"
// Components
import Layout from "../components/Layout"

export default function List(props) {
  // const { title, description } = props.data.site.siteMetadata
  const users = props.data.allRandomUser.edges
  console.log(users)

  // console.log(users)
  return (
    <Layout>
      {/* <h1>{title}</h1>
      <h3>{description}</h3> */}
    </Layout>
  )
}

export const query = graphql`
  query PokemonQuery {
    allRandomUser {
      edges {
        node {
          name
        }
      }
    }
  }
`
