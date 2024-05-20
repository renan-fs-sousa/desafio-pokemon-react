import styled from 'styled-components'
import close from '../../../assets/close.svg'

export const Modal = styled.div`
  display: none;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: unset;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.2s; /* Adiciona uma animação de fade in */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`
export const ModalContent = styled.div`
  display: flex;
  background-color: #fefefe;
  margin: auto;
  position: relative;
  width: 71rem;
  top: 50%;
  transform: translateY(-50%);
  height: 50.8rem;
  border-radius: 1.6rem;
  box-shadow: 0rem 1rem 4rem 0rem #0d0c470d;
`

export const BoxImagesModal = styled.div`
  background: url(../images/bg-modal-fire.svg) no-repeat top center;
  width: 19.1rem;
  height: 100%;
  display: flex;
  > img {
    min-width: 20rem;
    margin-left: 3.5rem;
    margin-top: 16.5rem;
    max-height: 20rem;
  }
`

export const BoxIconTypeModal = styled.div`
  position: absolute;
  display: flex;
  border-radius: 50%;
  left: 13.7rem;
  top: 2rem;
  width: 3.4rem;
  height: 3.4rem;
  background-color: white;
  justify-items: center;
  justify-content: center;
  align-items: center;
`
export const ButtonCloseModal = styled.button`
  background: url(${close}) no-repeat center center;
  right: 0;
  position: absolute;
  font-size: 3rem;
  font-weight: 500;
  top: -4.4rem;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 0.8rem;
  border: none;
  background-color: #ffffff;
`

export const BoxInfoModal = styled.div`
  padding: 3.5rem 7.2rem 2.9rem 7.4rem;
`

export const BoxTypeModal = styled.div`
  display: flex;
  text-align: center;
  justify-items: center;
  align-items: center;
  justify-content: flex-start;
`

export const BoxGroupTypeModal = styled.div`
  margin-top: 1rem;
  margin-right: 1rem;
`

export const BoxMeasurementsModal = styled.div`
  margin-top: 3.2rem;
  width: 100%;
  align-items: center;
  display: flex;
`
export const BoxStatsModal = styled.div`
  p {
    margin-top: 3.2rem;
    margin-bottom: 1.6rem;
    font-family: 'Inter', sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.57rem;
    letter-spacing: -0.01em;
    color: #4d5053;
  }
`

export const BoxGroupStatsModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3rem;
  h3 {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.45rem;
    color: #7a7d80;
  }
`

export const BoxInfoDataStatsModal = styled.div`
  display: flex;
  width: 29.3rem;
  margin-left: 1rem;
  position: relative;
  align-items: center;
  background-color: #eff3f6;
  justify-content: space-evenly;
`

export const InfoDataStatsBarValue = styled.div`
  background-color: #c20001;
  display: flex;
  position: absolute;
  left: 0;
  height: 0.3rem;
  z-index: 3;
  max-width: 100%;
`

export const InfoDataStatsBarSeparator = styled.div`
  width: 0.4rem;
  height: 0.3rem;
  background-color: #fff;
  z-index: 3;
`
