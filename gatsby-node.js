const axios = require("axios")
const crypto = require("crypto")

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
        type: `RandomUser`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],
      name: user.name,

      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`)
    // add it to userNode
    userNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(userNode)
  })

  return
}
