import styled from 'styled-components'

export const OverlaySpinner = styled.div`
  position: relative;
  width: 90.4rem;
  height: 100vh;
  top: 7rem;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Spinner = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.6rem;
  span {
    margin-left: 1.5rem;
  }
  img {
    width: 5rem;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
