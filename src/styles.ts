import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEE',
  preta: '#111',
  vermelha: '#E66767',
  cremeeEscuro: '#FFEBD9',
  creme: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    background-color: ${cores.creme};
    color: ${cores.vermelha};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
