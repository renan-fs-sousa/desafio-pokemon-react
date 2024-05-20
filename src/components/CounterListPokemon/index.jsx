import * as SC from './styles'
import IconRedBall from '../../assets/icon-red-ball.svg'

// eslint-disable-next-line react/prop-types
export const CounterListPokemon = ({ counterAll }) => {
  return (
    <SC.BoxCounterListPokemon>
      <img src={IconRedBall} alt="" />
      <span>{counterAll} Pokémons</span>
    </SC.BoxCounterListPokemon>
  )
}
