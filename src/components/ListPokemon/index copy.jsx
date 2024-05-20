import { BoxListCardsPokemon } from '../BoxListCardsPokemon'
import { CounterListPokemon } from '../CounterListPokemon'
import { ShowingResultPokemon } from '../ShowingResultPokemon'
import * as SC from './styles'

export const ListPokemon = () => {
  return (
    <SC.BoxListPokemon>
      <CounterListPokemon />
      <ShowingResultPokemon />
      <BoxListCardsPokemon />
    </SC.BoxListPokemon>
  )
}
