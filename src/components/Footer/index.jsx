import * as SC from './styles'
import logo from '../../assets/logo.svg'

export const Footer = () => {
  return (
    <SC.Footer>
      <div className="box wrapper">
        <SC.BoxFooterText>
          <strong>Módulo JavaScript</strong>
          <p>Consumindo e exibindo dados de uma API</p>
        </SC.BoxFooterText>
        <a href="#" className="logo">
          <img src={logo} alt="Logo da Codeboost" title="Logo da Codeboost" />
        </a>
      </div>
    </SC.Footer>
  )
}
