import { Link } from 'react-router-dom'

import { Container, Hero, Title, Img } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <Hero>
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
  </Hero>
)

export default Header
