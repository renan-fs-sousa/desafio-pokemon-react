import { useState } from 'react'

import { GlobalStyle } from './styles/styles'

import { OverlaySlideHero } from './components/OverlaySlideHero'
import { BoxBgSlideHero } from './components/BoxBgSlideHero'
import { BoxBgSearchBar } from './components/BoxBgSearchBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { Spinner } from './components/Spinner'
import { SearchBar } from './components/SearchBar'
import { Main } from './components/Main'

function App() {
  const [searchData, setSearchData] = useState([])

  return (
    <>
      <GlobalStyle />
      <OverlaySlideHero />
      <BoxBgSlideHero />
      <BoxBgSearchBar />
      <div className="wrapper">
        <Header />
        <Hero />
        <SearchBar setSearchData={setSearchData} />
        <Main searchData={searchData} setSearchData={setSearchData} />
      </div>
      <Footer />
      <Spinner />
    </>
  )
}

export default App
