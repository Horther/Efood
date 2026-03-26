import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  color: ${cores.vermelha};
  background-color: ${cores.creme};
  font-size: 14px;
  font-weight: bold;
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
  border: none;
`

export const ButtonLink = styled(Link)`
  color: ${cores.creme};
  background-color: ${cores.vermelha};
  font-size: 16px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
