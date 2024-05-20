import styled from 'styled-components'
import { Colors } from '../../styles/styles'

export const Tag = styled.div`
  display: flex;
  align-items: center;
  width: 12.1rem;
  background-color: white;
  border: none;
  border-radius: 24.4rem;
  padding: 0.5rem;
  margin: 2.1rem auto 2.9rem;
  img {
    padding: 0.5rem;
    position: relative;
  }
  span {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-left: 0.8rem;
    color: ${Colors.colorMainRed};
  }
`
export const TagBlue = styled.div`
  display: flex;
  align-items: center;
  width: 12.1rem;
  background-color: white;
  border: none;
  border-radius: 24.4rem;
  padding: 0.5rem;
  margin: 2.1rem auto 2.9rem;

  img {
    padding: 0.5rem;
    position: relative;
  }

  span {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-left: 0.8rem;
    color: ${Colors.colorMainBlue};
  }
`
export const CircleBag = styled.div`
  position: absolute;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  background-color: ${Colors.colorMainRed};
  opacity: 20%;
`

export const circleBagBlue = styled.div`
  position: absolute;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  background-color: ${Colors.colorMainBlue};
  opacity: 20%;
`
