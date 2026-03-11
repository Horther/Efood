import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.svg'

export const Hero = styled.div`
  background-image: url(${fundo});
  display: block;
  background-color: ${cores.cremeeEscuro};
  width: 100%;
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

export const Title = styled.h2`
  width: 539px;
  height: 84px;
  margin-top: 120px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`

export const Img = styled.div`
  margin: 0 auto;
  margin-top: 32px;
`
