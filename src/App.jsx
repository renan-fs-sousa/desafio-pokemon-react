import { useState } from 'react'

import { GlobalStyle } from './styles/styles'

import { OverlaySlideHero } from './components/OverlaySlideHero'
import { BoxBgSlideHero } from './components/BoxBgSlideHero'
import { BoxBgSearchBar } from './components/BoxBgSearchBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'

import { SearchBar } from './components/SearchBar'
import { Main } from './components/Main'

function App() {
  const [searchData, setSearchData] = useState('')
  const [typeActiveMenu, setTypeActiveMenu] = useState('')
  const [pokemonList, setPokemonList] = useState({
    count: 0,
    next: '',
    results: []
  })

  return (
    <>
      <GlobalStyle />
      <OverlaySlideHero />
      <BoxBgSlideHero />
      <BoxBgSearchBar />
      <div className="wrapper">
        <Header />
        <Hero />
        <SearchBar
          setSearchData={setSearchData}
          setPokemonList={setPokemonList}
          setTypeActiveMenu={setTypeActiveMenu}
        />
        <Main
          typeActiveMenu={typeActiveMenu}
          setTypeActiveMenu={setTypeActiveMenu}
          searchData={searchData}
          setSearchData={setSearchData}
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
