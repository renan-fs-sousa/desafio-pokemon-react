/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import * as SC from './styles'
import { useState, useEffect } from 'react'

export const ShowingResultPokemon = ({
  counterShowing,
  typeActiveMenu,
  searchData
}) => {
  const [textFilter, setTextFilter] = useState('All')

  useEffect(() => {
    if (typeActiveMenu !== '') {
      setTextFilter(typeActiveMenu)
    }
  }, [typeActiveMenu])

  useEffect(() => {
    if (searchData !== '') {
      setTextFilter(searchData)
    }
  }, [searchData])

  return (
    <SC.BoxShowingResultListPokemon>
      <span>
        Showing {counterShowing} results for: <strong>'{textFilter}'</strong>
      </span>
    </SC.BoxShowingResultListPokemon>
  )
}
