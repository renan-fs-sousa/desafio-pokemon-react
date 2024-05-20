import { useState, useEffect } from 'react'
import { getDataPokemon } from '../../services/Api'
import { CardPokemon } from '../CardPokemon'
import * as SC from './styles'

export const BoxListCardsPokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [error, setError] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(8) // Renderiza os primeiros 9 pokémons

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ids = Array.from({ length: 20 }, (_, i) => i + 1)
        const fetchedPokemon = []
        for (const id of ids) {
          const dataPokemon = await getDataPokemon(id)
          fetchedPokemon.push(dataPokemon)
          setPokemon(fetchedPokemon)
          //await new Promise((resolve) => setTimeout(resolve, 500)) // Apenas aguarda antes de buscar o próximo pokémon
        }
      } catch (error) {
        setError(error.message)
      }
    }

    if (pokemon.length === 0) {
      fetchData()
    }
  }, [])

  const handleLoadMore = () => {
    setCurrentIndex((prevIndex) => prevIndex + 9) // Incrementa o índice em 9 para renderizar mais 9 Pokémon
  }

  return (
    <>
      <SC.BoxListCardsPokemon>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          pokemon
            .slice(0, currentIndex + 1)
            .map((pokemonData, index) => (
              <CardPokemon key={index} pokemonData={pokemonData} />
            ))
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
