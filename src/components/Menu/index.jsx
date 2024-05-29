/* eslint-disable react/prop-types */
import * as SC from './styles'
import iconMenuBall from '../../assets/icon-menu-ball.svg'
import { Colors } from '../../styles/styles'

import { useState, useEffect } from 'react'
import { getAllPokemonTypes } from '../../services/Api'
import { getPokemonBytypeMenu } from '../../services/Api'

export const Menu = ({ setSearchData }) => {
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [typeActiveMenu, setTypeActiveMenu] = useState('All')

  useEffect(() => {
    const fetchData = async () => {
      const types = await getAllPokemonTypes()
      setPokemonTypes(types)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const pokemon = await getPokemonBytypeMenu(typeActiveMenu)

      setSearchData(pokemon)
    }

    if (typeActiveMenu != 'All') {
      fetchData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeActiveMenu])

  const handleClickMenu = (event, name) => {
    event.preventDefault()
    setTypeActiveMenu(name)
  }

  return (
    <SC.BoxMenu>
      <SC.MenuList>
        <SC.MenuItem className="active">
          <a href="#">
            <img src={iconMenuBall} style={{ padding: '0.5rem' }} alt="" />
            <span>All</span>
          </a>
        </SC.MenuItem>
        {pokemonTypes.map((name, index) => (
          <SC.MenuItem key={index}>
            <a href="#" onClick={(event) => handleClickMenu(event, name)}>
              <img src={`./src/assets/${name}.svg`} alt="" />
              <span style={{ color: Colors[name] }}>{name}</span>
            </a>
          </SC.MenuItem>
        ))}
      </SC.MenuList>
    </SC.BoxMenu>
  )
}
