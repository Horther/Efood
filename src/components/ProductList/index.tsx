import Plate from '../../models'
import Product from '../Product'
import { Container, List } from './style'

export type Props = {
  plate: Plate[]
}

const ProductList = ({ plate }: Props) => (
  <Container className="container">
    <List>
      {plate.map((plate) => (
        <Product
          key={plate.id}
          description={plate.description}
          image={plate.image}
          rank={plate.rank}
          title={plate.title}
          bgColor="cre"
          tag={plate.tag}
        />
      ))}
    </List>
  </Container>
)

export default ProductList
