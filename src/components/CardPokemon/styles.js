import styled from 'styled-components'

export const CardPokemon = styled.div`
  border-radius: 1.2rem;
  height: 30.4rem;
  width: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0rem 1rem 5.1rem -0.5rem #b7bdc14d;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0.5rem 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    transform: scale(1.04);
    transition:
      box-shadow 0.3s ease,
      transform 0.3s ease;
  }

  span {
    font-size: 1.8rem;
    font-weight: 600;
    color: #2f3133;
  }

  p {
    padding-left: 2.8rem;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.95rem;
    color: #7a7d80;
  }
`

export const BoxImageCardPokemon = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.8rem 4rem;

  img {
    width: 17rem;
    height: 17rem;
    padding: 0;
    margin: 0;
  }
`

export const BgCirlcleImageCardPokemon = styled.div`
  width: 16.5rem;
  height: 16.5rem;
  border-radius: 50%;
  position: absolute;
  background-color: #e96303;
  opacity: 20%;
  z-index: -1;
`

export const InfoCardPokemon = styled.div`
  display: flex;
  width: 100%;
  padding: 0.6rem 2.8rem 2.4rem 2.8rem;
  align-items: center;
  justify-content: space-between;

  span {
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
    &:first-letter {
      text-transform: uppercase;
    }
  }
  div {
    display: flex;
  }
`
