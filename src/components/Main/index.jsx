/* eslint-disable react/prop-types */

import { ListPokemon } from '../ListPokemon'

import { Menu } from '../Menu'
import * as SC from './styles'

export const Main = ({
  searchData,
  setSearchData,
  setTypeActiveMenu,
  typeActiveMenu,
  setPokemonList,
  pokemonList
}) => {
  return (
    <SC.SectionMain>
      <SC.BoxDataMain className="box">
        <Menu
          setSearchData={setSearchData}
          setTypeActiveMenu={setTypeActiveMenu}
          typeActiveMenu={typeActiveMenu}
          setPokemonList={setPokemonList}
        />
        <ListPokemon
          searchData={searchData}
          typeActiveMenu={typeActiveMenu}
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
        />
      </SC.BoxDataMain>
    </SC.SectionMain>
  )
}
