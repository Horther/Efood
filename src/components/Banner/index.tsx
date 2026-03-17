import { Link } from 'react-router-dom'
import { Cabecalho } from '../../styles'
import { Button, Container, Img, LinkItem, Showcase } from './style'
import logo from '../../assets/images/logo.svg'
import macarrao from '../../assets/images/macarrão.svg'

const Banner = () => (
  <Cabecalho>
    <Container className="container">
      <Link to={'/'}>
        {' '}
        <LinkItem>Restaurantes</LinkItem>{' '}
      </Link>
      <LinkItem>
        <Img src={logo} alt="Efood" />
      </LinkItem>
      <Button type="button">0 produto(s) no carrinho</Button>
    </Container>
    <Showcase backgroundImage={macarrao}>
      <div className="container">
        <h2>Italiana</h2>
        <p>la dolce vita trattoria</p>
      </div>
    </Showcase>
  </Cabecalho>
)

export default Banner
