// React
import { graphql } from "gatsby"
import React from "react"
// Components
import Layout from "../components/Layout"

export default function List(props) {
  const { title } = props.data.site.siteMetadata
  const pokemon = props.data.allPokemon.edges.map(pokemon => pokemon.node)

  console.log(pokemon)
  return (
    <Layout>
      <h1>{title}</h1>
      {pokemon.map(p => (
        <p>{p.name}</p>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query query {
    site {
      siteMetadata {
        title
      }
    }
    allPokemon {
      edges {
        node {
          name
        }
      }
    }
  }
`
