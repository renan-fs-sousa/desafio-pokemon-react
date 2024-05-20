import * as SC from './styles'

// eslint-disable-next-line react/prop-types
export const ShowingResultPokemon = ({ counterShowing }) => {
  return (
    <SC.BoxShowingResultListPokemon>
      <span>Showing {counterShowing} results for:</span>
    </SC.BoxShowingResultListPokemon>
  )
}
