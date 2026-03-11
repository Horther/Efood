import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.cremeeEscuro};
  margin-top: 120px;
  padding: 40px;
`

export const Img = styled.div`
  display: flex;
  justify-content: center;

  .img {
    margin: 0 auto;
  }
`
export const Redes = styled.div`
  display: block;
  margin-top: 16px;
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ListItem = styled.li`
  margin-right: 4px;
`

export const Copyright = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;

  p {
    width: 480px;
    text-align: center;
    font-size: 10px;
  }
`
