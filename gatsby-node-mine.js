const axios = require("axios")
const crypto = require("crypto")

const getPokemon = () =>
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")

exports.sourceNodes = async () => {
  console.log("HIT")
  const res = await getPokemon()
  res.results.map(pokemon => {
    const userNode = {
      id: `${pokemon.name}`,
      name: pokemon.name,
      parent: `__SOURCE__`,
      internal: {
        type: `RandomUser`,
      },
      children: [],
    }
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`)
    // add it to userNode
    userNode.internal.contentDigest = contentDigest
    createNode(userNode)
  })
  return
}
