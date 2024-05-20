import * as SC from './styles'
import stars from '../../assets/stars-pokeball.svg'
import BigPokeballRed from '../../assets/big-red-pokeball.svg'

export const BigPokeballHero = () => {
  return (
    <SC.BigPokeballHero>
      <img src={stars} alt="3 Stars" />
      <img
        id="bigPokeball"
        src={BigPokeballRed}
        alt="Big pokeball red in center"
      />
    </SC.BigPokeballHero>
  )
}
