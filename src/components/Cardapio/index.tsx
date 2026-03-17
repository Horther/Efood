import CItem from '../../models/cItem'
import CardapioItem from '../CardapioItem'
import { Container, List } from './style'

export type Props = {
  cItem: CItem[]
}

const Cardapio = ({ cItem }: Props) => (
  <Container className="container">
    <List>
      {cItem.map((cItem) => (
        <CardapioItem
          key={cItem.id}
          description={cItem.description}
          image={cItem.image}
          title={cItem.title}
        />
      ))}
    </List>
  </Container>
)

export default Cardapio
