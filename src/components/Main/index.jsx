/* eslint-disable react/prop-types */
import { ListPokemon } from '../ListPokemon'
import { Menu } from '../Menu'
import * as SC from './styles'

export const Main = ({ searchData, setSearchData }) => {
  return (
    <SC.SectionMain>
      <SC.BoxDataMain className="box">
        <Menu setSearchData={setSearchData} />
        <ListPokemon searchData={searchData} />
      </SC.BoxDataMain>
    </SC.SectionMain>
  )
}
