import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/style'

export const Card = styled.div`
  color: ${cores.creme};
  background-color: ${cores.vermelha};
  position: relative;
  margin-top: 48px;
  padding: 4px;

  ${ButtonContainer} {
    margin-top: 16px;
    width: 100%;
  }

  .bgImage {
    width: 100%;
  }
`
export const Informacoes = styled.div`
  padding: 8px;

  .cabecalho {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .texto {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`
export const Title = styled.h4`
  font-size: 18px;
`

export const Descricao = styled.p`
  font-size: 14px;
  text-align: start;
  margin-bottom: 16px;
`

export const Rank = styled.div`
  display: inline-block;
  font-size: 18px;
`

export const Destaque = styled.div`
  display: inline-block;
  top: 16px;
  right: 8px;
  position: absolute;
`
