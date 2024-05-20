import * as SC from './styles'
import iconMenuBall from '../../assets/icon-red-ball.svg'

export const Menu = () => {
  return (
    <SC.BoxMenu>
      <SC.MenuList>
        <SC.MenuItem>
          <a href="">
            <img src={iconMenuBall} alt="" />
            <span>All</span>
          </a>
        </SC.MenuItem>
      </SC.MenuList>
    </SC.BoxMenu>
  )
}
