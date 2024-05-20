/* eslint-disable react/prop-types */
import { useState } from 'react'
import * as SC from './styles'
import searchIcon from '../../assets/search-icon.svg'

export const SearchBar = ({ setSearchData }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSearch = () => {
    setSearchData([inputValue])
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </SC.BoxSearchBar>
    </SC.SectionSearchBar>
  )
}

export default SearchBar
