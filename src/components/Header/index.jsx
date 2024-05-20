import * as SC from './styles'
import logoPokemon from '../../assets/logo-pokemon.svg'

export const Header = () => {
  return (
    <SC.Header>
      <div className="box">
        <a href="#">
          <img src={logoPokemon} alt="Logo Pokémon" title="Logo Pokémon" />
        </a>
        <span>
          Case Study Code<strong>Boost</strong>
        </span>
      </div>
    </SC.Header>
  )
}
