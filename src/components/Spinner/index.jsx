import * as SC from './styles'
import pokeSpinner from '../../assets/poke-spinner.svg'

export const Spinner = () => {
  return (
    <SC.OverlaySpinner>
      <SC.Spinner>
        <img src={pokeSpinner} alt="" />
        <span>Loading...</span>
      </SC.Spinner>
    </SC.OverlaySpinner>
  )
}
