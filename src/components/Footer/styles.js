import styled from 'styled-components'
import { Colors } from '../../styles/styles'

export const Footer = styled.footer`
  margin-top: 8.8rem;
  width: 100%;
  height: 18.9rem;
  background: ${Colors.colorBgFooter};
  color: white;
`

export const BoxFooterText = styled.div`
  strong {
    font-family: 'Inter', sans-serif;
    font-size: 1.8rem;
    line-height: 3.24rem;
  }
  p {
    font-family: 'Inter', sans-serif;
    font-size: 1.4rem;
    line-height: 2.52rem;
  }
`
