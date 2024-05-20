import styled from 'styled-components'
import herobgred from '../../assets/hero-bg-red.svg'

export const BoxBgSlideHero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url(${herobgred}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 70.6rem;
  z-index: -1;
`
