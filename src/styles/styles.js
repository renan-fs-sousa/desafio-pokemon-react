import { createGlobalStyle } from 'styled-components'

export const Colors = {
  colorMainRed: '#c20001',
  colorMainBlue: '#3f67ba',
  colorBgFooter: '#3F5DB3',
  bug: '#9BBA48',
  dark: '#595761',
  dragon: '#2C6AC1',
  electric: '#D4BC34',
  fairy: '#E296E1',
  fighting: '#C44D61',
  ground: '#CE8056',
  ice: '#71BAAC',
  normal: '#909090',
  poison: '#AC6ACA',
  psychic: '#EB8B85',
  rock: '#84BEB3',
  ghost: '#616EB7',
  grass: '#73B861',
  steel: '#6594A1',
  water: '#4F77BE',
  fire: '#E96303',
  flying: '#758CBD'
}

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

button {
  cursor: pointer;
}

.wrapper {
  position: relative;
  margin: auto;
  max-width: 123.7rem;
}

.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
`
