import { useState } from 'react'
import * as SC from './styles'
import searchIcon from '../../assets/search-icon.svg'

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      )
      const data = await response.json()
      console.log(data) // Aqui você pode manipular os dados da resposta da API
    } catch (error) {
      console.error('Error fetching Pokemon:', error)
    }
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <SC.SectionSearchBar>
      <SC.BoxSearchBar className="box">
        <h2>Select your Pokémon</h2>
        <div>
          <button type="button" onClick={handleSearch}>
            <img src={searchIcon} alt="Search" />
          </button>
          <input
            id="searchInput"
            type="text"
            placeholder="Search name or code"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </SC.BoxSearchBar>
    </SC.SectionSearchBar>
  )
}
