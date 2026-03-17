import { Link } from 'react-router-dom'

import { Container, Title, Img } from './styles'

import logo from '../../assets/images/logo.svg'
import { Cabecalho } from '../../styles'

const Header = () => (
  <Cabecalho>
    <Container>
      <Link to={'/'}>
        <Img>
          <img src={logo} alt="Efood" />
        </Img>
      </Link>
    </Container>
    <Container>
      <Title>Viva experiências gastronômicas no conforto da sua casa </Title>
    </Container>
  </Cabecalho>
)

export default Header
