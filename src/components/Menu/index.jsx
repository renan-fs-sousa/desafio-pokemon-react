/* eslint-disable react/prop-types */
import * as SC from './styles'
import iconMenuBall from '../../assets/icon-menu-ball.svg'
import { Colors } from '../../styles/styles'

import { useState, useEffect, useRef } from 'react'
import { getAllPokemonTypes } from '../../services/Api'
import { getPokemonBytypeMenu, getPokemonMenuAll } from '../../services/Api'

export const Menu = ({ setTypeActiveMenu, typeActiveMenu, setPokemonList }) => {
  const [pokemonTypes, setPokemonTypes] = useState([])
  const isFirstRender = useRef(true)

  useEffect(() => {
    const fetchData = async () => {
      const types = await getAllPokemonTypes()
      setPokemonTypes(types)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (typeActiveMenu == 'All') {
        const pokemon = await getPokemonMenuAll()

        const pokemonName = pokemon.results.map((item) => ({
          name: item.name
        }))

        setPokemonList({
          count: pokemon.count,
          next: pokemon.next,
          results: pokemonName
        })
      } else if (typeActiveMenu !== null) {
        const pokemon = await getPokemonBytypeMenu(typeActiveMenu)

        const pokemonName = pokemon.map((name) => ({ name }))

        setPokemonList((prevState) => ({
          ...prevState,
          results: pokemonName
        }))
      }
    }

    isFirstRender.current ? (isFirstRender.current = false) : fetchData()
  }, [typeActiveMenu])

  const handleClickMenu = (event, name) => {
    event.preventDefault()
    setTypeActiveMenu(name)
  }

  return (
    <SC.BoxMenu>
      <SC.MenuList>
        <SC.MenuItem
          className={
            typeActiveMenu == 'All' || typeActiveMenu == '' ? 'active' : ''
          }
          onClick={(event) => handleClickMenu(event, 'All')}
        >
          <a href="#">
            <img src={iconMenuBall} style={{ padding: '0.5rem' }} alt="" />
            <span>All</span>
          </a>
        </SC.MenuItem>
        {pokemonTypes.map((name, index) => (
          <SC.MenuItem
            key={index}
            className={typeActiveMenu === name ? 'active' : ''}
            onClick={(event) => handleClickMenu(event, name)}
          >
            <a href="#">
              <img src={`./src/assets/${name}.svg`} alt="" />
              <span style={{ color: Colors[name] }}>{name}</span>
            </a>
          </SC.MenuItem>
        ))}
      </SC.MenuList>
    </SC.BoxMenu>
  )
}
