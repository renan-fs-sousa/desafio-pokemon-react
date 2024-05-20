import { useState, useEffect } from 'react'

import { getDataPokemon } from '../../services/Api'
import { CardPokemon } from '../CardPokemon'

import * as SC from './styles'

export const BoxListCardsPokemon = () => {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const dataPokemon = await getDataPokemon('0')
      setPokemon(dataPokemon)
    }
    fetchData()
  }, [])

  return (
    <>
      <SC.BoxListCardsPokemon>
        {pokemon.id && <CardPokemon pokemonData={pokemon} />}
      </SC.BoxListCardsPokemon>

      {pokemon.id && <SC.ButtonLoadMore>Load More</SC.ButtonLoadMore>}
    </>
  )
}
