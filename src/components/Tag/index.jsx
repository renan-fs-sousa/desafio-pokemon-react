import * as SC from './styles'
import bag from '../../assets/bag.svg'

export const Tag = () => {
  return (
    <SC.Tag>
      <SC.CircleBag />
      <img src={bag} />
      <span>pokedéx</span>
    </SC.Tag>
  )
}
