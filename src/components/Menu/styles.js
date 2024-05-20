import styled from 'styled-components'

export const BoxMenu = styled.div`
  display: flex;
  width: 23.8rem;
  border-right: 0.1rem solid #eff3f6;
  flex-direction: column;
  align-items: flex-start;
`

export const MenuList = styled.ul`
  img {
    margin-right: 2.5rem;
  }
`

export const MenuItem = styled.li`
  display: inline-flex;
  width: 100%;
  align-items: center;
  margin-bottom: 4rem;
  filter: grayscale(100%);
  opacity: 50%;
  cursor: pointer;
  &:hover {
    filter: none;
    opacity: 100%;
  }
  &.active {
    filter: none;
    opacity: 100%;
  }
  span {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    &:first-letter {
      text-transform: uppercase;
    }
  }

  > a {
    display: contents;
    color: #3e75c3;
  }
`
