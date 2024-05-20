const baseURL = 'https://pokeapi.co/api/v2/'

export const getAllPokemonTypes = async () => {
  try {
    const response = await fetch(baseURL + 'type?offset=0&limit=18')
    const data = await response.json()
    return data.results.map((item) => item.name)
  } catch (error) {
    console.error('Error fetching Pokémon types:', error)
    return []
  }
}

export const getPokemonMenuAll = async () => {
  try {
    const response = await fetch(baseURL + 'pokemon?offset=0&limit=9')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching Pokémon types:', error)
    return []
  }
}

export const getPokemonBytypeMenu = async (typePokemon) => {
  try {
    const response = await fetch(baseURL + 'type/' + typePokemon)
    const data = await response.json()
    //console.log(data)
    return data.pokemon.map((entry) => entry.pokemon.name)
  } catch (error) {
    console.error('Error fetching Pokémon types:', error)
    return []
  }
}

export const getDataPokemon = async (pokemonName) => {
  const noImage = 'https://placehold.co/280x280?text=No-Image'
  try {
    const response = await fetch(baseURL + 'pokemon/' + pokemonName)
    const data = await response.json()
    const { id, name, sprites, types } = data
    const pokemon = {
      id,
      name,
      image:
        sprites.other.dream_world.front_default ||
        sprites.other['official-artwork'].front_default ||
        sprites.other.home.front_default ||
        noImage,
      type1: types[0].type.name,
      type2: types[1] ? types[1].type.name : null
    }

    return pokemon
  } catch (error) {
    console.error('Error fetching Pokémon types:', error)
    return []
  }
}
