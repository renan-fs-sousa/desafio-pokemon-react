/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

import { getPokemonMenuAll } from '../../services/Api'
import { BoxListCardsPokemon } from '../BoxListCardsPokemon'
import { CounterListPokemon } from '../CounterListPokemon'
import { ShowingResultPokemon } from '../ShowingResultPokemon'

import * as SC from './styles'

export const ListPokemon = ({
  searchData,
  typeActiveMenu,
  setPokemonList,
  pokemonList
}) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const pokemon = await getPokemonMenuAll()
      setPokemonList(pokemon)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (pokemonList.results.length == 1) {
      setCounter(pokemonList.results.length)
    } else {
      setCounter(counter + pokemonList.results.length)
    }
  }, [pokemonList])

  useEffect(() => {
    if (typeActiveMenu !== null) {
      setCounter(0)
    }
  }, [typeActiveMenu])

  const { count, results, next } = pokemonList

  return (
    <SC.BoxListPokemon>
      <CounterListPokemon counterAll={count} />
      <ShowingResultPokemon
        counterShowing={counter}
        typeActiveMenu={typeActiveMenu}
        searchData={searchData}
      />
      <BoxListCardsPokemon
        pokemonList={results}
        typeActiveMenu={typeActiveMenu}
        next={next}
        searchData={searchData}
        setPokemonList={setPokemonList}
      />
    </SC.BoxListPokemon>
  )
}
