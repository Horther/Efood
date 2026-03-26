import styled, { createGlobalStyle } from 'styled-components'
import fundo from './assets/images/fundo.svg'

export const cores = {
  branca: '#fff',
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
    text-decoration: none;
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

export const Cabecalho = styled.div`
  background-image: url(${fundo});
  background-color: ${cores.cremeeEscuro};
  width: 100%;
`
