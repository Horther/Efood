import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.svg'
import macarrao from '../../assets/images/macarrão.svg'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${cores.cremeeEscuro};
  background-image: url(${fundo});
  padding: 40px 0;
`

export const LinkItem = styled.a`
  color: ${cores.vermelha};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
`

export const Button = styled.button`
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: ${cores.vermelha};
  font-size: 18px;
  font-weight: bold;
`

export const Img = styled.img`
  margin-left: 80px;
`

export const Showcase = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${macarrao});
  height: 260px;
  font-size: 32px;

  .container {
    p {
      font-weight: bold;
      color: ${cores.branca};
      align-items: flex-end;
      margin-top: 140px;
    }

    h2 {
      padding-top: 8px;
      font-weight: 100;
      color: ${cores.branca};
    }
  }
`
