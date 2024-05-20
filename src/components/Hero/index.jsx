import { ArrowDownHero } from '../ArrowDownHero'
import { BigPokeballHero } from '../BigPokeballHero'
import { BulletHero } from '../BulletHero'
import { Tag } from '../Tag'
import * as SC from './styles'

export const Hero = () => {
  return (
    <section>
      <SC.Hero>
        <div className="box">
          <Tag />
          <h1>Who is that Pokémon?</h1>
          <p>
            The perfect guide for those who want to hunt Pokémons around the
            world
          </p>
          <ArrowDownHero />
          <BulletHero />
          <BigPokeballHero />
        </div>
      </SC.Hero>
    </section>
  )
}
