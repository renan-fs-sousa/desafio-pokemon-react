/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { getDataPokemon } from '../../services/Api'
import { CardPokemon } from '../CardPokemon'
import * as SC from './styles'

export const BoxListCardsPokemon = ({ onCounterUpdate, searchData }) => {
  const [pokemon, setPokemon] = useState([])
  const [error, setError] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(8) // Inicializa o índice com 9 Pokémon

  useEffect(() => {
    const fetchData = async () => {
      try {
        const namesPokemon = searchData
        const fetchedPokemon = []
        for (const namePokemon of namesPokemon) {
          const dataPokemon = await getDataPokemon(namePokemon)
          fetchedPokemon.push(dataPokemon)
        }
        setPokemon(fetchedPokemon)
      } catch (error) {
        setError(error.message)
      }
    }

    if (searchData.length) {
      fetchData()
    }
  }, [searchData]) // Adiciona searchData como dependência para o useEffect

  const handleLoadMore = () => {
    const newIndex = currentIndex + 9 // Calcula o novo índice
    setCurrentIndex(newIndex) // Atualiza o índice
    onCounterUpdate(
      newIndex < pokemon.length - 1 ? newIndex + 1 : pokemon.length
    )
  }

  return (
    <>
      <SC.BoxListCardsPokemon>
        {error ? (
          <p>Ocorreu um erro: {error}</p>
        ) : (
          pokemon.slice(0, currentIndex + 1).map((pokemonData, index) => {
            onCounterUpdate(index + 1)
            return <CardPokemon key={index} pokemonData={pokemonData} />
          })
        )}
      </SC.BoxListCardsPokemon>
      {currentIndex < pokemon.length - 1 && ( // Verifica se ainda há mais Pokémon para carregar
        <SC.ButtonLoadMore onClick={handleLoadMore}>
          Load More
        </SC.ButtonLoadMore>
      )}
    </>
  )
}
