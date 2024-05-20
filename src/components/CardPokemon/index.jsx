/* eslint-disable react/prop-types */
import * as SC from './styles'
import { Colors } from '../../styles/styles'

export const CardPokemon = ({ pokemonData }) => {
  const { id, name, image, type1, type2 } = pokemonData
  const idFormatted = `${id}`.length <= 3 ? ('000' + id).slice(-3) : `${id}`

  return (
    <SC.CardPokemon>
      <SC.BoxImageCardPokemon>
        <SC.BgCirlcleImageCardPokemon
          style={{ backgroundColor: Colors[type1] }}
        />
        <img src={image} alt="Image of Pokémon ${name}" />
      </SC.BoxImageCardPokemon>
      <p>#{idFormatted}</p>
      <SC.InfoCardPokemon>
        <span title="Nome">{name}</span>
        <div>
          <img
            src={`./src/assets/${type1}.svg`}
            title={`Type ${type1}`}
            alt={`Type ${type1}`}
          />
          {type2 ? (
            <img
              src={`./src/assets/${type2}.svg`}
              title={`Type ${type2}`}
              alt={`Type ${type2}`}
            />
          ) : null}
        </div>
      </SC.InfoCardPokemon>
    </SC.CardPokemon>
  )
}
