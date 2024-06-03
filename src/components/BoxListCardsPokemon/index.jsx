/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { getDataPokemon, getPokemonMenuAll } from '../../services/Api'
import { Spinner } from '../Spinner'

import { CardPokemon } from '../CardPokemon'
import * as SC from './styles'

export const BoxListCardsPokemon = ({
  pokemonList,
  next,
  setPokemonList,
  typeActiveMenu
}) => {
  const [pokemon, setPokemon] = useState([])
  const [prevPokemon, setPrevPokemon] = useState([])
  const [isLoading, setLoading] = useState(false)

  const [error, setError] = useState(null)

  useEffect(() => {
    if (typeActiveMenu != null) {
      setPrevPokemon([])
    }
  }, [typeActiveMenu])

  useEffect(() => {
    setPokemon(prevPokemon)
  }, [prevPokemon])

  useEffect(() => {
    setLoading(true)
    setError(null)
    const fetchData = async () => {
      try {
        const namesPokemon = pokemonList.map((item) => item.name)
        const fetchedPokemon = []
        for (const namePokemon of namesPokemon) {
          const dataPokemon = await getDataPokemon(namePokemon)
          if (dataPokemon.error) {
            throw new Error(dataPokemon.message)
          }

          fetchedPokemon.push(dataPokemon)
        }

        if (pokemonList.length == 1) {
          setPrevPokemon(fetchedPokemon)
        } else {
          setPrevPokemon([...prevPokemon, ...fetchedPokemon])
        }
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [pokemonList])

  const handleLoadMoreAll = async () => {
    const nextPageListPokemon = await getPokemonMenuAll(next)
    setPokemonList(nextPageListPokemon)
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SC.BoxListCardsPokemon>
            {error ? (
              <p>Ocorreu um erro: {error}</p>
            ) : (
              pokemon.map((pokemonData, index) => (
                <CardPokemon key={index} pokemonData={pokemonData} />
              ))
            )}
          </SC.BoxListCardsPokemon>
          {((typeActiveMenu === 'All' && pokemonList.length > 1) ||
            (typeActiveMenu === '' && pokemonList.length > 1)) && (
            <SC.ButtonLoadMore onClick={handleLoadMoreAll}>
              Load More
            </SC.ButtonLoadMore>
          )}
        </>
      )}
    </>
  )
}
