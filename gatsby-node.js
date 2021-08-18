const axios = require("axios")
// const crypto = require("crypto")

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  // fetch raw data from the randomuser api
  const fetchRandomUser = () =>
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  // await for results
  const res = await fetchRandomUser()

  // map into these results and create nodes
  res.data.results.map((user, i) => {
    // Create your node object
    const userNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Pokemon`,
      },
      children: [],
      name: user.name,
    }

    const contentDigest = JSON.stringify(userNode)
    userNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(userNode)
  })

  return
}
