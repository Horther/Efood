import { Link } from 'react-router-dom'
import { Container, Copyright, Img, List, ListItem, Redes } from './style'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.svg'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.svg'
import instagram from '../../assets/images/instagram-round-svgrepo-com1.svg'

const Footer = () => (
  <Container>
    <Link to={'/'}>
      <Img>
        <img src={logo} alt="Efood" />
      </Img>
    </Link>
    <Redes>
      <List>
        <ListItem>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </ListItem>
        <ListItem>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </ListItem>
        <ListItem>
          <a href="#">
            <img src={twitter} alt="X" />
          </a>
        </ListItem>
      </List>
    </Redes>
    <Copyright>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </Copyright>
  </Container>
)

export default Footer
