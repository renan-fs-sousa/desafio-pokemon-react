/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { getDataPokemon } from '../../services/Api'
import { CardPokemon } from '../CardPokemon'
import * as SC from './styles'

export const BoxListCardsPokemon = ({ onCounterUpdate }) => {
  const [pokemon, setPokemon] = useState([])
  const [error, setError] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(8) // Inicializa o índice com 9 Pokémon

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ids = Array.from({ length: 20 }, (_, i) => i + 1)
        const fetchedPokemon = []
        for (const id of ids) {
          const dataPokemon = await getDataPokemon(id)
          fetchedPokemon.push(dataPokemon)
          setPokemon(fetchedPokemon)
          //await new Promise((resolve) => setTimeout(resolve, 1000)) // Aguarda 1 segundo antes de buscar o próximo Pokémon
        }
      } catch (error) {
        setError(error.message)
      }
    }

    if (pokemon.length === 0) {
      fetchData()

      //onCounterUpdate(currentIndex + 1)
    }
  }, [])

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
