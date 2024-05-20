/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

import { getPokemonMenuAll } from '../../services/Api'
import { BoxListCardsPokemon } from '../BoxListCardsPokemon'
import { CounterListPokemon } from '../CounterListPokemon'
import { ShowingResultPokemon } from '../ShowingResultPokemon'

import * as SC from './styles'

export const ListPokemon = ({ searchData }) => {
  const [pokemonList, setPokemonList] = useState({ count: 0, results: [] })
  const [counter, setCounter] = useState(0)
  const updateCounter = (newValue) => {
    setCounter(newValue)
  }

  useEffect(() => {
    const fetchData = async () => {
      const pokemon = await getPokemonMenuAll()
      setPokemonList(pokemon)
    }
    fetchData()
  }, [])

  const { count, results } = pokemonList
  console.log(results.map((item) => item.name))
  return (
    <SC.BoxListPokemon>
      <CounterListPokemon counterAll={count} />
      <ShowingResultPokemon counterShowing={counter} />
      <BoxListCardsPokemon
        onCounterUpdate={updateCounter}
        searchData={searchData}
        // searchData={
        //   searchData > 0
        //     ? searchData
        //     : (searchData = results.map((item) => item.name))
        // }
      />
    </SC.BoxListPokemon>
  )
}
