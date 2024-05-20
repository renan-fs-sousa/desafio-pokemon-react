import * as SC from './styles'
import ArrowDownRed from '../../assets/arrow-down-red.svg'

export const ArrowDownHero = () => {
  return (
    <SC.ArrowDownHero>
      <a href="#">
        <img src={ArrowDownRed} alt="Arrow down color red" />
      </a>
    </SC.ArrowDownHero>
  )
}
